/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kirksey House',
  description: 'Privacy policy for Kirksey House executive brand consulting services. GDPR, CPRA, and GA4 compliance information.',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Kirksey House',
    description: 'Privacy policy for Kirksey House executive brand consulting services.',
    type: 'website',
    url: 'https://www.kirkseyhouse.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-signature-cream py-16">
      <div className="container mx-auto max-w-4xl px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-semibold text-signature-navy mb-4">
            Privacy Policy — Kirksey House
          </h1>
          <p className="text-lg text-signature-navy/80">
            <strong>Effective date:</strong> October 31, 2025
          </p>
        </header>

  <div className="prose prose-lg max-w-none text-signature-navy">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">1) Who we are</h2>
            <p>
              Kirksey House LLC ("Kirksey House," "we," "us") provides executive brand systems and consulting. 
              Website: <a href="https://kirkseyhouse.com" className="text-signature-champagne hover:underline">kirkseyhouse.com</a>. 
              Contact: <a href="mailto:catherine@kirkseyhouse.com" className="text-signature-champagne hover:underline">catherine@kirkseyhouse.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">2) What we collect</h2>
            <p className="mb-4">
              <strong>Usage and analytics data</strong> from our site, including pages viewed, events, referring URLs, 
              campaign parameters, approximate location at city or region level, device and browser details. 
              Collected via Google Analytics 4 (GA4). GA4 uses first-party cookies such as _ga to distinguish users and sessions. 
              <a href="https://support.google.com/analytics/answer/11593727" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google Help)
              </a>
            </p>
            <p className="mb-4">
              <strong>Consent signals</strong> from our consent banner. We record whether you granted or denied categories 
              required by Google Consent Mode v2: analytics_storage, ad_storage, ad_user_data, ad_personalization. 
              <a href="https://developers.google.com/tag-platform/security/guides/consent" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google for Developers)
              </a>
            </p>
            <p>
              <strong>Information you provide</strong> if you contact us, book an audit, or request materials. 
              Typical fields: name, email, company, role, message.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">3) How we use your information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate and improve our website and services.</li>
              <li>
                To measure site performance and content effectiveness with GA4. GA4 does not store the client ID 
                when analytics storage is disabled under Consent Mode. 
                <a href="https://support.google.com/analytics/answer/9976101" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                  (Google Help)
                </a>
              </li>
              <li>To respond to inquiries and manage engagements.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">4) Legal bases (EEA/UK visitors)</h2>
            <p>
              We process data under the GDPR on these bases: consent for analytics and cookies, performance of a contract 
              when you engage us, and legitimate interests for basic site operation and fraud prevention. See GDPR Article 6 
              and regulator guidance. 
              <a href="https://gdpr-info.eu/art-6-gdpr/" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (GDPR Article 6)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">5) Cookies and consent</h2>
            <p>
              We use a consent banner to capture and honor your choices. Consent Mode v2 adapts tag behavior based on 
              your selection for the four consent keys listed above. 
              <a href="https://developers.google.com/tag-platform/security/guides/consent" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google for Developers)
              </a>
            </p>
            <p className="mt-2 text-signature-navy/80">
              Our consent banner is provided by Clickio CMP (Site ID 245978), which presents region-sensitive prompts
              and stores your preferences. You can adjust consent at any time via the Manage Cookies control.
            </p>
            <p className="mt-2">
              See the <a href="/cookie-policy" className="text-signature-champagne hover:underline">Cookie Policy</a> for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">6) Sharing</h2>
            <p>
              We use trusted providers to run our site and analytics: Google Analytics and our consent platform. 
              These providers act as processors or independent controllers for defined purposes. GA4 uses first-party 
              cookies set by gtag.js. 
              <a href="https://support.google.com/analytics/answer/11593727" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google Help)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">7) Retention</h2>
            <p>
              GA4 event data is retained for 2 or 14 months in standard properties, depending on our admin setting. 
              Google-signals data can have distinct retention limits. We retain correspondence for as long as needed 
              to serve you or as required by law. 
              <a href="https://support.google.com/analytics/answer/7667196" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google Help)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">8) International transfers</h2>
            <p>
              Service providers may process data globally. Safeguards include provider standard contractual clauses 
              and platform controls.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">9) Your rights</h2>
            <p className="mb-4">
              <strong>EEA/UK:</strong> access, rectification, erasure, restriction, objection, portability, 
              and withdrawal of consent.
            </p>
            <p>
              <strong>California (CPRA/CCPA):</strong> right to know, delete, correct, and limit use of sensitive data, 
              plus opt-out of "sale" or "sharing" for cross-context behavioral advertising. We do not sell or share 
              personal information as defined by CPRA. Submit requests via{' '}
              <a href="mailto:catherine@kirkseyhouse.com" className="text-signature-champagne hover:underline">
                catherine@kirkseyhouse.com
              </a>. 
              <a href="https://oag.ca.gov/privacy/ccpa" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (CA Attorney General)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">10) Children&apos;s privacy</h2>
            <p>
              Our site is for business audiences. We do not knowingly collect personal information from children under 13. 
              Learn about COPPA requirements from the U.S. FTC. 
              <a href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Federal Trade Commission)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">11) Security</h2>
            <p>
              We use HTTPS, modern hosting security, and reasonable organizational measures. No method is perfect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">12) Links</h2>
            <p>Third-party sites have their own policies.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">13) Changes</h2>
            <p>
              We will update this notice when practices change. The &quot;Effective date&quot; shows the latest version.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">14) Contact</h2>
            <p>
              Questions or requests:{' '}
              <a href="mailto:catherine@kirkseyhouse.com" className="text-signature-champagne hover:underline">
                catherine@kirkseyhouse.com
              </a>.
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-signature-champagne/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-signature-navy/60">
              Last updated: October 31, 2025
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/cookie-policy" className="text-signature-champagne hover:underline">
                Cookie Policy
              </a>
              <a href="/contact" className="text-signature-champagne hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}