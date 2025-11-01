export const metadata = {
  title: 'Executive Audit',
  description: 'A 2-week diagnostic that scores your Authority Index, maps gaps to the five pillars, and gives you a 90-day plan.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Executive Audit</h1>
      <p className="mt-3 text-neutral-700">
        A 2-week diagnostic that scores your system and gives you a 90-day plan.
      </p>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong>Baseline 0–100</strong> across <strong>Alignment, Consistency, ROI, Visibility, Governance</strong></li>
            <li><strong>90-day plan</strong> mapped to the five pillars</li>
            <li><strong>Message matrix starter</strong> and <strong>Signature Standard™</strong> recommendations</li>
            <li><strong>Readout</strong> with risks, owners, and first approvals to target</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Process</h2>
          <ul className="mt-2 space-y-2">
            <li><strong>Intake</strong><br/>A brief form and a 45-minute call to scope teams and channels.</li>
            <li><strong>Signals scan</strong><br/>Review of site, social, PR, events, and sales collateral.</li>
            <li><strong>Scoring</strong><br/>Calculate your baseline and band against the rubric.</li>
            <li><strong>Readout</strong><br/>A clear plan and a shared deck you can route for approval.</li>
          </ul>
          <p className="mt-4 text-neutral-700"><strong>Pricing:</strong> $1,200. Credited toward Signature Architecture™ if you proceed.</p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact?source=audit'} className="rounded bg-black px-4 py-2 text-white">
          Book an Executive Audit
        </a>
        <a href="/quiz" className="rounded border px-4 py-2">Start with the free quiz</a>
      </div>
    </main>
  );
}