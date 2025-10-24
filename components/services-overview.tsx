import { services } from '@/config/services'

type ServicesOverviewProps = {
  ctaHref?: string
}

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
            <article
              id={service.id}
              key={service.id}
              className="flex h-full flex-col rounded-2xl border border-signature-champagne/40 bg-white p-8 shadow-card"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-signature-black mb-2">{service.title}</h3>
                {service.kind && (
                  <p className="text-signature-champagne font-medium font-serif mb-4"><em>{service.kind}</em></p>
                )}
              </div>
              <ul className="mt-2 space-y-3 text-sm text-signature-navy">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signature-champagne" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4">
                <a
                  href={service.cta.href}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-signature-navy transition hover:text-signature-black"
                >
                  {service.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

