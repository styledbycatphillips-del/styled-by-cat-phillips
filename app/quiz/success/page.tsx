import React from 'react';

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Page({ searchParams }: Props) {
  const band = Array.isArray(searchParams?.band) ? searchParams?.band[0] : searchParams?.band ?? '—';
  const score = Array.isArray(searchParams?.score) ? searchParams?.score[0] : searchParams?.score ?? '';
  const id = Array.isArray(searchParams?.id) ? searchParams?.id[0] : searchParams?.id ?? '';

  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || '/services/executive-audit';

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-neutral-900">
      <section className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Thanks — here&apos;s your Authority Index result</h1>
        <p className="mt-3 text-neutral-700">
          Score: {score || 'n/a'} • Band: <strong className="text-black">{band}</strong>
        </p>

        <div className="mt-6 space-y-4">
          <p className="text-neutral-700">
            This band gives a quick signal of where your brand&apos;s visibility and alignment currently sit.
            For a fast, focused plan to move the needle, book an Executive Audit — we&apos;ll review your Authority Index and outline next steps.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Book an Executive Audit
            </a>

            <a
              href={`/contact?source=quiz&quiz_id=${encodeURIComponent(id || '')}&score=${encodeURIComponent(score || '')}&band=${encodeURIComponent(band)}`}
              className="inline-block rounded border px-4 py-2 text-sm"
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
