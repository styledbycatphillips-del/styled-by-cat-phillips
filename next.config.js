   /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // AI Optimization: Enable compression
  compress: true,
  // AI Optimization: Generate sitemap
  generateBuildId: async () => {
    return 'styled-by-cat-phillips-' + Date.now()
  },
  // AI Optimization: Headers for better crawling
  async headers() {
    const isProd = process.env.NODE_ENV === 'production'
    const common = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ]

    const devHeaders = [
      ...common,
      // Allow Builder editor to iframe and fetch from local dev
      {
        key: 'Content-Security-Policy',
        value:
          "frame-ancestors 'self' https://*.builder.io https://builder.io http://localhost:3000 http://127.0.0.1:3000 http://localhost:3001 http://127.0.0.1:3001 https://*.loca.lt;",
      },
      { key: 'Access-Control-Allow-Origin', value: '*' },
      { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
      { key: 'Access-Control-Allow-Headers', value: '*' },
      { key: 'Access-Control-Allow-Private-Network', value: 'true' },
    ]

    const prodHeaders = [
      ...common,
      // Enforce HTTPS for one year (preload recommended once verified at hstspreload.org)
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
      // Keep frame embedding disabled in production
      { key: 'X-Frame-Options', value: 'DENY' },
      // Start with CSP in report-only to avoid breakage; tighten after observing reports
      {
        key: 'Content-Security-Policy-Report-Only',
        value: [
          "default-src 'self'",
          // GA4, Clickio CMP, and script execution
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://clickiocmp.com https://clickiocdn.com",
          // XHR/fetch targets (analytics endpoints)
          "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
          // Images from our domain, data URIs, and https CDNs
          "img-src 'self' data: blob: https:",
          // Inline styles are used by Next.js and fonts/styles from CDNs
          "style-src 'self' 'unsafe-inline' https:",
          // Webfonts from our domain and CDNs
          "font-src 'self' data: https:",
          // Disallow framing by other sites (paired with X-Frame-Options)
          "frame-ancestors 'none'",
        ].join('; '),
      },
    ]

    return [
      {
        source: '/:path*',
        headers: isProd ? prodHeaders : devHeaders,
      },
    ]
  },
  // AI Optimization: Redirects for SEO
  async redirects() {
    return [
      {
        source: '/styling',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
