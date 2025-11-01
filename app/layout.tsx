import { bodoni, inter } from './fonts'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/json-ld'
import { GA4Setup } from '@/components/ga4-setup'
import OrganizationJsonLd from '@/components/organization-jsonld'
import { AnalyticsDashboard } from '@/components/analytics-dashboard'
import BuilderRegister from '@/builder-register'
import Script from 'next/script'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'personal stylist little rock',
    'executive styling arkansas',
    'signature style development',
    'professional image consultant',
    'signature architecture',
    'Kirksey House stylist',
    'northwest arkansas styling',
    'little rock image consultant'
  ],
  authors: [
    {
      name: 'Kirksey House',
      url: 'https://styledbycatphillips.com',
    },
  ],
  creator: 'Kirksey House',
  publisher: 'Kirksey House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/brand/logos/kh%20logo%20dark%20monogram.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@styled_by_catphillips',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const FALLBACK_GA4 = 'G-MC3VEK7RLM'
  const envGa4 = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
  // Enforce the intended GA4 property in production to avoid misconfigured envs
  const ga4MeasurementId = process.env.NODE_ENV === 'production'
    ? FALLBACK_GA4
    : (envGa4 || FALLBACK_GA4)

  return (
    <html lang="en" suppressHydrationWarning className={`${bodoni.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <JsonLd />
        <OrganizationJsonLd />
        {/* Clickio Consent Mode configuration (runs before GA4) */}
        <Script id="clickio-consent-defaults" strategy="beforeInteractive">
          {`
            //<![CDATA[
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('consent', 'default', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'functionality_storage': 'granted',
                'personalization_storage': 'granted',
                'security_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'wait_for_update': 1500
            });
            gtag('consent', 'default', {
                'region': ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','GB','CH'],
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 1500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', false);
            (function(){
              const s={adStorage:{storageName:"ad_storage",serialNumber:0},analyticsStorage:{storageName:"analytics_storage",serialNumber:1},functionalityStorage:{storageName:"functionality_storage",serialNumber:2},personalizationStorage:{storageName:"personalization_storage",serialNumber:3},securityStorage:{storageName:"security_storage",serialNumber:4},adUserData:{storageName:"ad_user_data",serialNumber:5},adPersonalization:{storageName:"ad_personalization",serialNumber:6}};let c=localStorage.getItem("__lxG__consent__v2");if(c){c=JSON.parse(c);if(c&&c.cls_val)c=c.cls_val;if(c)c=c.split("|");if(c&&c.length&&typeof c[14]!==undefined){c=c[14].split("").map(e=>e-0);if(c.length){let t={};Object.values(s).sort((e,t)=>e.serialNumber-t.serialNumber).forEach(e=>{t[e.storageName]=c[e.serialNumber]?"granted":"denied"});gtag("consent","update",t)}}}
              if(Math.random() < 0.05) {if (window.dataLayer && (window.dataLayer.some(e => e[0] === 'js' && e[1] instanceof Date) || window.dataLayer.some(e => e['event'] === 'gtm.js' && e['gtm.start'] == true ))) {document.head.appendChild(document.createElement('img')).src = "//clickiocdn.com/utr/gtag/?sid=245978";}}
            })();
            //]]>
          `}
        </Script>
        {/* Clickio main tag */}
        <Script src="https://clickiocmp.com/t/consent_245978.js" async strategy="beforeInteractive" />
        {ga4MeasurementId && <GA4Setup measurementId={ga4MeasurementId} />}
      </head>
      <body suppressHydrationWarning className={`bg-ivory text-ink antialiased font-body`}>
        <BuilderRegister />
        {children}
        <Analytics />
        <AnalyticsDashboard />
      </body>
    </html>
  )
}
