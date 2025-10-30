import { builder } from '@builder.io/sdk'

const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY
// Do not crash builds if the key is not present in CI/previews.
// Gracefully skip initialization so routes can render code fallbacks.
if (key) {
  builder.init(key)
} else {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn('[builder] NEXT_PUBLIC_BUILDER_API_KEY not set; skipping init')
  }
}

export { builder }
