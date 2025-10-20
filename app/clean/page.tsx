import { NewsletterSignup } from '@/components/newsletter-signup'
import Image from 'next/image'

export default function CleanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-signature-cream via-white to-signature-cream/30">
      {/* Modern Header with gradient background */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-signature-black via-signature-navy to-signature-black"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-signature-champagne rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-signature-champagne/20 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-signature-cream/30 transform -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-signature-champagne/20 backdrop-blur-sm text-signature-champagne text-sm font-medium mb-6 border border-signature-champagne/30">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Arkansas&rsquo;s Premier Personal Stylist
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Cat Phillips
          </h1>
          <div className="w-24 h-1 bg-signature-champagne mx-auto mb-6"></div>
          <p className="text-xl text-signature-cream max-w-2xl mx-auto">
            Script Your Signature™ • Executive Styling • Little Rock, Arkansas
          </p>
        </div>
      </header>

      {/* Hero Message with Visual Impact */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-signature-cream/20 to-white"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-8 w-2 h-32 bg-signature-champagne opacity-60"></div>
        <div className="absolute bottom-20 right-8 w-2 h-24 bg-signature-navy opacity-40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-signature-navy text-signature-cream text-sm font-medium rounded-full tracking-wide uppercase">
              Signature Development
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-signature-black mb-8 leading-tight">
            Originals set the
            <span className="block text-signature-navy italic">standard.</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-signature-navy mb-8 leading-relaxed">
              Professional styling for executives who refuse to be invisible. 
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the insights that matter. Seven rules to look credible on camera.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - The Star with Visual Appeal */}
      <section className="relative py-20 bg-gradient-to-r from-signature-cream/40 via-signature-cream/60 to-signature-cream/40">
        <div className="absolute inset-0 bg-white/60"></div>
        
        {/* Decorative background elements */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-signature-champagne/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-signature-navy/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-signature-navy/10 rounded-full text-signature-navy text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              The Signature Edit
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-signature-black mb-4">
              Get the Rules That Matter
            </h3>
            <p className="text-lg text-signature-navy max-w-2xl mx-auto">
              Seven strategic rules to look credible on camera and command respect in any room.
            </p>
          </div>
          
          {/* Newsletter component with enhanced styling */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-signature-cream">
            <NewsletterSignup variant="inline" source="inline" />
          </div>
        </div>
      </section>

      {/* About Section with Visual Interest */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #222052 2px, transparent 2px), radial-gradient(circle at 75% 75%, #D2B68A 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block w-16 h-1 bg-signature-champagne mb-4"></span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-signature-black mb-6 leading-tight">
                  Script Your
                  <span className="block text-signature-navy italic">Signature™</span>
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl text-signature-navy font-medium">
                  I help executives develop authentic signature style that supports their professional goals.
                </p>
                <p>
                  No trends. No generic advice. Just strategic styling that makes you unforgettable 
                  for the right reasons.
                </p>
                <p>
                  Because in a world of copies, <strong className="text-signature-navy">originals set the standard.</strong>
                </p>
              </div>
              
              {/* Stats or highlights */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-signature-navy">15+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-signature-navy">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Executives Styled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-signature-navy">AR</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Based</div>
                </div>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-signature-cream via-signature-champagne/30 to-signature-navy/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-script text-signature-navy mb-4">S</div>
                  <div className="text-signature-black font-serif text-xl">Signature</div>
                  <div className="text-signature-navy text-sm uppercase tracking-wider">Development</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-signature-champagne rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-signature-navy/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="relative bg-gradient-to-r from-signature-black via-signature-navy to-signature-black text-signature-cream">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h4 className="text-3xl font-script text-signature-champagne mb-2">Cat Phillips</h4>
              <div className="w-16 h-1 bg-signature-champagne mx-auto mb-4"></div>
              <p className="text-signature-gray">Script Your Signature™</p>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
              <div>
                <h5 className="font-medium mb-2 text-signature-cream">Location</h5>
                <p className="text-signature-gray text-sm">Little Rock, Arkansas</p>
              </div>
              <div>
                <h5 className="font-medium mb-2 text-signature-cream">Services</h5>
                <p className="text-signature-gray text-sm">Executive Styling</p>
              </div>
              <div>
                <h5 className="font-medium mb-2 text-signature-cream">Specialization</h5>
                <p className="text-signature-gray text-sm">Signature Development</p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-signature-gray/20 pt-8">
              <p className="text-signature-gray text-sm">
                © 2025 Cat Phillips. All rights reserved. | Script Your Signature™
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
