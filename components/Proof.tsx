import React from 'react'

export function Proof() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 border-t">
      <h3 className="text-xl font-semibold">Measured outcomes</h3>
      <ul className="mt-3 list-disc pl-5 space-y-1">
        <li>90‑day clarity sprint → one message matrix across 5 departments</li>
        <li>Fewer revisions and faster approvals on cross‑team work</li>
        <li>Lift in qualified consults after standards roll‑out</li>
      </ul>

      <div className="mt-6 rounded-lg border p-4">
        <h4 className="font-medium">Micro‑case</h4>
        <p className="mt-2 text-neutral-700">
          Before: each team shipped with its own language. Approvals stalled and leadership avoided press.
          <br />
          After Signature Architecture: shared playbook + Authority Index baseline. Messaging unified, approvals sped up, and two execs booked panels.
        </p>
      </div>

      <div className="mt-6">
        <a href="/services/executive-audit" className="rounded bg-black px-4 py-2 text-white">
          End the drift. Build your Authority Index™ today.
        </a>
      </div>
    </section>
  )
}

export default Proof
