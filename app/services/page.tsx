import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { ServicesOverview } from '@/components/services-overview'
import { CTASection } from '@/components/cta-section'
import CalendlyEmbed from '@/components/calendly-embed'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? siteConfig.links.calendly

export const metadata: Metadata = {
  title: 'Services | Styled by Cat Phillips',
  description:
    'Executive Presence Intensive, Signature Session, and digital alignment to script your signature across wardrobe, voice, and web.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-signature-cream/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-serif text-sm uppercase tracking-[0.5em] text-signature-champagne">Services</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold text-signature-black sm:text-6xl">
            Curated support for leaders ready to own the room.
          </h1>
          <p className="mt-6 text-lg text-signature-navy">
            Choose the engagement that meets your moment. Every offer aligns wardrobe, voice, and digital presence so
            people meet the same you everywhere.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/assessment"
              className="rounded-lg border border-signature-navy px-6 py-3 font-medium text-signature-navy transition hover:bg-signature-navy hover:text-signature-cream"
            >
              Start the assessment
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3 text-lg"
            >
              Book a session
            </Link>
          </div>
        </div>
      </section>

      <ServicesOverview ctaHref="#calendly" />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-signature-champagne/40 bg-white p-8 shadow-lg">
            <h2 className="font-serif text-2xl text-signature-black">Executive Presence Intensive</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-signature-champagne">
              4–6 weeks · $8,000 (Launch $5,000)
            </p>
            <p className="mt-4 text-sm text-signature-navy leading-relaxed">
              For founders and executives preparing for a major visibility moment—board seat, funding round, keynote, or
              media tour.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-signature-navy">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                <span>Wardrobe audit, capsule build, and live styling support.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                <span>Voice and messaging refinement for LinkedIn, bio, and stage.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                <span>Digital alignment across site, social platforms, and photography.</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/assessment"
                className="rounded-lg border border-signature-navy px-5 py-2 font-medium text-signature-navy transition hover:bg-signature-navy hover:text-signature-cream"
              >
                Start with assessment
              </Link>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-5 py-2"
              >
                Apply for Intensive
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-signature-gray/30 bg-signature-cream/40 p-8 shadow-lg">
            <h2 className="font-serif text-2xl text-signature-black">Signature Session</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-signature-champagne">90 minutes · $333</p>
            <p className="mt-4 text-sm text-signature-navy leading-relaxed">
              A concentrated session to diagnose your presence gaps and script a clear roadmap across wardrobe, brand
              voice, and digital touchpoints.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-signature-navy">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                <span>Presence audit with immediate wins for wardrobe and grooming.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                <span>Personal palette, silhouette guidance, and shopping direction.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                <span>Voice and digital roadmap for bios, content pillars, and next steps.</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/assessment"
                className="rounded-lg border border-signature-navy px-5 py-2 font-medium text-signature-navy transition hover:bg-signature-navy hover:text-signature-cream"
              >
                Take the assessment
              </Link>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-5 py-2"
              >
                Book Signature Session
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="calendly" className="bg-signature-cream/40 py-20">
        <CalendlyEmbed url={CALENDLY_URL} title="Book with Cat" height={920} />
      </section>

      <CTASection />
    </main>
  )
}
