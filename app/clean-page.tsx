import { NewsletterSignup } from '@/components/newsletter-signup'

export default function CleanHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-signature-cream/50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-signature-black">
            Cat Phillips
          </h1>
          <p className="text-signature-navy mt-2">Personal Stylist â€¢ Little Rock, Arkansas</p>
        </div>
      </header>

      {/* Hero Message */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-serif font-bold text-signature-black mb-6">
            Originals set the standard.
          </h2>
          <p className="text-xl text-signature-navy mb-12 max-w-2xl mx-auto">
            Professional styling for executives who refuse to be invisible. 
            Get the insights that matter.
          </p>
        </div>
      </section>

      {/* Newsletter Signup - The Star */}
      <section className="py-16 bg-signature-cream/30">
        <div className="max-w-2xl mx-auto px-4">
          <NewsletterSignup variant="inline" source="inline" />
        </div>
      </section>

      {/* Simple About */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-signature-black mb-6">
            Script Your Signature™„¢
          </h3>
          <div className="max-w-2xl mx-auto text-signature-navy space-y-4">
            <p>
              I help executives develop authentic signature style that supports their professional goals.
            </p>
            <p>
              No trends. No generic advice. Just strategic styling that makes you unforgettable 
              for the right reasons.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-signature-black text-signature-cream py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">Â© 2025 Cat Phillips. All rights reserved.</p>
          <p className="text-signature-gray">Little Rock, Arkansas</p>
        </div>
      </footer>
    </div>
  )
}


