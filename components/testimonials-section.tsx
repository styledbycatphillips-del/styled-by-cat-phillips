const testimonials = [
  {
    quote:
      'Within two weeks of working with Cat, I walked into a board interview and knew the room saw the leader I am. The wardrobe plan and voice coaching changed everything.',
    name: 'Renee W.',
    title: 'Chief Growth Officer, Fintech',
  },
  {
    quote:
      'Our executive team rolled out a national campaign and Cat made sure every public touchpoint was consistent. It earned us a major feature in Forbes.',
    name: 'Jared M.',
    title: 'CEO, Creative Studio',
  },
  {
    quote:
      'The Signature Session gave me an immediate confidence shift. I no longer second-guess what to wear or how to show up on camera.',
    name: 'Taylor S.',
    title: 'Fractional CMO',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-signature-black">Client results</h2>
          <p className="mt-4 text-lg text-signature-navy">
            Leaders work with Cat when ready to accelerate credibility, close executive roles, and scale visibility.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-signature-gray/30 bg-signature-cream/30 p-8 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-signature-navy">
                <span className="block text-3xl text-signature-champagne">“</span>
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold text-signature-black">{testimonial.name}</div>
                <div className="text-signature-navy/70">{testimonial.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
