'use client'

import { FormEvent, useState } from 'react'

type NewsletterSignupProps = {
  variant?: 'inline' | 'stacked'
  source?: string
}

export function NewsletterSignup({ variant = 'stacked', source = 'site' }: NewsletterSignupProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email')?.toString()

    if (typeof window !== 'undefined') {
      const gtag = window.gtag
      if (typeof gtag === 'function') {
        gtag('event', 'newsletter_signup', {
          component_variant: variant,
          source,
          email_provided: Boolean(email),
        })
      }
    }

    setSubmitted(true)
    form.reset()
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-signature-champagne/60 bg-white/70 p-6 text-center shadow-lg">
        <p className="font-serif text-xl text-signature-black">You’re on the list.</p>
        <p className="mt-2 text-sm text-signature-navy">Thanks for subscribing to the Kirksey House Journal.</p>
      </div>
    )
  }

  const layoutClasses =
    variant === 'inline'
      ? 'flex flex-col gap-3 sm:flex-row sm:items-center'
      : 'space-y-4'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-signature-champagne/60 bg-white/80 p-6 shadow-lg backdrop-blur"
    >
      <div className="mb-4">
        <h3 className="font-serif text-xl text-signature-black">Elevate Your Presence</h3>
        <p className="mt-1 text-sm text-signature-navy/80">
          Join the Kirksey House Journal for monthly insights on presence engineering, wardrobe strategy and executive impact.
        </p>
      </div>
      <div className={layoutClasses}>
        <label htmlFor="newsletter-name" className="sr-only">
          Name
        </label>
        <input
          id="newsletter-name"
          name="name"
          type="text"
          placeholder="Your name"
          className="w-full rounded-lg border border-signature-gray/30 bg-white px-4 py-3 text-sm text-signature-black placeholder:text-signature-gray focus:border-signature-champagne focus:outline-none focus:ring-2 focus:ring-signature-champagne/60"
        />

        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full rounded-lg border border-signature-gray/30 bg-white px-4 py-3 text-sm text-signature-black placeholder:text-signature-gray focus:border-signature-champagne focus:outline-none focus:ring-2 focus:ring-signature-champagne/60"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-signature-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-signature-cream transition hover:bg-signature-black sm:w-auto"
        >
          Subscribe
        </button>
      </div>
      <p className="mt-3 text-xs text-signature-navy/70">
        You’ll receive one thoughtfully curated email a month with actionable guidance on mastering your signature presence.
      </p>
    </form>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

