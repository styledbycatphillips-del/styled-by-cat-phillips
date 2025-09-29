   'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-signature-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-cat-phillips.jpg"
          alt="Cat Phillips - Personal Stylist and Signature Development Specialist"
          fill
          className="object-cover opacity-30"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-signature-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Geographic Authority Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-signature-cream/20 backdrop-blur-sm text-signature-cream text-sm font-medium font-serif mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Arkansas's Premier Signature Development Specialist
          </div>
          
          {/* Main Headline - Elegant Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-signature-cream mb-6 leading-tight">
            Script Your
            <span className="block font-script text-signature-champagne text-6xl sm:text-7xl lg:text-8xl mt-2">
              Signature
            </span>
          </h1>
          
          {/* Subheadline - Sophisticated messaging */}
          <p className="text-xl sm:text-2xl text-signature-gray mb-8 max-w-3xl mx-auto font-sans">
            Sophisticated styling and executive presence development for leaders who refuse to be invisible.
          </p>
          
          {/* Unique Differentiation - Refined copy */}
          <p className="text-lg text-signature-cream/90 mb-10 max-w-2xl mx-auto font-serif">
            While others follow trends, I help you develop timeless signature style that commands respect and opens doors.
          </p>
          
          {/* CTA Buttons - Elegant styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/process"
              className="inline-flex items-center px-8 py-4 bg-signature-champagne text-signature-navy text-lg font-serif font-semibold rounded-lg hover:bg-signature-cream hover:text-signature-black transition-all duration-300 shadow-xl"
            >
              Discover Your Signature
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-signature-cream text-signature-cream text-lg font-serif font-semibold rounded-lg hover:bg-signature-cream hover:text-signature-navy transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>
          
          {/* Trust Indicators - Refined styling */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-signature-gray text-sm font-serif">
            <div className="flex items-center">
              <span className="text-signature-champagne mr-2">★★★★★</span>
              47+ Five-Star Reviews
            </div>
            <div>13+ Years Experience</div>
            <div>Little Rock • Conway • NWA • DFW</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}