   'use client'

export function ServicesOverview() {
  return (
    <section className="py-24 bg-signature-cream" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-signature-champagne/20 text-signature-champagne text-sm font-medium font-serif mb-6">
            Signature Services
          </div>
          <h2 className="text-4xl font-serif font-bold text-signature-black mb-6">
            Transform Your Professional Presence
          </h2>
          <p className="text-xl text-signature-navy max-w-3xl mx-auto font-sans">
            Each service is built around the Script Your Signature™ methodology to ensure authentic, lasting transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-signature-gray/30 p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-signature-black mb-2">The Signature Session</h3>
              <p className="text-signature-champagne font-medium font-serif mb-4">Discovery Consultation</p>
              <div className="text-3xl font-serif font-bold text-signature-navy">Starting at $350</div>
            </div>
            <p className="text-signature-navy mb-6 text-center font-sans">
              Uncover your signature style through an intensive discovery session perfect for defining your visual identity.
            </p>
            <div className="text-center">
              <p className="text-sm text-signature-gray mb-6 font-sans">
                <strong>Perfect For:</strong> First-time clients, style direction seekers
              </p>
              <button className="block w-full text-center py-3 px-6 rounded-lg font-serif font-semibold transition-colors bg-signature-navy text-signature-cream hover:bg-signature-black">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-signature-champagne p-8 hover:shadow-xl transition-all duration-300 transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-signature-champagne text-signature-navy px-4 py-2 rounded-full text-sm font-serif font-semibold">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-signature-black mb-2">Personal Signature Development</h3>
              <p className="text-signature-champagne font-medium font-serif mb-4">Complete Transformation</p>
              <div className="text-3xl font-serif font-bold text-signature-navy">$1,800 - $3,500</div>
            </div>
            <p className="text-signature-navy mb-6 text-center font-sans">
              The complete signature styling experience including wardrobe audit, personal shopping, and signature look development.
            </p>
            <div className="text-center">
              <p className="text-sm text-signature-gray mb-6 font-sans">
                <strong>Perfect For:</strong> Complete transformations, new role preparation
              </p>
              <button className="block w-full text-center py-3 px-6 rounded-lg font-serif font-semibold transition-colors bg-signature-champagne text-signature-navy hover:bg-signature-champagne/80">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-signature-gray/30 p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-signature-black mb-2">Executive Signature Styling</h3>
              <p className="text-signature-champagne font-medium font-serif mb-4">Leadership Presence</p>
              <div className="text-3xl font-serif font-bold text-signature-navy">$2,500 - $6,000</div>
            </div>
            <p className="text-signature-navy mb-6 text-center font-sans">
              Professional styling for executives including media preparation and leadership presence development.
            </p>
            <div className="text-center">
              <p className="text-sm text-signature-gray mb-6 font-sans">
                <strong>Perfect For:</strong> C-suite executives, thought leaders
              </p>
              <button className="block w-full text-center py-3 px-6 rounded-lg font-serif font-semibold transition-colors bg-signature-navy text-signature-cream hover:bg-signature-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}