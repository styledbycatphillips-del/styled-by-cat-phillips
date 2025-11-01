'use client'

import Script from 'next/script'

interface GA4SetupProps {
  measurementId: string
}

export function GA4Setup({ measurementId }: GA4SetupProps) {
  if (!measurementId) return null

  return (
    <>
      {/* GA4 base tag - Google's recommended setup */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="beforeInteractive"
      />
      <Script id="ga4-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: true });
        `}
      </Script>

      {/* GA4 Event Helpers - Drop-in Functions */}
      <Script id="ga4-helpers" strategy="afterInteractive">
        {`
          // UTM parameter extraction
          function utmParams() {
            const u = new URL(location.href);
            return {
              utm_source:   u.searchParams.get('utm_source')   || undefined,
              utm_medium:   u.searchParams.get('utm_medium')   || undefined,
              utm_campaign: u.searchParams.get('utm_campaign') || undefined
            };
          }

          // 1) Quiz start event
          window.fireQuizStart = function() {
            gtag('event', 'quiz_start', { ...utmParams() });
          }

          // 2) Quiz submission event  
          window.fireQuizSubmit = function({ role, channels_count, has_matrix, publishes, complexity }) {
            gtag('event', 'quiz_submit', {
              role, channels_count, has_matrix, publishes, complexity, ...utmParams()
            });
          }

          // 3) Quiz scoring event
          window.fireQuizScored = function({ score, band }) {
            gtag('event', 'quiz_scored', { score, band, ...utmParams() });
          }

          // 4) Success page CTA clicks
          window.fireSuccessCTA = function(cta) {
            gtag('event', 'cta_click', { page: 'success', cta, ...utmParams() });
          }

          // 5) Audit booking conversion
          window.fireAuditBooked = function(source) {
            gtag('event', 'audit_booked', { source, ...utmParams() });
          }
        `}
      </Script>

      {/* UTM Carry-Forward for Links */}
      <Script id="utm-carry-forward" strategy="afterInteractive">
        {`
          // Add current UTM params to any link with .js-utm class
          (function attachUTMToLinks(){
            const utms = utmParams();
            const qs = new URLSearchParams(Object.fromEntries(
              Object.entries(utms).filter(([k,v]) => v !== undefined)
            ));
            
            document.addEventListener('click', function(e){
              const a = e.target.closest('a.js-utm');
              if (!a) return;
              
              const url = new URL(a.href, location.origin);
              // Do not overwrite existing non-empty UTMs
              ['utm_source','utm_medium','utm_campaign'].forEach(k => {
                if (!url.searchParams.get(k) && qs.get(k)) {
                  url.searchParams.set(k, qs.get(k));
                }
              });
              a.href = url.toString();
            }, {capture: true});
          })();
        `}
      </Script>

      {/* WCAG Focus Visible Styling */}
      <Script id="focus-visible" strategy="afterInteractive">
        {`
          // Enable focus ring for keyboard users
          document.documentElement.classList.add('focus-ring-enabled');
        `}
      </Script>
    </>
  )
}