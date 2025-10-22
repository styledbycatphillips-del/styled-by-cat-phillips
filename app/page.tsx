   import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProcessSection } from '@/components/process-section'
import { ServicesOverview } from '@/components/services-overview'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { CTASection } from '@/components/cta-section'
import { NewsletterSignup } from '@/components/newsletter-signup'

export const metadata: Metadata = {
  title: 'Executive Presence Coaching Little Rock | The Signature Architecture | Kirksey House',
  description:
    'Architect your presence with Kirksey House. Our proprietary Signature Architecture™ serves Little Rock and DFW executives and leadership teams.',
  keywords:
    'executive presence coaching, leadership image Little Rock, Signature Architecture, authority index audit, executive styling',
  openGraph: {
    title: 'The Signature Architecture™ – Kirksey House',
    description:
      'Executive presence engineered. Kirksey House guides C‑suite leaders through wardrobe, voice, and digital alignment.',
    images: ['/hero/hero-studio-wide.webp'],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      
      <main>
        {/* Hero Section with Signature Positioning */}
        <HeroSection />
        
        {/* Newsletter Signup - Inline Form */}
        <section className="py-16 bg-signature-cream/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-signature-black mb-4">
                Originals set the standard.
              </h2>
              <p className="text-lg text-signature-navy">
                Get the Signature Edit. Seven rules to look credible on camera.
              </p>
            </div>
            <NewsletterSignup variant="inline" source="inline" />
          </div>
        </section>
        
        {/* About - Your Signature Is Your Story */}
        <AboutSection />
        
        {/* Process - Script Your Signature Methodology */}
        <ProcessSection />
        
        {/* Services Overview */}
        <ServicesOverview ctaHref="/services#calendly" />
        
        {/* Client Success Stories */}
        <TestimonialsSection />
        
        {/* Contact Section with Form */}
        <ContactSection />
        
        {/* FAQ Schema for AI */}
        <section className="py-16 bg-gray-50">`r`n          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`r`n            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>`r`n            <div className="grid md:grid-cols-2 gap-8">`r`n              <div>`r`n                <h3 itemProp="name" className="text-xl font-semibold mb-4">`r`n                  What is The Signature Architecture methodology?`r`n                </h3>`r`n                <p itemProp="text" className="text-gray-700">`r`n                  The Signature Architecture™ is our proprietary 3‑step system for engineering executive presence: Discover your identity, Design your strategy, and Deploy your presence across wardrobe, voice, and digital platforms.`r`n                </p>`r`n              </div>`r`n              <div>`r`n                <h3 className="text-xl font-semibold mb-4">How much does it cost?</h3>`r`n                <p className="text-gray-700">`r`n                  Options range from a Signature Calibration Session (starting at $350) to full Architectural or Executive Presence Intensives.`r`n                </p>`r`n              </div>`r`n            </div>`r`n          </div>`r`n        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}






