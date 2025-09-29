   import { siteConfig } from '@/config/site'

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": siteConfig.url + "#organization",
    "name": siteConfig.business.name,
    "legalName": siteConfig.business.legalName,
    "url": siteConfig.url,
    "logo": siteConfig.url + "/logo.png",
    "image": siteConfig.ogImage,
    "description": siteConfig.description,
    "telephone": siteConfig.links.phone,
    "email": siteConfig.links.email,
    "foundingDate": siteConfig.business.founded,
    "founder": {
      "@type": "Person",
      "name": siteConfig.business.founder,
      "jobTitle": "Personal Stylist & Brand Designer",
      "email": siteConfig.links.email,
      "telephone": siteConfig.links.phone,
      "url": siteConfig.url + "/about",
      "sameAs": [
        siteConfig.links.instagram,
        siteConfig.links.linkedin
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.business.address.addressLocality,
      "addressRegion": siteConfig.business.address.addressRegion,
      "addressCountry": siteConfig.business.address.addressCountry
    },
    "areaServed": siteConfig.business.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": siteConfig.business.services,
    "priceRange": siteConfig.business.priceRange,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Signature Styling Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Signature Session",
            "description": "90-minute signature discovery consultation with personal style assessment and roadmap"
          },
          "price": "350",
          "priceCurrency": "USD",
          "availability": "InStock"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Signature Development",
            "description": "Complete style transformation with wardrobe audit, shopping, and styling sessions"
          },
          "price": "1800",
          "priceCurrency": "USD", 
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive Signature Styling",
            "description": "Leadership presence development for executives and public speakers"
          },
          "price": "2500",
          "priceCurrency": "USD",
          "availability": "InStock"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      siteConfig.links.instagram,
      siteConfig.links.linkedin
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Script Your Signature methodology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Script Your Signature™ is Cat Phillips' proprietary 3-step process for developing authentic signature style: Discover your identity, Design your strategy, and Define your presence. This systematic approach helps executives and creatives move beyond trends to develop signature style that supports their professional goals."
        }
      },
      {
        "@type": "Question", 
        "name": "How much does personal styling cost in Little Rock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Personal styling in Little Rock ranges from $350 for signature discovery sessions to $6,000 for executive styling packages. Cat Phillips offers transparent pricing with services including consultation, complete transformations, and executive presence development."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does Cat Phillips serve in Arkansas?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Cat Phillips serves Little Rock, Conway, North Little Rock, Northwest Arkansas including Fayetteville and Bentonville. She also works with clients virtually and travels for executive styling sessions."
        }
      },
      {
        "@type": "Question",
        "name": "What makes signature development different from regular personal styling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Signature development focuses on creating authentic style identity that becomes your professional advantage, while regular styling often follows current trends. Cat's Script Your Signature™ methodology helps clients develop consistent, authentic presence that opens doors and creates opportunities."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}