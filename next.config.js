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
      // In production you can keep DENY for security if you aren't embedding elsewhere
      { key: 'X-Frame-Options', value: 'DENY' },
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
