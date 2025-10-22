'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Process', href: '/#process' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
]

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? siteConfig.links.calendly

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-signature-cream/95 backdrop-blur border-b border-signature-gray/30 shadow-sm">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3">
          {/* Dark wordmark on light backgrounds; switch to light in dark theme */}
          <Image
            src="/brand/logos/logo-wordmark-dark.svg"
            alt="Styled by Cat Phillips"
            width={160}
            height={42}
            className="h-9 w-auto block dark:hidden"
            priority
          />
          <Image
            src="/brand/logos/sbcp-wordmark-light.svg"
            alt="Styled by Cat Phillips"
            width={160}
            height={42}
            className="h-9 w-auto hidden dark:block"
            priority
          />
          <span className="hidden text-[0.88rem] font-medium uppercase tracking-wide-2 text-signature-navy sm:inline">
            Script Your Signature
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-signature-navy transition-colors hover:text-signature-black"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={calendlyUrl}
            className="rounded-lg bg-signature-navy px-5 py-2 font-semibold text-signature-cream transition-colors hover:bg-signature-black"
          >
            Book a Session
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-signature-gray/40 text-signature-navy md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-signature-gray/30 bg-signature-cream/98 md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-2 text-base font-medium text-signature-navy transition hover:bg-signature-cream/80 hover:text-signature-black"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={calendlyUrl}
              className="mt-3 block rounded-lg bg-signature-navy px-4 py-3 text-center text-base font-semibold text-signature-cream hover:bg-signature-black"
              onClick={() => setOpen(false)}
            >
              Book a Session
            </Link>
          </div>
          <div className="border-t border-signature-gray/30 px-4 py-4 text-sm text-signature-navy/80">
            Serving {siteConfig.business.serviceArea.slice(0, 3).join(', ')} &amp; virtual clients worldwide.
          </div>
        </div>
      )}
    </header>
  )
}



