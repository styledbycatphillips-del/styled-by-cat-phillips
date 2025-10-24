type ServicesOverviewProps = {
  ctaHref?: string
}

type Service = {
  name: string
  label?: string
  price: string
  summary: string
  bullets: string[]
}

const services: Service[] = [
  {
    name: 'Signature Calibration Session',
    label: 'Discovery Consultation',
    price: 'Starting at $350',
    summary:
      'A focused consultation to calibrate your signature and set immediate priorities across wardrobe, messaging, and visibility.',
    bullets: [
      'Presence audit and priority roadmap',
      'Signature palette + wardrobe direction',
      'Key talking points and next steps',
    ],
  },
  {
    name: 'Signature Architecture Intensive',
    label: 'Complete Transformation',
    price: '$1,800–$3,500',
    summary:
      'A comprehensive engagement architecting identity, strategy, and presence for leaders preparing for growth or a major launch.',
    bullets: [
      'Wardrobe overhaul + lookbook',
      'Voice, messaging, and platform alignment',
      'Photography and content direction',
    ],
  },
  {
    name: 'Executive Presence Intensive',
    label: 'Leadership Presence',
    price: '$2,500–$6,000',
    summary:
      'High-touch executive support to engineer a timeless, credible presence across wardrobe, voice, and digital footprint.',
    bullets: [
      'On-call styling and event preparation',
      'Executive coaching and media readiness',
      'Authority Index™ audit and refinement',
    ],
  },
]

export function ServicesOverview({ ctaHref = '#book' }: ServicesOverviewProps) {
  return (
    <section id="services" className="bg-signature-cream/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-signature-black">Choose your signature pace</h2>
          <p className="mt-4 text-xl text-signature-navy max-w-3xl mx-auto font-sans">
            Each service is built around The Signature Architecture™ to ensure authentic, lasting transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex h-full flex-col rounded-2xl border border-signature-champagne/40 bg-white p-8 shadow-card"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-signature-black mb-2">{service.name}</h3>
                {service.label && (
                  <p className="text-signature-champagne font-medium font-serif mb-4">{service.label}</p>
                )}
                <div className="text-3xl font-serif font-bold text-signature-navy">{service.price}</div>
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
                  href={ctaHref}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-signature-navy transition hover:text-signature-black"
                >
                  Book a discovery call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

