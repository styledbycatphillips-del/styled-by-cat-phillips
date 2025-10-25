// Safe, side-effectful registration of custom Builder components.
// This file is imported at app runtime to ensure components are
// available in the Builder editor and previews.

import '@/lib/builder'

declare global {
  interface Window {
    __BUILDER_COMPONENTS_REGISTERED__?: boolean
  }
}

if (typeof window !== 'undefined') {
  // Avoid duplicate registration during HMR or multiple imports
  if (!window.__BUILDER_COMPONENTS_REGISTERED__) {
    window.__BUILDER_COMPONENTS_REGISTERED__ = true

    // Dynamically load the React SDK only in the browser
    import('@builder.io/react')
      .then(async ({ Builder, builder }) => {
        // Ensure the React SDK has the public API key
        const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY
        if (key) builder.init(key)

        const { Hero } = await import('@/components/Hero')

        Builder.registerComponent(Hero, {
          name: 'Hero',
          inputs: [
            { name: 'title', type: 'string', required: true },
            { name: 'subtitle', type: 'string' },
          ],
        })
      })
      .catch(() => {
        // no-op if the React SDK isn't available yet
      })
  }
}

export {}

