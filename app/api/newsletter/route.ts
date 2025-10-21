import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { trackServerEvent } from '@/lib/analytics'

// Types
type Role = 'Attorney' | 'Advisor' | 'Agent'
type Source = 'popup' | 'inline' | 'ribbon' | 'chat'

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  role: z.enum(['Attorney', 'Advisor', 'Agent']).optional(),
  source: z.enum(['popup', 'inline', 'ribbon', 'chat']).default('inline'),
  website: z.string().optional() // Honeypot field
})

// Rate limiting - Simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const emailHashStore = new Map<string, { count: number; resetTime: number }>()

// Simple hash function for email rate limiting
function simpleHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash.toString()
}

function checkRateLimit(
  store: Map<string, { count: number; resetTime: number }>,
  key: string,
  maxRequests: number,
  windowMs: number
): boolean {
  const now = Date.now()
  const record = store.get(key)

  if (!record || now > record.resetTime) {
    store.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

// Analytics tracking is now handled by the imported trackServerEvent function

// Mailchimp integration
async function addToMailchimp(email: string, role?: Role): Promise<{ success: boolean; isDuplicate?: boolean }> {
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  
  // If no API key is configured, use mock implementation for development
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_AUDIENCE_ID) {
    console.log(`[MOCK] Added to Mailchimp: ${email}${role ? ` (${role})` : ''}`)
    
    // Mock logic - simulate duplicate detection for testing
    if (email.includes('duplicate')) {
      return { success: false, isDuplicate: true }
    }
    
    return { success: true }
  }
  
  try {
    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: role ? { ROLE: role } : {},
          tags: role ? [role] : [],
        }),
      }
    )
    
    if (response.status === 400) {
      const data = await response.json()
      if (data.title === 'Member Exists') {
        return { success: false, isDuplicate: true }
      }
      console.error('Mailchimp validation error:', data)
      return { success: false }
    }
    
    if (!response.ok) {
      console.error('Mailchimp API error:', response.status, response.statusText)
      return { success: false }
    }
    
    console.log(`✅ Successfully added to Mailchimp: ${email}${role ? ` (${role})` : ''}`)
    return { success: true }
    
  } catch (error) {
    console.error('Mailchimp API error:', error)
    return { success: false }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    // Rate limiting: 60 requests per minute per IP
    if (!checkRateLimit(rateLimitStore, clientIP, 60, 60 * 1000)) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = newsletterSchema.parse(body)

    // Honeypot check - if website field is filled, it's likely a bot
    if (validatedData.website && validatedData.website.trim() !== '') {
      // Return success to avoid revealing the honeypot
      return NextResponse.json({ message: 'Thank you for subscribing!' })
    }

    // Email-specific rate limiting: 5 requests per minute per email hash
    const emailHash = simpleHash(validatedData.email.toLowerCase())
    if (!checkRateLimit(emailHashStore, emailHash, 5, 60 * 1000)) {
      return NextResponse.json(
        { message: 'Too many attempts with this email. Please try again later.' },
        { status: 429 }
      )
    }

    // Add to Mailchimp
    const result = await addToMailchimp(validatedData.email, validatedData.role)

    if (result.isDuplicate) {
      // Track duplicate attempt
      await trackServerEvent('newsletter_subscribed', {
        email: validatedData.email,
        role: validatedData.role,
        source: validatedData.source
      })
      
      return NextResponse.json(
        { message: 'You are already subscribed to our newsletter.' },
        { status: 409 }
      )
    }

    if (!result.success) {
      // Log failure but don't track as conversion
      console.log('Newsletter subscription failed:', { email: validatedData.email, role: validatedData.role })
      
      return NextResponse.json(
        { message: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    // Track successful subscription
    await trackServerEvent('newsletter_subscribed', {
      email: validatedData.email,
      role: validatedData.role,
      source: validatedData.source
    })

    // Log successful subscription (remove in production or use proper logging)
    console.log(`New subscriber: ${validatedData.email}${validatedData.role ? ` (${validatedData.role})` : ''} from ${validatedData.source}`)

    return NextResponse.json({ 
      message: 'Thank you for subscribing!',
      source: validatedData.source 
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.issues[0].message },
        { status: 422 }
      )
    }

    console.error('Newsletter API error:', error)
    return NextResponse.json(
      { message: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
