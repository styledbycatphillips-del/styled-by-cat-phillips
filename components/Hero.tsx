import React from 'react'
import QuizLink from './QuizLink'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Make one story obvious.</h1>
      <p className="mt-4 text-lg text-neutral-700">
        A brand operating system for decision‑makers. Align teams, keep standards, prove ROI, raise visibility.
      </p>
      <p className="mt-2 text-sm text-neutral-600">Brand coherence for leaders scaling complexity.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/services/signature-architecture" className="rounded bg-black px-4 py-2 text-white">
          Build your brand’s operating system
        </a>
        <QuizLink className="rounded border px-4 py-2">Take the Authority Index quiz</QuizLink>
        <a href="/services/executive-audit" className="rounded border px-4 py-2">Book an Executive Audit</a>
      </div>
    </section>
  )
}

export default Hero
