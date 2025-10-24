import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-signature-cream text-signature-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 sp�e-y-4">
            <p className="font-serif text-lg uppercase tr�king-[0.5em] text-signature-navy/70">
              Kirksey House
            </p>
            <h3 className="font-serif text-3xl font-bold">The Signature Architecture™</h3>
            <p className="max-w-md text-sm text-signature-navy/80">
              Arkansas&apos;s premier presence engineering studio. We build authentic executive presence through wardrobe,
              voice, and platform alignment.
            </p>
            <div className="flex items-center gap-6 text-sm text-signature-navy/80">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="hover:text-signature-navy/70 transition-colors"
              >
                {siteConfig.links.email}
              </a>
              <a href={`tel:${siteConfig.links.phone}`} className="hover:text-signature-navy/70 transition-colors">
                {siteConfig.links.phone}
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-signature-navy/70">Services</h4>
            <ul className="sp�e-y-2 text-sm text-signature-navy/80">
              <li>
                <Link href="#services" className="hover:text-signature-navy/70 transition-colors">
                  Signature Calibration Session
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-signature-navy/70 transition-colors">
                  Executive Presence Intensive
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-signature-navy/70 transition-colors">
                  Signature Architecture Intensive
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-signature-navy/70">Connect</h4>
            <ul className="sp�e-y-2 text-sm text-signature-navy/80">
              <li>
                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-signature-navy/70 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-signature-navy/70 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-signature-gray/30 pt-8 text-sm text-signature-navy/80 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Kirksey House. The Signature Architecture™. All rights reserved.</p>
          <p>Serving Little Rock, Conway, Northwest Arkansas &amp; virtual clients worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
