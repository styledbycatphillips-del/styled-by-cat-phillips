   /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://styledbycatphillips.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    additionalSitemaps: [
      'https://styledbycatphillips.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customConfig = {
      loc: path,
      lastmod: new Date().toISOString(),
    }

    // Homepage gets highest priority
    if (path === '/') {
      return {
        ...customConfig,
        priority: 1.0,
        changefreq: 'weekly',
      }
    }

    // Service pages get high priority
    if (path.startsWith('/services')) {
      return {
        ...customConfig,
        priority: 0.9,
        changefreq: 'monthly',
      }
    }

    // Location pages get medium-high priority
    if (path.includes('little-rock') || path.includes('arkansas')) {
      return {
        ...customConfig,
        priority: 0.8,
        changefreq: 'monthly',
      }
    }

    // Default settings
    return {
      ...customConfig,
      priority: 0.7,
      changefreq: 'monthly',
    }
  },
}