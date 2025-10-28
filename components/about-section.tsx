"use client"

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
            With over thirteen years blending high-impact styling, brand design, and executive presence, Kirksey House
            created The Signature Architecture™ — a framework that aligns how you look, sound, and show up.
          </p>
          <p className="text-lg leading-relaxed text-signature-navy">
            From Little Rock boardrooms to national creative teams, clients trust this process to build confidence,
            communicate authority, and expand opportunities.
          </p>

          <ul className="space-y-4 text-signature-navy">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-3 w-3 rounded-full bg-signature-champagne" />
              <span>
                <strong>Presence engineering</strong> rooted in authenticity and strategy.
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
                <strong>Platform alignment</strong> across wardrobe, voice, and digital footprint.
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
          <div style={{borderRadius: '16px', boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px', fontWeight: 400, overflowX: 'hidden', overflowY: 'hidden', position: 'relative'}}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F584b32b75dc24ccf9afea56f917c1039%2F87f8e66f9fcd4c17887a2eb341bdfdd5"
              alt="Kirksey House founder portrait"
              width={1200}
              height={1500}
              decoding="async"
              loading="lazy"
              style={{display: 'block', aspectRatio: 'auto 1200 / 1500', color: 'rgba(0, 0, 0, 0)', fontWeight: 400, objectFit: 'cover', width: '1232px', marginLeft: '-4px', paddingBottom: '200px'}}
            />
          </div>

          <div style={{backgroundColor: 'rgb(253, 247, 237)', borderColor: 'rgb(229, 231, 235)', borderRadius: '12px', borderWidth: '0.834783px', bottom: '-32px', boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px', fontWeight: 400, left: '-525px', maxWidth: '320px', position: 'absolute', top: '-1044px', padding: '24px'}}>
            <div style={{display: 'flex', alignItems: 'center', fontWeight: 400, justifyContent: 'space-between', marginBottom: '16px'}}>
              <div>
                <div style={{fontWeight: 400}}>
                  <div style={{color: 'rgb(191, 162, 122)', fontSize: '14px', fontWeight: 400, letterSpacing: '5.6px', lineHeight: '20px', textTransform: 'uppercase'}}>
                    Experience
                  </div>
                  <div style={{fontFamily: 'inherit', fontSize: '1.875rem', fontWeight: 600, color: 'rgb(11,11,11)'}}>13+</div>
                </div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div style={{textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.4em', color: 'rgb(191, 162, 122)'}}>Transformations</div>
                <div style={{fontFamily: 'inherit', fontSize: '1.875rem', fontWeight: 600, color: 'rgb(11,11,11)'}}>200+</div>
              </div>
            </div>
            <p style={{fontSize: '0.875rem', color: 'rgb(15, 23, 42)'}}>
              The Signature Architecture™ has helped leaders secure board seats, media coverage, and trusted visibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
