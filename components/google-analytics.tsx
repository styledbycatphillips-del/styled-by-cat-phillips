'use client';'use client'

import Script from 'next/script';

import { useEffect } from 'react'

export default function GoogleAnalytics() {import Script from 'next/script'

  const id = process.env.NEXT_PUBLIC_GA_ID;

  if (!id) return null;interface GoogleAnalyticsProps {

  return (  measurementId: string

    <>}

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />

      <Script id="ga-init" strategy="afterInteractive">export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {

        {`  useEffect(() => {

          window.dataLayer = window.dataLayer || [];    // Initialize gtag if it doesn't exist

          function gtag(){dataLayer.push(arguments);}    if (typeof window !== 'undefined') {

          gtag('js', new Date());      window.dataLayer = window.dataLayer || []

          gtag('config', '${id}');      window.gtag = function gtag() {

        `}        window.dataLayer.push(arguments)

      </Script>      }

    </>      

  );      // Configure GA4

}      ;(window.gtag as any)('js', new Date())
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