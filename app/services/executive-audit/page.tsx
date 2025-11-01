import JsonLd from '@/components/json-ld-enhanced'

export const metadata = {
  title: 'Executive Audit | Authority Index™ Assessment',
  description: 'A 2-week diagnostic that scores your Authority Index, maps gaps to the five pillars, and gives you a 90-day plan.',
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Audit",
  "description": "A 2-week diagnostic that scores your Authority Index™, maps gaps to the five pillars, and gives you a 90-day plan.",
  "provider": {
    "@type": "Organization",
    "name": "Kirksey House",
    "url": "https://kirkseyhouse.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "1200",
    "priceCurrency": "USD",
    "description": "$1,200. Credited toward Signature Architecture™ if you proceed."
  }
};

export default function Page() {

  return (
    <>
      <JsonLd data={structuredData} />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Executive Audit</h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            A 2-week diagnostic that scores your Authority Index™, maps gaps to the five pillars, and gives you a 90-day plan.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What you get</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Baseline Assessment</h3>
              <p className="text-neutral-700">
                <strong>Baseline 0–100</strong> scored across the five pillars: <strong>Alignment, Consistency, ROI, Visibility, Governance</strong>
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Strategic Plan</h3>
              <p className="text-neutral-700">
                <strong>90-day plan</strong> mapped to your specific gaps and priorities with clear next steps
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Implementation Tools</h3>
              <p className="text-neutral-700">
                <strong>Message matrix starter</strong> and <strong>Signature Standard™</strong> recommendations tailored to your organization
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Executive Readout</h3>
              <p className="text-neutral-700">
                <strong>Readout session</strong> with risks, owners, and first approvals to target for immediate impact
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4 pb-6 border-b border-neutral-200">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <div>
                <h3 className="font-semibold mb-2">Intake</h3>
                <p className="text-neutral-700">A brief form and a 45-minute call to scope teams and channels.</p>
              </div>
            </div>
            <div className="flex gap-4 pb-6 border-b border-neutral-200">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <div>
                <h3 className="font-semibold mb-2">Signals scan</h3>
                <p className="text-neutral-700">Review of website, social, PR, events, and sales collateral.</p>
              </div>
            </div>
            <div className="flex gap-4 pb-6 border-b border-neutral-200">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <div>
                <h3 className="font-semibold mb-2">Scoring</h3>
                <p className="text-neutral-700">Calculate your baseline and band with the rubric.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
              <div>
                <h3 className="font-semibold mb-2">Readout</h3>
                <p className="text-neutral-700">A clear plan and a shareable deck you can route for approval.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Investment</h2>
            <p className="text-3xl font-bold mb-2">$1,200</p>
            <p className="text-neutral-600">Credited toward Signature Architecture™ if you proceed</p>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact?source=audit'} 
            className="rounded bg-black px-6 py-3 text-white font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 min-h-[48px] inline-flex items-center"
          >
            Book an Executive Audit
          </a>
          <a 
            href="/quiz" 
            className="rounded border border-neutral-300 px-6 py-3 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 min-h-[48px] inline-flex items-center"
          >
            Start with the free quiz
          </a>
        </div>
      </main>
    </>
  );
}