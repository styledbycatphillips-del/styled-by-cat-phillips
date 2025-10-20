'use client'

import { FormEvent, useState } from 'react'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (typeof window !== 'undefined') {
      const gtag = window.gtag
      if (typeof gtag === 'function') {
        gtag('event', 'consult_submit', {
          method: 'primary_form',
          city: formData.get('city') ?? '',
        })
      }
    }

    setStatus('sent')
    form.reset()
  }

  return (
    <section id="contact" className="bg-signature-cream py-24">
      <div id="book" className="-mt-24 h-0" aria-hidden />
      <div className="mx-auto max-w-5xl rounded-3xl bg-white/70 px-4 py-16 shadow-2xl backdrop-blur-sm sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-signature-black">Ready to script your signature?</h2>
          <p className="mt-4 text-lg text-signature-navy">
            Share where you are and what you are building. We will schedule a consultation to map your presence goals.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="mt-10 rounded-2xl border border-signature-champagne/50 bg-signature-cream/60 p-8 text-center text-signature-navy">
            Thank you — your note is on the way. Expect a reply from Cat within one business day.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-3xl gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="text-left">
                <label htmlFor="contact-name" className="text-sm font-medium text-signature-navy">
                  Full name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-signature-gray/30 px-4 py-3 text-sm focus:border-signature-champagne focus:outline-none focus:ring-2 focus:ring-signature-champagne/50"
                />
              </div>
              <div className="text-left">
                <label htmlFor="contact-email" className="text-sm font-medium text-signature-navy">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-signature-gray/30 px-4 py-3 text-sm focus:border-signature-champagne focus:outline-none focus:ring-2 focus:ring-signature-champagne/50"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="text-left">
                <label htmlFor="contact-service" className="text-sm font-medium text-signature-navy">
                  What are you interested in?
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="mt-2 w-full rounded-lg border border-signature-gray/30 px-4 py-3 text-sm text-signature-black focus:border-signature-champagne focus:outline-none focus:ring-2 focus:ring-signature-champagne/50"
                >
                  <option value="executive-intensive">Executive Presence Intensive</option>
                  <option value="signature-session">Signature Session</option>
                  <option value="digital-alignment">Digital Alignment</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div className="text-left">
                <label htmlFor="contact-city" className="text-sm font-medium text-signature-navy">
                  City
                </label>
                <input
                  id="contact-city"
                  name="city"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-signature-gray/30 px-4 py-3 text-sm focus:border-signature-champagne focus:outline-none focus:ring-2 focus:ring-signature-champagne/50"
                />
              </div>
            </div>
            <div className="text-left">
              <label htmlFor="contact-notes" className="text-sm font-medium text-signature-navy">
                Tell me where you are in your journey
              </label>
              <textarea
                id="contact-notes"
                name="notes"
                rows={4}
                className="mt-2 w-full rounded-lg border border-signature-gray/30 px-4 py-3 text-sm focus:border-signature-champagne focus:outline-none focus:ring-2 focus:ring-signature-champagne/50"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-signature-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-signature-cream transition hover:bg-signature-black"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
