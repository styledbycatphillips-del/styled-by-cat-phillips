import Image from 'next/image'
import Link from 'next/link'
import { carote, things, cathelink, luxury, masterday, saintPauline, noar, grabag } from '@/app/fonts'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero/KH%20Hero.svg"
          alt="Kirksey House hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div style={{backdropFilter: 'blur(2px)', bottom: '0px', fontWeight: 400, left: '-3448px', position: 'absolute', right: '0px', top: '13870px'}} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center">
        {/* Brand Mark */}
        <div className="mb-5">
          {/* Use light (transparent) variant in both modes; invert in light mode for a black mark */}
          <Image
            src="/brand/logos/Kh.logo.horse.light.svg"
            alt="Kirksey House logo"
            width={120}
            height={120}
            className="mx-auto h-20 w-20 block filter invert dark:hidden"
            priority
            style={{
              display: 'none',
              aspectRatio: 'auto 120 / 120',
              color: 'rgba(0, 0, 0, 0)',
              fontWeight: 400,
              height: '80px',
              width: '80px',
              margin: '0 auto',
            }}
          />
          <Image
            src="/brand/logos/Kh.logo.horse.light.svg"
            alt="Kirksey House logo"
            width={120}
            height={120}
            className="mx-auto h-20 w-20 hidden dark:block"
            priority
          />
        </div>
        <div className={`${noar.className} mb-6 leading-tight text-center`} style={{color: 'rgb(253, 247, 237)', marginBottom: '24px', font: '600 72px/72px __noar_9202ff, __noar_Fallback_9202ff '}}>
          The Signature Architecture™
        </div>
        <div className={`${grabag.className} drop-shadow-sm max-w-3xl mx-auto text-center mb-8`} style={{color: 'rgba(229, 229, 229, 1)', filter: 'drop-shadow(rgba(0, 0, 0, 0.05) 0px 1px 1px)', maxWidth: '768px', margin: '0 auto 32px', font: '400 30px/36px __grabag_61322b, __grabag_Fallback_61322b '}}>
          Your visibility gap is costing you capital.
        </div>
        <p className={`${things.className} mb-10 drop-shadow-sm`} style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.05) 0px 1px 1px)', maxWidth: '672px', color: 'rgba(248, 248, 244, 1)', margin: '0 auto 40px', font: '400 26px/28px __things_af9482, __things_Fallback_af9482 '}}>
          In the new economy, trust moves visual. Every signal— tone, wardrobe, language, media—adds or subtracts credibility. We design
          alignment that turns presence into measurable authority.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" style={{display: 'flex', alignItems: 'center', backgroundColor: 'rgb(15, 23, 42)', borderRadius: 9999, boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', color: 'rgb(253, 247, 237)', justifyContent: 'center', letterSpacing: '1.12px', textTransform: 'uppercase', transitionDuration: '0.15s', transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', padding: '12px 20px', font: '500 14px/20px Cormorant SC, serif'}}>
           Start Your Authority Audit 
          </Link>
          <Link href="/services" style={{display: 'flex', alignItems: 'center', backdropFilter: 'blur(8px)', borderColor: 'rgb(191, 162, 122)', borderRadius: 9999, borderWidth: '0.834783px', color: 'rgb(15, 23, 42)', justifyContent: 'center', letterSpacing: '1.12px', textTransform: 'uppercase', transitionDuration: '0.15s', transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', backgroundColor: 'rgba(255, 255, 255, 1)', padding: '12px 20px', font: '500 14px/20px Cormorant SC, serif'}}>
            Book Your Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
