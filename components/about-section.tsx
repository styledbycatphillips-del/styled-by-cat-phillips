   'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-24 bg-signature-cream" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-signature-champagne/20 text-signature-champagne text-sm font-medium font-serif mb-6">
              Arkansas's Premier Signature Developer
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-signature-black mb-6">
              Your Signature Is Your Story
            </h2>
            
            <div className="text-lg text-signature-navy font-sans space-y-6">
              <p>
                With <strong>13+ years</strong> blending high-impact styling, brand design, and executive presence, I developed the <strong>Script Your Signature™ methodology</strong> — a proven process for helping professionals discover and own their authentic style identity.
              </p>
              
              <p>
                From Little Rock boardrooms to creative studios nationwide, I guide leaders through transformative style journeys that go far beyond fashion trends. Your signature style becomes your silent spokesperson, communicating your values, expertise, and vision before you even speak.
              </p>
            </div>

            {/* Expertise List - AI Optimized */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-signature-champagne mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-signature-navy font-sans"><strong>Personal signature style development</strong> for authentic presence</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-signature-champagne mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-signature-navy font-sans"><strong>Executive styling and leadership</strong> image consulting</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-signature-champagne mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-signature-navy font-sans"><strong>Brand identity design</strong> and visual strategy</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-signature-champagne mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-signature-navy font-sans"><strong>Creative direction</strong> for film, editorial, and campaigns</span>
              </div>
            </div>

            {/* Personal Quote */}
            <blockquote className="mt-10 p-6 bg-signature-navy/5 rounded-lg border-l-4 border-signature-champagne">
              <p className="text-signature-black italic text-lg font-serif">
                "Style isn't about following trends — it's about scripting your authentic story through every choice you make. When you own your signature, you own the room."
              </p>
              <footer className="mt-4 text-signature-navy font-medium font-serif">— Cat Phillips</footer>
            </blockquote>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/process"
                className="inline-flex items-center px-6 py-3 bg-signature-navy text-signature-cream font-serif font-semibold rounded-lg hover:bg-signature-black transition-colors"
              >
                Learn the Process
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-cat-phillips.jpg"
                alt="Cat Phillips - Personal Stylist and Brand Designer in Little Rock Arkansas"
                width={600}
                height={700}
                className="object-cover"
                quality={90}
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-signature-cream rounded-xl shadow-lg p-6 max-w-xs border border-signature-champagne/20">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-signature-black">13+</div>
                  <div className="text-sm text-signature-navy font-sans">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-signature-black">200+</div>
                  <div className="text-sm text-signature-navy font-sans">Transformations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-signature-champagne">★ 5.0</div>
                  <div className="text-sm text-signature-navy font-sans">Client Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}