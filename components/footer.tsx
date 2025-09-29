import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Styled by Cat Phillips Logo"
                width={50}
                height={25}
                className="h-8 w-auto"
                quality={90}
              />
              <div>
                <div className="text-xl font-bold">Script Your Signature</div>
                <div className="text-gray-400">by Cat Phillips</div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Arkansas's premier personal stylist and signature development specialist. 
              Helping executives and creatives discover their authentic style identity 
              since 2011.
            </p>
            
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zm7.624 18.611c-.24.479-.715.849-1.312.849-.508 0-.946-.235-1.257-.617l-1.758-2.133c-.258-.313-.547-.479-.92-.479s-.662.166-.92.479l-1.758 2.133c-.311.382-.749.617-1.257.617-.597 0-1.072-.37-1.312-.849-.192-.383-.192-.849 0-1.232l2.798-3.407c.258-.313.547-.479.92-.479s.662.166.92.479l2.798 3.407c.192.383.192.849 0 1.232z"/>
                </svg>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Signature Session
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Personal Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Executive Styling
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Brand Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <div className="text-gray-400">
                <div className="font-medium text-white mb-1">Phone</div>
                <a 
                  href={`tel:${siteConfig.links.phone}`}
                  className="hover:text-yellow-500 transition-colors"
                >
                  {siteConfig.links.phone}
                </a>
              </div>
              <div className="text-gray-400">
                <div className="font-medium text-white mb-1">Email</div>
                <a 
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-yellow-500 transition-colors"
                >
                  {siteConfig.links.email}
                </a>
              </div>
              <div className="text-gray-400">
                <div className="font-medium text-white mb-1">Serving</div>
                <div>Little Rock, Conway, NWA & DFW Metro</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Styled by Cat Phillips. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Script Your Signature™ is a registered trademark
          </div>
        </div>
      </div>
    </footer>
  )
}