import Link from 'next/link';

export const metadata = {
  title: 'Services — Kirksey House',
  description: 'Signature Architecture, Executive Audit, Retainers, and Cohorts.',
};

const cards = [
  {
    title: 'Signature Architecture™',
    body: 'Install the system that aligns teams, locks standards, and governs change.',
    href: '/services/signature-architecture',
  },
  {
    title: 'Executive Audit — Authority Index™',
    body: 'Score your Authority Index and leave with a 90‑day clarity plan.',
    href: '/services/executive-audit',
  },
  {
    title: 'Retainers',
    body: 'Quarterly calibration and governance to keep standards working.',
    href: '/contact?source=retainer',
  },
  {
    title: 'Cohorts',
    body: 'Practical group programs to practice alignment and presence at scale.',
    href: '/contact?source=cohort',
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
      <p className="mt-3 text-neutral-700">
        Structure as strategy. Choose the path that gets your team aligned and measurable.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {cards.map(c => (
          <Link key={c.title} href={c.href} className="rounded-lg border p-5 hover:bg-neutral-50 transition">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="mt-2 text-neutral-700">{c.body}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
