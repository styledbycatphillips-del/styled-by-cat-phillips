import { Inter } from 'next/font/google'

// Simplified font exports: use Google Inter as the safe fallback for
// all site font variables so builds won't fail if local font binaries
// are not present in the environment. This keeps runtime styles stable
// while allowing the repo to avoid committing large binary files.

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

// Export aliases so other components can import named fonts without
// breaking. All default to Inter in CI / build environments.
export const bodoni = inter
export const noar = inter
export const grabag = inter
export const things = inter
export const carote = inter
export const cathelink = inter
export const luxury = inter
export const masterday = inter
export const saintPauline = inter
