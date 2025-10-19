'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Initialize gtag if it doesn't exist
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }
      
      // Configure GA4
      ;(window.gtag as any)('js', new Date())
      ;(window.gtag as any)('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        // Enhanced ecommerce for conversion tracking
        send_page_view: true,
        // Custom parameters for newsletter tracking
        custom_map: {
          'custom_parameter_1': 'newsletter_component'
        }
      })
    }
  }, [measurementId])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}

// TypeScript declarations for global gtag
declare global {
  interface Window {
    dataLayer: any[]
  }
}