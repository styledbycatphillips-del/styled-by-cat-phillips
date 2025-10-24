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
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/accordion'
import { faqs } from '@/config/faqs'

export const metadata: Metadata = {
  title: 'Executive Presence Coaching Little Rock | The Signature Architecture™ Kirksey House',
  description:
    'Architect your presence with Kirksey House. Our proprietary Signature Architecture™¢ serves Little Rock and DFW executives and leadership teams.',
  keywords:
    'executive presence coaching, leadership image Little Rock, Signature Architecture™authority index audit, executive styling',
  openGraph: {
    title: 'The Signature Architecture™ - Kirksey House',
    description:
      'Executive presence engineered. Kirksey House guides C-suite leaders through wardrobe, voice, and platform alignment.',
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
        
        {/* Process - The Signature Architecture™ethodology */}
        <ProcessSection />
        
        {/* Services Overview */}
        <ServicesOverview ctaHref="/services#calendly" />
        
        {/* Client Success Stories */}
        <TestimonialsSection />
        
        {/* Contact Section with Form */}
        <ContactSection />
        
        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              {faqs.map(({ question, answer }, i) => (
                <AccordionItem value={`item-${i + 1}`} key={question}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}
