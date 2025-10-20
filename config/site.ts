export const siteConfig = {
  name: 'Script Your Signature | Styled by Cat Phillips',
  description:
    "Arkansas's premier personal stylist and signature development specialist. Transform your professional presence with the proprietary Script Your Signature™ methodology. Serving Little Rock, Conway, and Northwest Arkansas executives and creatives.",
  url: 'https://styledbycatphillips.com',
  ogImage: 'https://styledbycatphillips.com/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/styled.by.catphillips',
    linkedin: 'https://linkedin.com/in/catphillips',
    email: 'cat@styledbycatphillips.com',
    phone: '501.541.1139',
    calendly: 'https://calendly.com/styledbycat/signature-session',
  },
  business: {
    name: 'Styled by Cat Phillips',
    legalName: 'Catherine Phillips Styling Services',
    founder: 'Cat Phillips',
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
      'Dallas-Fort Worth Metro',
      'Dallas, Texas',
      'Fort Worth, Texas',
    ],
    services: [
      'Personal Signature Styling',
      'Executive Presence Development',
      'Brand Identity Consulting',
      'Creative Direction',
      'Wardrobe Consulting',
      'Image Consulting',
    ],
    priceRange: '$350-$10000',
  },
} as const

export type SiteConfig = typeof siteConfig
