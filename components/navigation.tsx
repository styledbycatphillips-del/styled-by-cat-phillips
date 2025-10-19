'use client';'use client''use client'



export default function Navigation() {

  return (

    <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">export function Navigation() {import { useState } from 'react'

      <a href="/" className="text-xl">Styled by Cat Phillips</a>

      <div className="flex gap-4">  return (import Link from 'next/link'

        <a href="/assessment">Start the assessment</a>

        <a href="/services">See the process</a>    <header className="sticky top-0 bg-signature-cream/95 backdrop-blur-sm border-b border-signature-gray/30 z-20">import Image from 'next/image'

        <a href="YOUR-CALENDLY-LINK">Book a Signature Session</a>

      </div>      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">import { siteConfig } from '@/config/site'

    </nav>

  );        <div className="flex items-center">

}
          <img export function Navigation() {

            src="/scbp-logo-primary-light.png.png"   const [isMenuOpen, setIsMenuOpen] = useState(false)

            alt="Styled by Cat Phillips" 

            className="h-8 w-auto"  const navigation = [

          />    { name: 'About', href: '#about' },

        </div>    { name: 'Process', href: '#process' },

        <nav className="flex items-center space-x-6">    { name: 'Services', href: '#services' },

          <a href="#services" className="text-signature-navy hover:text-signature-black transition-colors">Services</a>    { name: 'Testimonials', href: '#testimonials' },

          <a href="#process" className="text-signature-navy hover:text-signature-black transition-colors">Process</a>    { name: 'Contact', href: '#contact' },

          <a href="#proof" className="text-signature-navy hover:text-signature-black transition-colors">Proof</a>  ]

          <a href="#book" className="btn-primary">Start the assessment</a>

        </nav>  return (

      </div>    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">

    </header>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  )        <div className="flex justify-between items-center py-4">

}          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Styled by Cat Phillips Logo"
              width={50}
              height={25}
              className="h-8 w-auto"
              quality={90}
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">
                Script Your Signature
              </div>
              <div className="text-sm text-gray-600">
                by Cat Phillips
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block mx-3 mt-4 bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}