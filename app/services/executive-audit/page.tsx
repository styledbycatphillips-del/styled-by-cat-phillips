export const metadata = {
  title: 'Executive Audit — Authority Index™',
  description: 'A 2‑week diagnostic that scores your Authority Index and delivers a clarity blueprint.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Executive Audit — Authority Index™</h1>
      <p className="mt-3 text-neutral-700">
        A 2‑week diagnostic that scores your Authority Index™ and delivers a clarity blueprint.
      </p>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Authority Index baseline (0–100) with category scores</li>
            <li>90‑day clarity plan mapped to Alignment • Consistency • ROI • Visibility • Governance</li>
            <li>One message matrix and standards starter for your team</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Process</h2>
          <ol className="mt-2 list-decimal pl-5 space-y-1">
            <li>Intake (10 minutes) — goals, teams, channels</li>
            <li>Signals scan — site, socials, decks, search, press</li>
            <li>Scoring — Authority Index baseline + gaps</li>
            <li>Readout — 60‑minute session with next moves</li>
          </ol>
          <p className="mt-3 text-neutral-700">Pricing: $1,200. Credited toward Signature Architecture if you proceed.</p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact?source=audit'} className="rounded bg-black px-4 py-2 text-white">
          Start with the free quiz
        </a>
        <a href="/quiz" className="rounded border px-4 py-2">Take the quiz</a>
      </div>
    </main>
  );
}