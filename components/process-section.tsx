   'use client'

export function ProcessSection() {
  return (
    <section className="py-24 bg-signature-navy" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-signature-champagne/20 text-signature-champagne text-sm font-medium font-serif mb-6">
          Proprietary Methodology
        </div>
        <h2 className="text-4xl font-serif font-bold text-signature-cream mb-6">
          The Script Your Signature™ Process
        </h2>
        <p className="text-xl text-signature-gray max-w-3xl mx-auto mb-12 font-sans">
          A proprietary three-step methodology for developing your authentic signature style that makes you unforgettable.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-signature-cream rounded-2xl shadow-lg p-8 border border-signature-champagne/20">
            <div className="w-16 h-16 bg-signature-champagne text-signature-navy rounded-xl flex items-center justify-center text-xl font-serif font-bold mx-auto mb-4">
              01
            </div>
            <h3 className="text-2xl font-serif font-bold text-signature-black mb-4">DISCOVER</h3>
            <p className="text-signature-champagne font-medium font-serif mb-4">Uncover Your Authentic Identity</p>
            <p className="text-signature-navy font-sans">
              Through intensive consultation and signature assessment, we identify your personal style DNA and professional goals.
            </p>
          </div>
          
          <div className="bg-signature-cream rounded-2xl shadow-lg p-8 border border-signature-champagne/20">
            <div className="w-16 h-16 bg-signature-champagne text-signature-navy rounded-xl flex items-center justify-center text-xl font-serif font-bold mx-auto mb-4">
              02
            </div>
            <h3 className="text-2xl font-serif font-bold text-signature-black mb-4">DESIGN</h3>
            <p className="text-signature-champagne font-medium font-serif mb-4">Craft Your Signature Strategy</p>
            <p className="text-signature-navy font-sans">
              We develop your unique visual language and create a comprehensive style strategy that represents who you are.
            </p>
          </div>
          
          <div className="bg-signature-cream rounded-2xl shadow-lg p-8 border border-signature-champagne/20">
            <div className="w-16 h-16 bg-signature-champagne text-signature-navy rounded-xl flex items-center justify-center text-xl font-serif font-bold mx-auto mb-4">
              03
            </div>
            <h3 className="text-2xl font-serif font-bold text-signature-black mb-4">DEFINE</h3>
            <p className="text-signature-champagne font-medium font-serif mb-4">Own Your Signature</p>
            <p className="text-signature-navy font-sans">
              You leave with the tools, confidence, and signature presence to make an unforgettable impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}