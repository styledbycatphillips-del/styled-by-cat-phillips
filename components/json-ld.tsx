import { siteConfig } from '@/config/site'

type JsonLdProps = {
  data?: object | object[]
}

export const organization = {
  '@type': 'Organization',
  name: siteConfig.business.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/logos/kh%20logo%20dark%20monogram.svg`,
}

export const servicesSchema = [
  { '@type': 'Service', name: 'Signature Calibration Session', provider: { '@type': 'Organization', name: siteConfig.business.name } },
  { '@type': 'Service', name: 'Signature Architecture Intensive', provider: { '@type': 'Organization', name: siteConfig.business.name } },
  { '@type': 'Service', name: 'Executive Presence Intensive', provider: { '@type': 'Organization', name: siteConfig.business.name } },
] as const

export const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is The Signature Architecture methodology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Signature Architecture™ is our proprietary 3-step system for engineering executive presence: Discover your identity, Design your strategy and Deploy your presence across wardrobe, voice and digital platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Options range from a Signature Calibration Session (starting at $350) to full Architectural or Executive Presence Intensives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Authority Index?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Authority Index™ is our measurement tool that scores your visibility, credibility and consistency on a 0-100 scale. It provides a baseline and tracks your progress through our programs.',
      },
    },
  ],
}

export function JsonLd({ data }: JsonLdProps) {
  const additionalData = Array.isArray(data) ? data : data ? [data] : []

  const payload = [
    { '@context': 'https://schema.org', ...organization },
    ...servicesSchema.map((s) => ({ '@context': 'https://schema.org', ...s })),
    { '@context': 'https://schema.org', ...faqSchema },
    ...additionalData,
  ]

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

