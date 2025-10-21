'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="about" className="bg-signature-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="inline-flex items-center rounded-full bg-signature-champagne/20 px-4 py-1 font-serif text-sm font-medium uppercase tracking-[0.4em] text-signature-champagne">
            Arkansas signature developer
          </span>

          <h2 className="font-serif text-4xl font-bold text-signature-black sm:text-5xl">
            Your signature should speak before you do.
          </h2>
          <p className="text-lg leading-relaxed text-signature-navy">
            With over thirteen years blending high-impact styling, brand design, and executive presence, Cat Phillips
            created Script Your Signature™—a method that aligns how you look, sound, and show up.
          </p>
          <p className="text-lg leading-relaxed text-signature-navy">
            From Little Rock boardrooms to national creative teams, clients trust this process to build confidence,
            communicate authority, and expand opportunities.
          </p>

          <ul className="space-y-4 text-signature-navy">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-3 w-3 rounded-full bg-signature-champagne" />
              <span>
                <strong>Personal signature style</strong> development rooted in authenticity and strategy.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-3 w-3 rounded-full bg-signature-champagne" />
              <span>
                <strong>Executive presence coaching</strong> to support promotions, media features, and keynote stages.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-3 w-3 rounded-full bg-signature-champagne" />
              <span>
                <strong>Brand alignment</strong> across wardrobe, voice, and digital footprint.
              </span>
            </li>
          </ul>

          <Link
            href="#process"
            className="inline-flex items-center gap-2 rounded-lg border border-signature-navy px-6 py-3 font-medium text-signature-navy transition-colors hover:bg-signature-navy hover:text-signature-cream"
          >
            See the methodology
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M5 12h14" strokeLinecap="round" />
              <path d="M13 6l6 6-6 6" strokeLinecap="round" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/about/about/about-cat-phillips.webp"
              alt="Cat Phillips working with a client at the studio"
              width={600}
              height={720}
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-8 -left-8 max-w-xs rounded-xl border border-signature-champagne/30 bg-signature-cream p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.4em] text-signature-champagne">Experience</div>
                <div className="font-serif text-3xl font-semibold text-signature-black">13+</div>
              </div>
              <div className="text-right">
                <div className="text-sm uppercase tracking-[0.4em] text-signature-champagne">Transformations</div>
                <div className="font-serif text-3xl font-semibold text-signature-black">200+</div>
              </div>
            </div>
            <p className="text-sm text-signature-navy">
              Script Your Signature™ has helped leaders secure board seats, media coverage, and trusted visibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
