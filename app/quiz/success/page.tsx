'use client'

import React, { useEffect } from 'react';

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Page({ searchParams }: Props) {
  const band = Array.isArray(searchParams?.band) ? searchParams?.band[0] : searchParams?.band ?? '—';
  const score = Array.isArray(searchParams?.score) ? searchParams?.score[0] : searchParams?.score ?? '';
  const id = Array.isArray(searchParams?.id) ? searchParams?.id[0] : searchParams?.id ?? '';

  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || '/services/executive-audit';

  // UTM preservation for contact links
  const query = new URLSearchParams(searchParams as any);
  const utm = ['utm_source','utm_medium','utm_campaign'].reduce((o,k)=> ({...o, [k]: query.get(k) || ''}), {} as Record<string,string>);
  const auditHref = `${calendly}${utm.utm_source ? `?utm_source=${utm.utm_source}&utm_medium=${utm.utm_medium}&utm_campaign=${utm.utm_campaign}` : ''}`;
  const contactHref = `/contact?source=quiz&quiz_id=${encodeURIComponent(id||'')}&score=${encodeURIComponent(score||'')}&band=${encodeURIComponent(band)}${utm.utm_source?`&utm_source=${utm.utm_source}`:''}${utm.utm_medium?`&utm_medium=${utm.utm_medium}`:''}${utm.utm_campaign?`&utm_campaign=${utm.utm_campaign}`:''}`;

  const handleCTAClick = (ctaType: 'book_audit' | 'contact' | 'retake_quiz') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta: ctaType,
        page: 'success',
        score: score,
        band: band
      });
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-neutral-900">
      <section className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">
          Authority Index™: {score}/100 — {band}
        </h1>
        <p className="mt-2 text-neutral-700">Here is what your score means and what to do next.</p>

        <div className="mt-6 space-y-4 text-neutral-800">
          {band === 'Emerging' && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">Your signals are scattered</h3>
              <p className="text-amber-800">
                Build a message matrix and set a monthly leadership post. Start with <strong>Alignment</strong> and <strong>Consistency</strong>.
              </p>
            </div>
          )}
          {band === 'Practicing' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">You have structure</h3>
              <p className="text-blue-800">
                Extend standards across teams and add a steady leadership cadence. Measure approval time and revisions.
              </p>
            </div>
          )}
          {band === 'Consistent' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Your system works</h3>
              <p className="text-green-800">
                Guard it with <strong>Governance</strong> checks. Run quarterly visibility pushes and track pipeline and panel invites.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-3">
            <a
              href={auditHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick('book_audit')}
              className="rounded bg-black px-6 py-3 text-white font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 min-h-[48px] inline-flex items-center"
            >
              Book an Executive Audit
            </a>

            <a
              href={contactHref}
              onClick={() => handleCTAClick('contact')}
              className="rounded border border-neutral-300 px-6 py-3 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 min-h-[48px] inline-flex items-center"
            >
              Contact / Quick intake
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 mb-3">Want to improve your score?</p>
            <a 
              href="/quiz" 
              onClick={() => handleCTAClick('retake_quiz')}
              className="text-sm text-neutral-600 underline hover:text-neutral-900"
            >
              Retake the quiz
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            We saved a record of your quiz. Request deletion anytime at <a href="/privacy" className="underline">privacy policy</a> or <a href="mailto:contact@kirkseyhouse.com" className="underline">contact@kirkseyhouse.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
