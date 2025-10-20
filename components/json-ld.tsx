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
  logo: `${siteConfig.url}/logo.png`,
  image: siteConfig.ogImage,
  foundingDate: siteConfig.business.founded,
  founder: {
    '@type': 'Person',
    name: siteConfig.business.founder,
    jobTitle: 'Personal Stylist & Brand Designer',
    sameAs: [siteConfig.links.instagram, siteConfig.links.linkedin],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.business.address.addressLocality,
    addressRegion: siteConfig.business.address.addressRegion,
    addressCountry: siteConfig.business.address.addressCountry,
  },
  areaServed: siteConfig.business.serviceArea.map((region) => ({
    '@type': 'City',
    name: region,
  })),
  serviceType: siteConfig.business.services,
  priceRange: siteConfig.business.priceRange,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Script Your Signature methodology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Script Your Signature™ is a three-step process—Discover, Design, Define—that aligns wardrobe, presence, and brand positioning for leaders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Styled by Cat Phillips work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cat serves clients in Little Rock, Conway, Northwest Arkansas, the DFW Metro, and virtually for national engagements.',
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
