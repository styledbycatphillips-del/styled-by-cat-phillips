import { siteConfig } from '@/config/site'

type JsonLdProps = {
  data?: object | object[]
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}#organization`,
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.links.phone,
  email: siteConfig.links.email,
  logo: `${siteConfig.url}/brand/logos/kh%20logo%20dark%20monogram.svg`,
  image: siteConfig.ogImage,
  foundingDate: siteConfig.business.founded,
  founder: {
    '@type': 'Person',
    name: siteConfig.business.founder,
    jobTitle: 'Founder',
    sameAs: [siteConfig.links.instagram, siteConfig.links.linkedin],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.business.address.addressLocality,
    addressRegion: siteConfig.business.address.addressRegion,
    addressCountry: siteConfig.business.address.addressCountry,
  },
  areaServed: siteConfig.business.serviceArea,
  serviceType: siteConfig.business.services,
  priceRange: siteConfig.business.priceRange,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kirksey House Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Signature Calibration Session',
        itemOffered: {
          '@type': 'Service',
          name: 'Signature Calibration Session',
          description:
            'A focused consultation to calibrate your signature and set immediate priorities across wardrobe, messaging, and visibility.',
        },
      },
      {
        '@type': 'Offer',
        name: 'Signature Architecture Intensive',
        itemOffered: {
          '@type': 'Service',
          name: 'Signature Architecture Intensive',
          description:
            'A comprehensive engagement architecting identity, strategy, and presence for leaders preparing for growth or a major launch.',
        },
      },
      {
        '@type': 'Offer',
        name: 'Executive Presence Intensive',
        itemOffered: {
          '@type': 'Service',
          name: 'Executive Presence Intensive',
          description:
            'High-touch executive support to engineer a timeless, credible presence across wardrobe, voice, and digital footprint.',
        },
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is The Signature Architecture™?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Signature Architecture™ is our executive presence framework that aligns identity, strategy, and presence. It integrates wardrobe, voice, and digital to create a credible, enduring signature that earns authority and opportunity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Authority Index™?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Authority Index™ is a diagnostic that measures credibility signals across appearance, communication, and platform. It identifies gaps and prioritizes actions to accelerate trust and influence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Signature Standard™?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Signature Standard™ is a set of guardrails that codifies how you look, sound, and show up. It drives consistent decision‑making for wardrobe, messaging, and digital content so your presence remains coherent under pressure.',
      },
    },
  ],
}

export function JsonLd({ data }: JsonLdProps) {
  const additionalData = Array.isArray(data) ? data : data ? [data] : []
  const payload = [organizationSchema, faqSchema, ...additionalData]

  return (
    <>
      {payload.map((entry, index) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  )
}
