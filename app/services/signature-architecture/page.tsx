import Link from 'next/link';

export const metadata = {
  title: 'Signature Architecture — Kirksey House',
  description: 'Install the brand operating system that aligns teams, locks standards, and proves ROI.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">Signature Architecture™</h1>
        <p className="mt-3 text-neutral-700">
          Install a brand operating system. One narrative, standards, and governance so every team ships the same story.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-neutral-50 p-4">
          <p className="text-sm font-medium">Signature Architecture — diagram</p>
          <img
            src="/images/signature-architecture-diagram.svg"
            alt="Signature Architecture diagram: Signals → System → Standards → Publish → Measure"
            className="mt-3 w-full"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-2 text-neutral-700">
            Five teams, five stories. Message drift slows decisions and erodes trust.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Solution</h2>
          <p className="mt-2 text-neutral-700">
            A brand operating system: one narrative, standards, and governance so every channel reinforces the same story.
          </p>

          <div className="mt-6 rounded-lg border p-4">
            <p className="text-sm font-medium">KPI starter set</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Message matrix adopted across functions</li>
              <li>Standards applied in site, social, and decks</li>
              <li>Approval cycle time down</li>
              <li>Qualified consults up</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded bg-black px-4 py-2 text-white">Start Calibration</Link>
            <Link href="/services/executive-audit" className="rounded border px-4 py-2">Book a consult</Link>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">How it works</h3>
          <ol className="mt-2 list-decimal pl-5 space-y-1">
            <li>Assessment — map signals and gaps across form, function, and frequency</li>
            <li>Blueprint — one narrative, standards, and routing rules</li>
            <li>Implementation — align assets and touchpoints to the system</li>
            <li>Calibration — measure, refine, and publish with confidence</li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Messaging guardrails</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Alignment — one plan across functions</li>
            <li>Consistency — one voice and visual system</li>
            <li>ROI — measurable outcomes, not activity</li>
            <li>Visibility — leadership and proof in market</li>
            <li>Governance — structured innovation with clear guardrails</li>
          </ul>
        </div>
      </section>
    </main>
  );
}