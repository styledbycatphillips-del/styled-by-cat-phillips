'use client'

/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities */

import { NewsletterSignup } from '@/components/newsletter-signup'

export default function EditorialHomePage() {
  return (
    <div className="bg-gradient-to-br from-signature-cream via-white to-signature-cream/30 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-signature-cream/95 backdrop-blur-sm border-b border-signature-gray/30 z-20">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/brand/logos/logo-wordmark-dark.svg" 
              alt="Styled by Cat Phillips" 
              className="h-8 w-auto"
            />
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#services" className="text-signature-navy hover:text-signature-black transition-colors">Services</a>
            <a href="#process" className="text-signature-navy hover:text-signature-black transition-colors">Process</a>
            <a href="#proof" className="text-signature-navy hover:text-signature-black transition-colors">Proof</a>
            <a href="#book" className="btn-primary">Start the assessment</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/hero/styledbycatphillipsherostudio.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
            {/* Readability overlay */}
            <div className="absolute inset-0 bg-signature-cream/35"></div>
          </div>

          {/* Typography Overlay */}
          <div className="relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-4 text-center py-20">
              {/* Wordmark */}
              <h1 className="font-serif font-semibold tracking-[0.08em] text-lg md:text-2xl text-signature-black mb-3">
                STYLED BY CAT PHILLIPS
              </h1>

              {/* Signature Logo */}
              <div className="mb-6">
            <img 
              src="/brand/logos/sbcp-wordmark-light.svg" 
              alt="Cat Phillips signature" 
              className="mx-auto w-60 md:w-80 lg:w-96 h-auto filter drop-shadow-sm"
            />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-signature-black mb-4 max-w-4xl mx-auto leading-tight">
                You've already built the credibility.<br />
                Now make sure your presence matches your power.
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-signature-navy mb-6 max-w-3xl mx-auto leading-relaxed">
                Executive Presence by Cat Phillips: wardrobe strategy, brand voice, and digital alignment for professionals ready to lead with coherence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#book" className="btn-primary text-lg px-8 py-4">
                  Book Your Consultation
                </a>
                <a href="#services" className="border-2 border-signature-navy text-signature-navy hover:bg-signature-navy hover:text-signature-cream transition-colors px-8 py-4 rounded-lg font-medium">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 bg-white/50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm uppercase tracking-wider text-signature-champagne font-medium mb-4">
              Script your Signature
            </p>
            <p className="text-lg text-signature-navy">
              Wardrobe, identity, website, and social move together so people meet the same you everywhere.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-signature-black text-center mb-4">
              Services
            </h2>
            <p className="text-lg text-signature-navy text-center mb-12 max-w-2xl mx-auto">
              Three ways to work together, designed for different stages of readiness.
            </p>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Executive Presence Intensive */}
              <div className="bg-white border-2 border-signature-champagne rounded-xl p-8 shadow-lg relative">
                <div className="absolute -top-3 left-6 bg-signature-champagne text-signature-black px-4 py-1 rounded-full text-sm font-medium">
                  FLAGSHIP
                </div>
                <h3 className="text-2xl font-serif font-bold text-signature-coffee mb-4">
                  Executive Presence Intensive
                </h3>
                <p className="text-signature-navy mb-4">
                  Complete wardrobe and brand overhaul for executives ready to align their presence.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-signature-navy">
                  <li>â€¢ Wardrobe audit and rebuild strategy</li>
                  <li>â€¢ Voice and messaging refinement</li>
                  <li>â€¢ Platform alignment (LinkedIn, website)</li>
                  <li>â€¢ Photo direction</li>
                </ul>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-signature-black">$8,000</div>
                  <div className="text-sm text-signature-champagne">(Launch: $5,000)</div>
                </div>
                <a href="#book" className="btn-primary w-full text-center">Book Discovery Call</a>
              </div>

              {/* Signature Session */}
              <div className="bg-white border border-signature-gray/30 rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-signature-coffee mb-4">
                  Signature Session
                </h3>
                <p className="text-signature-navy mb-4">
                  90-minute presence audit and strategic roadmap.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-signature-navy">
                  <li>â€¢ Presence assessment</li>
                  <li>â€¢ Alignment gap identification</li>
                  <li>â€¢ Priority action items</li>
                </ul>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-signature-black">$333</div>
                </div>
                <a href="#book" className="border-2 border-signature-navy text-signature-navy hover:bg-signature-navy hover:text-signature-cream transition-colors w-full text-center py-3 rounded-lg font-medium">Schedule Session</a>
              </div>

              {/* Digital Products */}
              <div className="bg-white border border-signature-gray/30 rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-signature-coffee mb-4">
                  Digital Tools
                </h3>
                <p className="text-signature-navy mb-4">
                  Self-guided resources for professionals ready to refine.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-signature-navy">
                  <li>â€¢ Executive Presence Audit ($44)</li>
                  <li>â€¢ Brand Messaging Workbook ($55)</li>
                  <li>â€¢ Notion Brand Board ($55)</li>
                </ul>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-signature-black">$44-$55</div>
                </div>
                <a href="#book" className="border-2 border-signature-navy text-signature-navy hover:bg-signature-navy hover:text-signature-cream transition-colors w-full text-center py-3 rounded-lg font-medium">Browse Tools</a>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER SIGNUP */}
        <section className="py-20 bg-signature-cream/40">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-signature-black mb-4">
                Signature Notes
              </h2>
              <p className="text-lg text-signature-navy">
                One story. One tip. One link. Monthly.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-signature-cream">
              <NewsletterSignup variant="inline" source="editorial" />
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-signature-black text-center mb-12">
              Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-signature-gray/30 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-signature-cream/20 rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/styled-by-cat-phillips-bts-shoot.webp" 
                    alt="Discover process - Audit phase" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-signature-coffee text-signature-cream rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-serif font-bold text-signature-coffee mb-3">
                  Audit
                </h3>
                <p className="text-signature-navy">
                  What helps and what hurts. Closet, site, social, and message.
                </p>
              </div>
              <div className="bg-white border border-signature-gray/30 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-signature-cream/20 rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/styled-by-cat-phillips-bts-shoot2.webp" 
                    alt="Define process - Align phase" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-signature-coffee text-signature-cream rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-serif font-bold text-signature-coffee mb-3">
                  Align
                </h3>
                <p className="text-signature-navy">
                  Lookbook, voice notes, homepage edits, and content plan.
                </p>
              </div>
              <div className="bg-white border border-signature-gray/30 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-signature-cream/20 rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/Untitled (1).png" 
                    alt="Design process - Activate phase" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-signature-coffee text-signature-cream rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-serif font-bold text-signature-coffee mb-3">
                  Activate
                </h3>
                <p className="text-signature-navy">
                  Shoots, posts, and quarterly updates you can approve in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section id="proof" className="py-20 bg-white/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-signature-black text-center mb-12">
              Proof
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] bg-signature-cream/20 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/Untitled (2).png" 
                    alt="Cat Phillips working with clients" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <ul className="space-y-6 text-lg text-signature-navy">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-signature-champagne rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span>Faster replies from qualified leads.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-signature-champagne rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span>Fewer second meetings.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-signature-champagne rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span>Speaking invites tied to new photography.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK */}
        <section id="book" className="py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-signature-black mb-4">
              Ready to Close the Gap?
            </h2>
            <p className="text-lg text-signature-navy mb-8">
              Book your consultation. We'll make your next move clear.
            </p>
            <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const formData = new FormData(form)
              const data = Object.fromEntries(formData)
              
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'consult_submit', { 
                  method: 'editorial_form', 
                  city: data.city || '' 
                })
              }
              alert('Thanks - I will reply shortly.')
              form.reset()
            }}>
              <div>
                <label className="block text-sm font-medium text-signature-navy mb-2">
                  Full name
                </label>
                <input 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-signature-gray/30 rounded-lg focus:ring-2 focus:ring-signature-champagne focus:border-signature-champagne"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-signature-navy mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-signature-gray/30 rounded-lg focus:ring-2 focus:ring-signature-champagne focus:border-signature-champagne"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-signature-navy mb-2">
                  What are you looking for?
                </label>
                <select 
                  name="service" 
                  className="w-full px-4 py-3 border border-signature-gray/30 rounded-lg focus:ring-2 focus:ring-signature-champagne focus:border-signature-champagne"
                >
                  <option value="">Select an option</option>
                  <option value="executive-intensive">Executive Presence Intensive</option>
                  <option value="signature-session">Signature Session</option>
                  <option value="digital-tools">Digital Tools</option>
                  <option value="exploring">Just Exploring</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-signature-navy mb-2">
                  Tell me where you are right now
                </label>
                <textarea 
                  name="situation" 
                  rows={3}
                  placeholder="Describe your current situation and what you're looking to change..."
                  className="w-full px-4 py-3 border border-signature-gray/30 rounded-lg focus:ring-2 focus:ring-signature-champagne focus:border-signature-champagne"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-lg py-3">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-signature-black text-signature-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-serif italic text-signature-champagne mb-4">
              Cat Phillips
            </h3>
            <div className="w-16 h-0.5 bg-signature-champagne mx-auto"></div>
          </div>
          <div className="space-y-2 text-sm text-signature-gray">
            <p>Little Rock, AR Â· 501-541-1139 Â· cat@styledbycatphillips.com</p>
            <p>Instagram @styled.by.cat.phillips Â· LinkedIn /in/styledbycatphillips</p>
          </div>
        </div>
      </footer>
    </div>
  )
}




