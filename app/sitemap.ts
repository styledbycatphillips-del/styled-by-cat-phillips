   import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services', 
    '/process',
    '/contact',
    '/services/signature-session',
    '/services/personal-development',
    '/services/executive-styling',
    '/services/brand-consulting',
    '/services/creative-direction',
    '/vip-experiences',
    '/masterclass',
    '/portfolio'
  ]

  // Arkansas location pages for local SEO
  const locationRoutes = [
    '/little-rock-personal-stylist',
    '/northwest-arkansas-styling',
    '/conway-image-consultant',
    '/fayetteville-personal-stylist',
    '/bentonville-executive-styling'
  ]

  const allRoutes = [...staticRoutes, ...locationRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.9 : 0.8,
  }))
}

