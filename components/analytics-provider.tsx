'use client'

import { useEffect } from 'react'

export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: { [key: string]: any }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  return { trackEvent }
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track page views automatically
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [])

  return <>{children}</>
}