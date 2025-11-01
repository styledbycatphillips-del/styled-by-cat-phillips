/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import { ManageCookiesButton } from '@/components/manage-cookies-button'

export const metadata: Metadata = {
  title: 'Cookie Policy | Kirksey House',
  description: 'Cookie policy for Kirksey House website. Information about GA4 cookies, consent management, and Consent Mode v2 compliance.',
  robots: 'index, follow',
  openGraph: {
    title: 'Cookie Policy | Kirksey House',
    description: 'Cookie policy for Kirksey House website with GA4 and consent management information.',
    type: 'website',
    url: 'https://www.kirkseyhouse.com/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-signature-cream py-16">
      <div className="container mx-auto max-w-4xl px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-semibold text-signature-navy mb-4">
            Cookie Policy — Kirksey House
          </h1>
          <p className="text-lg text-signature-navy/80">
            <strong>Effective date:</strong> October 31, 2025
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">1) What cookies are</h2>
            <p>
              Cookies are small files placed on your device to store settings and identifiers. EU law requires consent 
              before using cookies that are not strictly necessary. 
              <a href="https://edps.europa.eu/data-protection/our-work/subjects/internet-technology_en" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (European Data Protection Supervisor)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">2) How we use cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Strictly necessary cookies</strong> to deliver the site and remember basic settings.
              </li>
              <li>
                <strong>Analytics cookies</strong> to understand site usage with GA4. GA4 sets first-party cookies 
                such as _ga and _ga_* to distinguish users and sessions. 
                <a href="https://support.google.com/analytics/answer/11593727" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                  (Google Help)
                </a>
              </li>
              <li>
                <strong>Consent cookies</strong> set by our banner to remember your preferences under Consent Mode v2. 
                <a href="https://developers.google.com/tag-platform/security/guides/consent" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                  (Google for Developers)
                </a>
              </li>
            </ul>
            <p className="mt-4 text-signature-navy/80">
              We do not run personalized advertising on this site at this time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">3) Consent and how to change it</h2>
            <p>
              Use the <strong>Manage Cookies</strong> link in the site footer to update your choices at any time. 
              Under Consent Mode v2, tags adapt to your consent status for analytics and ads-related categories. 
              <a href="https://developers.google.com/tag-platform/security/guides/consent" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google for Developers)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">4) Cookie list (typical)</h2>
            <p className="mb-4">
              Exact names can vary by GA4 updates and your browser. GA4 documentation confirms the use of _ga 
              and related cookies for user and session identification. 
              <a href="https://support.google.com/analytics/answer/11593727" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google Help)
              </a>
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-signature-champagne/20">
                <thead>
                  <tr className="bg-signature-champagne/10">
                    <th className="border border-signature-champagne/20 px-4 py-3 text-left font-semibold text-signature-navy">Cookie</th>
                    <th className="border border-signature-champagne/20 px-4 py-3 text-left font-semibold text-signature-navy">Purpose</th>
                    <th className="border border-signature-champagne/20 px-4 py-3 text-left font-semibold text-signature-navy">Duration</th>
                    <th className="border border-signature-champagne/20 px-4 py-3 text-left font-semibold text-signature-navy">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-signature-champagne/20 px-4 py-3 font-mono text-sm">_ga</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">Stores a client ID to distinguish users</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">up to 2 years</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">Google Analytics</td>
                  </tr>
                  <tr className="bg-signature-champagne/5">
                    <td className="border border-signature-champagne/20 px-4 py-3 font-mono text-sm">_ga_*</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">Stores session state for the property</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">up to 2 years</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-signature-champagne/20 px-4 py-3 font-mono text-sm">consent_* or CMP-specific name</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">Stores your consent choices</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">variable</td>
                    <td className="border border-signature-champagne/20 px-4 py-3">Consent platform</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-signature-navy/70">
              Developers can adjust cookie behavior, including expiration, through Google's tag settings. 
              <a href="https://developers.google.com/tag-platform/gtagjs/reference" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google for Developers)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">5) Managing cookies in your browser</h2>
            <p>
              You can block, delete, or control cookies using your browser settings. If you block strictly necessary 
              cookies some features may not work.
            </p>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-signature-champagne/5 p-4 rounded-lg">
                <h3 className="font-semibold text-signature-navy mb-2">Chrome</h3>
                <p className="text-sm text-signature-navy/80">Settings → Privacy and Security → Cookies</p>
              </div>
              <div className="bg-signature-champagne/5 p-4 rounded-lg">
                <h3 className="font-semibold text-signature-navy mb-2">Firefox</h3>
                <p className="text-sm text-signature-navy/80">Settings → Privacy & Security → Cookies</p>
              </div>
              <div className="bg-signature-champagne/5 p-4 rounded-lg">
                <h3 className="font-semibold text-signature-navy mb-2">Safari</h3>
                <p className="text-sm text-signature-navy/80">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="bg-signature-champagne/5 p-4 rounded-lg">
                <h3 className="font-semibold text-signature-navy mb-2">Edge</h3>
                <p className="text-sm text-signature-navy/80">Settings → Cookies and Site Permissions</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">6) Data retention for analytics</h2>
            <p>
              GA4 event data retention is 2 or 14 months for standard properties, configurable in Admin. 
              <a href="https://support.google.com/analytics/answer/7667196" className="text-signature-champagne hover:underline ml-1" target="_blank" rel="noopener">
                (Google Help)
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">7) Changes</h2>
            <p>
              We will update this Cookie Policy when our cookie use changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-signature-navy mb-4">8) Contact</h2>
            <p>
              Questions about cookies:{' '}
              <a href="mailto:catherine@kirkseyhouse.com" className="text-signature-champagne hover:underline">
                catherine@kirkseyhouse.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-signature-champagne/10 rounded-lg">
          <h3 className="font-semibold text-signature-navy mb-2">Consent Management</h3>
          <p className="text-sm text-signature-navy/80 mb-4">
            Update your cookie preferences at any time using the consent management tools.
          </p>
          <ManageCookiesButton />
        </div>

        <footer className="mt-12 pt-8 border-t border-signature-champagne/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-signature-navy/60">
              Last updated: October 31, 2025
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-signature-champagne hover:underline">
                Privacy Policy
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
