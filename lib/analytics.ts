// Analytics helper for GA4 event tracking
// Handles both client-side and server-side event tracking

export interface NewsletterAnalyticsEvent {
  event: 'popup_impression' | 'popup_engaged' | 'popup_submit' | 'popup_close' | 'inline_submit' | 'newsletter_subscribed'
  source?: 'popup' | 'inline' | 'ribbon' | 'chat' | 'editorial'
  role?: 'Attorney' | 'Advisor' | 'Agent'
  email_provided?: boolean
}

// Client-side GA4 tracking
export function trackEvent(eventName: NewsletterAnalyticsEvent['event'], parameters?: Omit<NewsletterAnalyticsEvent, 'event'>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'newsletter',
      event_label: 'signup',
      source: parameters?.source || 'inline',
      role: parameters?.role || undefined,
      email_provided: parameters?.email_provided || false,
      // Standard GA4 parameters
      engagement_time_msec: 100,
      custom_parameter_1: 'newsletter_component'
    })
  }
  
  // Fallback logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${eventName}`, parameters)
  }
}

// Server-side GA4 Measurement Protocol (for production)
export async function trackServerEvent(
  eventName: 'newsletter_subscribed',
  parameters: {
    email?: string
    role?: 'Attorney' | 'Advisor' | 'Agent'
    source?: 'popup' | 'inline' | 'ribbon' | 'chat'
  }
) {
  // In production, you would send this to GA4 Measurement Protocol
  const measurementId = process.env.GA4_MEASUREMENT_ID
  const apiSecret = process.env.GA4_API_SECRET
  
  if (!measurementId || !apiSecret) {
    // Development fallback
    console.log(`[Server Analytics] ${eventName}`, {
      email: parameters.email ? 'provided' : 'none',
      role: parameters.role,
      source: parameters.source
    })
    return
  }
  
  try {
    // Generate a unique client_id (in production, use proper user identification)
    const clientId = `${Date.now()}.${Math.random()}`
    
    const payload = {
      client_id: clientId,
      events: [
        {
          name: eventName,
          parameters: {
            event_category: 'newsletter',
            event_label: 'signup',
            source: parameters.source || 'inline',
            role: parameters.role || undefined,
            email_provided: Boolean(parameters.email),
            custom_parameter_1: 'api_endpoint'
          }
        }
      ]
    }
    
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )
    
    if (!response.ok) {
      console.error('Failed to send GA4 event:', response.statusText)
    }
  } catch (error) {
    console.error('GA4 tracking error:', error)
  }
}

// Global gtag types are already declared in the component file

// Helper to check if analytics is available
export function isAnalyticsAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Track conversion events (for future use)
export function trackConversion(event: 'consult_booked', source?: string) {
  trackEvent('newsletter_subscribed', { 
    source: (source as any) || 'inline',
    email_provided: true 
  })
  
  // Additional conversion tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION-ID/CONVERSION-LABEL', // Replace with actual conversion ID
      value: 1.0,
      currency: 'USD',
      event_category: 'lead_generation',
      event_label: event,
      custom_parameter_source: source
    })
  }
}
