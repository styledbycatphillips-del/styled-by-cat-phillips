import Link from 'next/link'

export function CTASection() {
  return (
    <section className="bg-signature-black py-20 text-signature-cream">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="font-serif text-sm uppercase tracking-[0.5em] text-signature-champagne">Next step</p>
        <h2 className="mt-4 font-serif text-4xl font-semibold">
          When your signature is intentional, the room believes you before you start speaking.
        </h2>
        <p className="mt-4 text-lg text-signature-gray">
          Reserve a consultation to map the first 30 days of your transformation with Script Your Signature™.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="#book" className="btn-primary bg-signature-champagne text-signature-black hover:bg-signature-cream">
            Start the assessment
          </Link>
          <Link
            href="#testimonials"
            className="rounded-lg border border-signature-cream px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-signature-cream transition hover:bg-signature-cream/10"
          >
            See client wins
          </Link>
        </div>
      </div>
    </section>
  )
}
