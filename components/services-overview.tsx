const services = [
  {
    name: 'Executive Presence Intensive',
    price: '$6,000',
    summary: 'A 90-day engagement aligning wardrobe, messaging, and digital experience before a major launch.',
    bullets: [
      'Personalized wardrobe direction + on-call styling',
      'Story-driven messaging and talking points',
      'Digital audit with photography and profile updates',
    ],
  },
  {
    name: 'Signature Session',
    price: '$1,800',
    summary: 'Four-part transformation for entrepreneurs and founders ready to own the room with confidence.',
    bullets: [
      'Wardrobe audit and signature palette',
      'Curated shopping plan with links and fits',
      'Presence coaching for pitches, media, and events',
    ],
  },
  {
    name: 'Digital Alignment',
    price: 'Custom',
    summary: 'Brand collateral, content, and asset direction tailored to keep your platforms consistent.',
    bullets: [
      'Executive headshot direction and shot list',
      'Website and social refresh plan',
      'Content calendar with talking points',
    ],
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="bg-signature-cream/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-signature-black">Choose your signature pace</h2>
          <p className="mt-4 text-lg text-signature-navy">
            Each offer meets a different stage of readiness—from first impression clarity to full executive support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex h-full flex-col rounded-2xl border border-signature-champagne/40 bg-white p-8 shadow-md"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-signature-black">{service.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-signature-champagne">{service.price}</p>
                <p className="text-sm text-signature-navy leading-relaxed">{service.summary}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-signature-navy">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4">
                <a
                  href="#book"
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-signature-navy transition hover:text-signature-black"
                >
                  Book a discovery call →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
