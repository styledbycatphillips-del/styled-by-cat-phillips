export const siteConfig = {
  // Updated brand and system naming for Kirksey House
  name: 'The Signature Architecture | Kirksey House',
  description:
    'Kirksey House engineers executive presence through The Signature Architecture™ — a comprehensive method for aligning wardrobe, voice and digital presence for leaders and rising founders.',
  // Keep existing domain until migration is complete
  url: 'https://styledbycatphillips.com',
  ogImage: 'https://styledbycatphillips.com/brand/logos/KH%20logo%20horse.svg',
  links: {
    instagram: 'https://instagram.com/styled.by.catphillips',
    linkedin: 'https://linkedin.com/in/catphillips',
    email: 'catherine@kirkseyhouse.com',
    phone: '501.541.1139',
    // Keep calendly for existing usages
    calendly: 'https://calendly.com/styledbycat/signature-session',
  },
  business: {
    // Rebrand the business name to Kirksey House
    name: 'Kirksey House',
    legalName: 'Kirksey House Consulting, LLC',
    founder: 'Catherine Phillips',
    founded: '2011',
    address: {
      streetAddress: '',
      addressLocality: 'Little Rock',
      addressRegion: 'AR',
      postalCode: '',
      addressCountry: 'US',
    },
    serviceArea: [
      'Little Rock, Arkansas',
      'Conway, Arkansas',
      'North Little Rock, Arkansas',
      'Northwest Arkansas',
      'Fayetteville, Arkansas',
      'Bentonville, Arkansas',
      'Dallas–Fort Worth Metro',
      'Dallas, Texas',
      'Fort Worth, Texas',
    ],
    // Update services to align with The Signature Architecture framework
    services: [
      'Signature Calibration Session',
      'Signature Architecture Intensive',
      'Executive Presence Intensive',
    ],
    priceRange: '$350-$10,000',
  },
} as const

export type SiteConfig = typeof siteConfig

// Simplified site shape for marketing copy and UI composition
export const site = {
  name: 'The Signature Architecture | Kirksey House',
  description:
    'Kirksey House engineers executive presence through The Signature Architecture™ — a comprehensive method for aligning wardrobe, voice and digital presence for leaders and rising founders.',
  business: {
    name: 'Kirksey House',
    // keep existing address/phone/email
  },
  services: [
    { name: 'Signature Calibration Session', priceRange: '$350+' },
    { name: 'Signature Architecture Intensive', priceRange: '$1,800–$3,500' },
    { name: 'Executive Presence Intensive', priceRange: '$2,500–$6,000' },
  ],
} as const

export type Site = typeof site

