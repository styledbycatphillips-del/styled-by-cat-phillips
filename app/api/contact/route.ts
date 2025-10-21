   import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In a production environment, you would send this data to:
    // - Email service (SendGrid, Mailgun, etc.)
    // - CRM system (HubSpot, Salesforce, etc.)
    // - Database for lead tracking
    
    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.ip || 'unknown'
    })

    // TODO: Integrate with email service
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: siteConfig.links.email,
      from: 'noreply@styledbycatphillips.com',
      subject: `New consultation request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    }
    
    await sgMail.send(msg)
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your interest! Cat will be in touch within 24 hours to schedule your consultation.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
