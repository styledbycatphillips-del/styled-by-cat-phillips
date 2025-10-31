import { builder } from '@/lib/builder'
import BuilderPageClient from '@/components/BuilderPageClient'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/Hero'
import { System } from '@/components/System'
import { Measurement } from '@/components/Measurement'
import { Proof } from '@/components/Proof'
import { FooterCta } from '@/components/FooterCta'

export default async function HomePage() {
  // Temporarily disable Builder.io for homepage to use our new static version
  // TODO: Remove Builder content for '/' route or configure Builder to use new design
  
  // try {
  //   const content = await builder.get('page', { url: '/' }).toPromise()
  //   if (content) return <BuilderPageClient content={content} />
  // } catch (e) {
  //   console.warn('Builder fetch failed, falling back to static homepage', e)
  // }

  // Static fallback (production-ready sections)
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        <section className="mx-auto max-w-6xl px-4 py-8 text-neutral-700">
          <blockquote className="border-l-2 pl-4">
            You already have the vision. What’s missing is the framework that aligns every signal.
          </blockquote>
        </section>

        <System />
        <Measurement />
        <Proof />
        <FooterCta />
      </main>

      <Footer />
    </>
  )
}
