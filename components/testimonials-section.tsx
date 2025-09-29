   'use client'

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-signature-navy" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-signature-champagne/20 text-signature-champagne text-sm font-medium font-serif mb-6">
            Client Success Stories
          </div>
          <h2 className="text-4xl font-serif font-bold text-signature-cream mb-6">
            Signature Transformations
          </h2>
          <p className="text-xl text-signature-gray max-w-3xl mx-auto font-sans">
            Every client leaves with more than a new look — they own their signature presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-signature-cream rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-signature-champagne/20">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-signature-champagne" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-signature-navy mb-6 leading-relaxed font-serif italic">
              "Cat didn't just style me — she helped me script my signature as a leader. The confidence I gained transformed how I show up in every meeting and presentation."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-signature-champagne/30 mr-4"></div>
              <div>
                <div className="font-serif font-semibold text-signature-black">Sarah M.</div>
                <div className="text-sm text-signature-navy font-sans">Fortune 500 VP</div>
                <div className="text-sm text-signature-gray font-sans">Little Rock</div>
              </div>
            </div>
          </div>

          <div className="bg-signature-cream rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-signature-champagne/20">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-signature-champagne" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-signature-navy mb-6 leading-relaxed font-serif italic">
              "The Script Your Signature methodology is brilliant. My business has grown 40% since our work together, and I attribute much of that to the confidence from owning my signature style."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <div className="font-semibold text-gray-900">Jennifer L.</div>
                <div className="text-sm text-gray-600">Agency Owner</div>
                <div className="text-sm text-gray-500">Northwest Arkansas</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 mb-6 leading-relaxed">
              "Working with Cat was transformative. She helped me develop a signature aesthetic that supports my artistic work while maintaining professional credibility."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <div className="font-semibold text-gray-900">Marcus R.</div>
                <div className="text-sm text-gray-600">Creative Director</div>
                <div className="text-sm text-gray-500">Little Rock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}