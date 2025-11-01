'use client'

import { useEffect, useState } from 'react'

interface AnalyticsEvent {
  action: string
  category?: string
  label?: string
  value?: number
  [key: string]: any
}

class AnalyticsManager {
  private static instance: AnalyticsManager
  private isInitialized = false

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager()
    }
    return AnalyticsManager.instance
  }

  private isGA4Available(): boolean {
    return typeof window !== 'undefined' && window.gtag !== undefined
  }

  track(eventName: string, parameters: Record<string, any> = {}) {
    if (!this.isGA4Available()) {
      console.warn('GA4 not available, event not tracked:', eventName, parameters)
      return
    }

    // Add timestamp for debugging
    const enhancedParams = {
      ...parameters,
      timestamp: new Date().toISOString(),
    }

    window.gtag('event', eventName, enhancedParams)
    
    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Analytics Event: ${eventName}`, enhancedParams)
    }
  }

  trackPageView(page: string, title?: string) {
    if (!this.isGA4Available()) return

    window.gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: window.location.href,
      page_path: page,
    })
  }

  trackConversion(conversionId: string, value?: number, currency = 'USD') {
    if (!this.isGA4Available()) return

    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    })
  }

  trackUserAction(action: string, category: string, label?: string, value?: number) {
    this.track('user_action', {
      event_category: category,
      event_label: label,
      value: value,
      action: action,
    })
  }

  // Authority Index™ specific tracking
  trackQuizStart(utmParams: Record<string, string> = {}) {
    this.track('quiz_start', {
      ...utmParams,
      quiz_type: 'authority_index',
    })
  }

  trackQuizSubmit(answers: {
    role: string
    channels_count: number
    has_matrix: boolean
    publishes: boolean
    complexity: string
  }) {
    this.track('quiz_submit', {
      ...answers,
      quiz_type: 'authority_index',
    })
  }

  trackQuizScored(score: number, band: string) {
    this.track('quiz_scored', {
      score,
      band,
      quiz_type: 'authority_index',
    })
  }

  trackCTAClick(cta: string, page: string, context?: Record<string, any>) {
    this.track('cta_click', {
      cta,
      page,
      ...context,
    })
  }

  trackFormError(formName: string, fieldName: string, errorType: string) {
    this.track('form_error', {
      form_name: formName,
      field_name: fieldName,
      error_type: errorType,
    })
  }

  trackEngagement(type: 'scroll' | 'time_on_page' | 'video_play' | 'file_download', value?: number) {
    this.track('engagement', {
      engagement_type: type,
      value: value,
    })
  }

  // Business metrics
  trackLeadGeneration(source: string, method: string, value?: Record<string, any>) {
    this.track('generate_lead', {
      source,
      method,
      ...value,
    })
  }

  trackAuditBooking(source: string, score?: number, band?: string) {
    this.track('audit_booked', {
      source,
      score,
      band,
      conversion_type: 'executive_audit',
    })
  }
}

// Export singleton instance
export const analytics = AnalyticsManager.getInstance()

// React hook for analytics
export function useAnalytics() {
  const trackWithUTM = (eventName: string, parameters: Record<string, any> = {}) => {
    // Get UTM params from URL if available
    let utmParams = {}
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
      }
    }

    analytics.track(eventName, {
      ...parameters,
      ...utmParams,
    })
  }

  return {
    track: analytics.track.bind(analytics),
    trackWithUTM,
    trackPageView: analytics.trackPageView.bind(analytics),
    trackUserAction: analytics.trackUserAction.bind(analytics),
    trackCTAClick: analytics.trackCTAClick.bind(analytics),
    trackFormError: analytics.trackFormError.bind(analytics),
    trackEngagement: analytics.trackEngagement.bind(analytics),
  }
}

// Hook for UTM parameters that works with SSR
export function useUTMParams() {
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      setUtmParams({
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
      })
    }
  }, [])

  return utmParams
}