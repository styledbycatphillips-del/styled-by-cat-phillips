   import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/json-ld'
import { GoogleAnalytics } from '@/components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

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
    'script your signature',
    'cat phillips stylist',
    'northwest arkansas styling',
    'little rock image consultant'
  ],
  authors: [
    {
      name: 'Cat Phillips',
      url: 'https://styledbycatphillips.com',
    },
  ],
  creator: 'Cat Phillips',
  publisher: 'Styled by Cat Phillips',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        {ga4MeasurementId && <GoogleAnalytics measurementId={ga4MeasurementId} />}
      </body>
    </html>
  )
}