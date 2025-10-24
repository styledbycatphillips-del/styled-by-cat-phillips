export const siteConfig = {
  // Updated brand and system naming for Kirksey House
  name: 'The Signature Architecture | Kirksey House',
  description:
    'Kirksey House engineers executive presence for leaders and teams. Elevate authority and visibility with our proprietary Signature Architecture™ methodology. Serving Little Rock, Conway, Northwest Arkansas, and Dallas/Fort Worth.',
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
