import React from 'react'

export function System() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 border-t">
      <h2 className="text-2xl font-semibold">The system</h2>
      <p className="mt-3">
        <strong>Signature Architecture™</strong> aligns every team and channel to one narrative. From wardrobe to
        website to deck, your presence reads the same everywhere.
      </p>

      <div className="mt-6 rounded-lg border bg-neutral-50 p-4">
        <p className="text-sm font-medium">Signature Architecture — diagram</p>
        <p className="text-sm text-neutral-600">
          Signals → System → Standards → Publish → Measure • Pillars: Consistency • Alignment • Governance • Visibility • ROI
        </p>
        {/* Swap this image src with your final SVG path when ready */}
        <img src="/images/signature-architecture-diagram.svg" alt="Signature Architecture diagram" className="mt-3 w-full" />
      </div>
    </section>
  )
}

export default System
