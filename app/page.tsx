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
  title: 'Personal Stylist Little Rock | Script Your Signature | Cat Phillips',
  description: 'Transform your professional presence with Script Your Signature methodology. Arkansas\'s premier personal stylist specializing in executive styling and signature development for Little Rock professionals.',
  keywords: 'personal stylist little rock, executive styling arkansas, signature style development, professional image consultant little rock, script your signature',
  openGraph: {
    title: 'Script Your Signature with Cat Phillips - Little Rock\'s Premier Personal Stylist',
    description: 'Arkansas\'s only signature development specialist using proprietary methodology to help executives and creatives develop authentic professional presence.',
    images: ['/hero-image.jpg'],
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
        <ServicesOverview />
        
        {/* Client Success Stories */}
        <TestimonialsSection />
        
        {/* Contact Section with Form */}
        <ContactSection />
        
        {/* FAQ Schema for AI */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* FAQ items with schema markup */}
              <div itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name" className="text-xl font-semibold mb-4">
                  What is Script Your Signature methodology?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text" className="text-gray-700">
                    Script Your Signature™ is my proprietary 3-step process for developing authentic signature style: Discover your identity, Design your strategy, and Define your presence. This systematic approach helps executives and creatives move beyond trends to develop signature style that supports their professional goals.
                  </p>
                </div>
              </div>
              
              <div itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name" className="text-xl font-semibold mb-4">
                  How much does personal styling cost in Little Rock?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text" className="text-gray-700">
                    Personal styling in Little Rock ranges from $350 for signature discovery sessions to $6,000 for executive styling packages. I offer transparent pricing with services including consultation, complete transformations, and executive presence development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}