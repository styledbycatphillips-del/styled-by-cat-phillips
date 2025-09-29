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
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
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