import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero/hero/hero-01.jpg"
          alt="Cat Phillips styling wardrobe pieces in the studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-signature-cream/65 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center">
        <p className="mb-5 font-serif text-sm uppercase tracking-[0.5em] text-signature-champagne">
          Styled by Cat Phillips
        </p>
        <h1 className="mb-6 max-w-3xl font-serif text-4xl font-bold leading-tight text-signature-black sm:text-5xl">
          You&apos;ve already built the credibility.
          <br />
          Now make sure your presence matches your power.
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-signature-navy sm:text-xl">
          Executive Presence by Cat Phillips: wardrobe strategy, brand voice, and digital alignment for professionals
          ready to lead with coherence.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="#book" className="btn-primary px-8 py-4 text-lg">
            Book Your Consultation
          </Link>
          <Link
            href="#services"
            className="rounded-lg border-2 border-signature-navy px-8 py-4 font-medium text-signature-navy transition-colors hover:bg-signature-navy hover:text-signature-cream"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}
