'use client';

import React from 'react';

export interface HeroProps {
  title?: string;
  subtitle?: string;
}

export function Hero({ title = 'Welcome', subtitle = 'Default subtitle' }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-signature-navy to-signature-navy/90 py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h1 className="mb-6 text-5xl font-serif font-bold text-signature-cream leading-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto max-w-3xl text-xl font-sans text-signature-gray sm:text-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
