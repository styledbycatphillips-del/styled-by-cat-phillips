import React from 'react';

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
  const contactHref = `/contact?source=quiz&quiz_id=${encodeURIComponent(id||'')}&score=${encodeURIComponent(score||'')}&band=${encodeURIComponent(band)}${utm.utm_source?`&utm_source=${utm.utm_source}`:''}${utm.utm_medium?`&utm_medium=${utm.utm_medium}`:''}${utm.utm_campaign?`&utm_campaign=${utm.utm_campaign}`:''}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-neutral-900">
      <section className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">
          Authority Index: {score}/100 — {band}
        </h1>
        <p className="mt-2 text-neutral-700">Here is what your score means and the next step to raise it.</p>

        <div className="mt-6 space-y-4 text-neutral-800">
          {band === 'Emerging' && (
            <p>
              Your signals are scattered. Create a 1‑page message matrix and ship one leadership post this month; re‑score in 30 days.
            </p>
          )}
          {band === 'Practicing' && (
            <p>
              You have structure, not everywhere. Extend standards to the next team and add a monthly leadership signal; track approvals and revision counts.
            </p>
          )}
          {band === 'Consistent' && (
            <p>
              Your system works; guard it. Add a quarterly governance review and a visibility push; track panel invites and qualified consults.
            </p>
          )}
        </div>

        <div className="mt-6 space-y-4">

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-black px-4 py-2 text-white"
            >
              Book an Executive Audit
            </a>

            <a
              href={contactHref}
              className="rounded border px-4 py-2"
            >
              Contact / Quick intake
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            We saved a record of your quiz. If you&apos;d like this result removed, reply here and we&apos;ll delete it.
          </p>
        </div>
      </section>
    </main>
  );
}
