export default function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kirksey House",
    "url": "https://www.kirkseyhouse.com",
    "logo": "https://www.kirkseyhouse.com/assets/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/kirkseyhouse"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "hello@kirkseyhouse.com",
      "areaServed": "US"
    }]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kirksey House",
    "url": "https://www.kirkseyhouse.com"
  }

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
    </>
  )
}