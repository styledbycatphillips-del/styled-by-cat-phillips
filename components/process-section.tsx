import clsx from 'clsx'

const steps = [
  {
    title: 'Discover',
    description:
      'Define the signature you want to be known for with brand archetypes, wardrobe audit, and leadership goals.',
  },
  {
    title: 'Design',
    description:
      'Curate wardrobe, voice, and digital presence guidelines so every choice reinforces your positioning.',
  },
  {
    title: 'Deploy',
    description:
      'Implement your signature in the real world with on-call styling, lookbooks, and preparation for key meetings and media.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div style={{color: 'rgb(11, 11, 11)', font: '600 40px/40px __bodoni_6d24c4, __bodoni_Fallback_6d24c4, ui-serif, Georgia, serif '}}>
            The Signature Architecture™ Method
          </div>
          <div style={{color: 'rgb(15, 23, 42)', fontSize: '20px', fontWeight: '400', lineHeight: '28px', marginTop: '16px'}}>
            <p>
              A visible infrastructure for executive presence and calibrated
              leadership.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={clsx(
                'rounded-2xl border border-signature-champagne/50 bg-signature-cream/40 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg',
                index === 1 && 'bg-white'
              )}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-signature-champagne/30 font-serif text-lg text-signature-champagne">
                {index + 1}
              </div>
              <h3 className="font-serif text-2xl text-signature-black">{step.title}</h3>
              <p className="mt-3 text-sm text-signature-navy leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
