import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-signature-black text-signature-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <p className="font-serif text-lg uppercase tracking-[0.5em] text-signature-champagne">
              Styled by Cat Phillips
            </p>
            <h3 className="font-serif text-3xl font-bold">Script Your Signature™</h3>
            <p className="max-w-md text-sm text-signature-gray">
              Arkansas&apos;s premier signature development studio. We build authentic presence for executives and
              creatives through wardrobe, voice, and digital alignment.
            </p>
            <div className="flex items-center gap-6 text-sm text-signature-gray">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="hover:text-signature-champagne transition-colors"
              >
                {siteConfig.links.email}
              </a>
              <a href={`tel:${siteConfig.links.phone}`} className="hover:text-signature-champagne transition-colors">
                {siteConfig.links.phone}
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-signature-champagne">Services</h4>
            <ul className="space-y-2 text-sm text-signature-gray">
              <li>
                <Link href="#services" className="hover:text-signature-champagne transition-colors">
                  Signature Session
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-signature-champagne transition-colors">
                  Executive Presence Intensive
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-signature-champagne transition-colors">
                  Digital Alignment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-signature-champagne">Connect</h4>
            <ul className="space-y-2 text-sm text-signature-gray">
              <li>
                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-signature-champagne transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-signature-champagne transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-signature-gray/30 pt-8 text-sm text-signature-gray flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Styled by Cat Phillips. All rights reserved.</p>
          <p>Serving Little Rock, Conway, Northwest Arkansas &amp; virtual clients worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
