   'use client'

import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 bg-signature-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-signature-cream mb-6">
          Ready to Script Your Signature?
        </h2>
        <p className="text-xl text-signature-gray mb-8 max-w-2xl mx-auto font-sans">
          Join executives and creatives across Arkansas who've discovered their authentic style identity through the Script Your Signature™ methodology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-signature-champagne text-signature-navy text-lg font-serif font-semibold rounded-lg hover:bg-signature-cream hover:text-signature-black transition-colors shadow-lg"
          >
            Book Your Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 border-2 border-signature-cream text-signature-cream text-lg font-serif font-semibold rounded-lg hover:bg-signature-cream hover:text-signature-navy transition-colors"
          >
            View Services
          </Link>
        </div>
        
        <div className="mt-8 text-signature-gray font-sans">
          <p>Call: <a href="tel:501.541.1139" className="hover:text-signature-cream transition-colors">501.541.1139</a></p>
        </div>
      </div>
    </section>
  )
}