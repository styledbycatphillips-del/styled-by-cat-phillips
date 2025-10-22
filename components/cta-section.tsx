import Link from 'next/link'
import { siteConfig } from '@/config/site'

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? siteConfig.links.calendly

export function CTASection() {
  return (
    <section className="bg-signature-black py-20 text-signature-cream">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="font-serif text-sm uppercase tracking-[0.5em] text-signature-champagne">Next step</p>
        <h2 className="mt-4 font-serif text-4xl font-semibold">
          Ready to begin your Signature transformation?
        </h2>
        <p className="mt-4 text-lg text-signature-gray">
          Start with the Signature Assessment or go straight to a Signature Session with Cat.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/assessment"
            className="rounded-lg border border-signature-cream px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-signature-cream transition hover:bg-signature-cream/10"
          >
            Start the assessment
          </Link>
          <Link
            href={calendlyUrl}
            className="btn-primary bg-signature-champagne text-signature-black hover:bg-signature-cream"
          >
            Book a Signature Session
          </Link>
        </div>
      </div>
    </section>
  )
}

