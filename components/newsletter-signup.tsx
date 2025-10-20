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

    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'newsletter_signup', {
        component_variant: variant,
        source,
        email_provided: Boolean(email),
      })
    }

    setSubmitted(true)
    form.reset()
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-signature-champagne/60 bg-white/70 p-6 text-center shadow-lg">
        <p className="font-serif text-xl text-signature-black">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-signature-navy">
          Watch for the Signature Edit in your inbox within the next few minutes.
        </p>
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
      <p className="mt-3 text-xs text-signature-gray">
        Get one email a month on signature styling, wardrobe strategy, and executive presence.
      </p>
    </form>
  )
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
