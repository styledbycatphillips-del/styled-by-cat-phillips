import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-studio-wide.webp"
          alt="Kirksey House in studio"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/hero/hero-studio-wide-blur.jpg"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-signature-navy/30 via-signature-cream/50 to-signature-cream/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center">
        {/* Brand Mark */}
        <div className="mb-5">
          <Image
            src="/brand/logos/KH%20logo%20horse.svg"
            alt="Kirksey House logo"
            width={120}
            height={120}
            className="mx-auto h-20 w-20 block dark:hidden"
            priority
          />
          <Image
            src="/brand/logos/Kh.logo.horse.light.svg"
            alt="Kirksey House logo"
            width={120}
            height={120}
            className="mx-auto h-20 w-20 hidden dark:block"
            priority
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-signature-cream mb-6 leading-tight">
          The Signature Architecture™
        </h1>
        <p className="text-xl sm:text-2xl text-signature-gray mb-8 max-w-3xl mx-auto font-sans">
          Sophisticated presence engineering for leaders who refuse to be invisible.
        </p>
        <p className="text-lg text-signature-cream/90 mb-10 max-w-2xl mx-auto font-serif">
          While others follow trends, we help you architect a timeless presence that commands respect and opens doors.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Book Your Consultation
          </Link>
          <Link href="/services" className="btn-ghost">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}
