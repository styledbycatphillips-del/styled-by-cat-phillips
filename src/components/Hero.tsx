"use client"

import React from 'react'

export type HeroProps = {
  title?: string
  subtitle?: string
}

export function Hero({ title = 'Hero Title', subtitle }: HeroProps) {
  return (
    <section className="w-full py-16 px-6 text-center bg-ivory text-ink">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-ink/80">{subtitle}</p>
        )}
      </div>
    </section>
  )
}

export default Hero

