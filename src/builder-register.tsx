"use client"

import { builder, Builder } from '@builder.io/react'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProcessSection } from '@/components/process-section'
import { ServicesOverview } from '@/components/services-overview'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { CTASection } from '@/components/cta-section'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '')
if (typeof window !== 'undefined') {
  // Helpful during editor preview
  // eslint-disable-next-line no-console
  console.info('[builder] React SDK initialized, custom components registered')
}

Builder.registerComponent(HeroSection, {
  name: 'Hero Section',
  inputs: [
    { name: 'title', type: 'text', defaultValue: 'The Signature Architecture™' },
    { name: 'subtitle', type: 'longText' },
    {
      name: 'ctaPrimary',
      type: 'object',
      subFields: [{ name: 'label', type: 'text' }, { name: 'href', type: 'url' }],
    },
    {
      name: 'ctaSecondary',
      type: 'object',
      subFields: [{ name: 'label', type: 'text' }, { name: 'href', type: 'url' }],
    },
    { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg','png','webp'] },
    { name: 'align', type: 'text', enum: ['left','center','right'], defaultValue: 'center' },
  ],
})

Builder.registerComponent(AboutSection, {
  name: 'About Section',
  inputs: [
    { name: 'heading', type: 'text', defaultValue: 'About' },
    { name: 'body', type: 'richText' },
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg','png','webp'] },
  ],
})

Builder.registerComponent(ProcessSection, {
  name: 'Process Section',
})

Builder.registerComponent(ServicesOverview, {
  name: 'Services Overview',
  inputs: [
    { name: 'ctaHref', type: 'url', defaultValue: '#book' },
  ],
})

Builder.registerComponent(TestimonialsSection, {
  name: 'Testimonials Section',
})

Builder.registerComponent(ContactSection, {
  name: 'Contact Section',
})

Builder.registerComponent(NewsletterSignup, {
  name: 'Newsletter Signup',
  inputs: [
    { name: 'variant', type: 'text', enum: ['inline','stacked'], defaultValue: 'stacked' },
    { name: 'source', type: 'text', defaultValue: 'site' },
  ],
})

Builder.registerComponent(CTASection, {
  name: 'CTA Section',
})

export default function BuilderRegister(){ return null }
