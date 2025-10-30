import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

// Minimal, build-safe font setup for Vercel
// Keep one local family that uses woff2 files we know exist,
// and fall back the rest to Inter so imports elsewhere don’t break.

export const bodoni = localFont({
  src: [
    { path: '../public/fonts/bodoni-moda-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/bodoni-moda-500.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/bodoni-moda-600.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/bodoni-moda-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-head',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

// Use local WOFF where available; otherwise fall back to Inter
export const noar = localFont({
  src: [
    { path: '../public/fonts/Noar-Extralightitalic.woff', weight: '200', style: 'italic' },
    { path: '../public/fonts/Noar-Light.woff', weight: '300', style: 'normal' },
    { path: '../public/fonts/Noar-Regular.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/Noar-Medium.woff', weight: '500', style: 'normal' },
    { path: '../public/fonts/Noar-Bold.woff', weight: '700', style: 'normal' },
  ],
  variable: '--font-noar',
  display: 'swap',
})

export const grabag = localFont({
  src: [
    { path: '../public/fonts/Grabag-Regular.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/Grabag-Italic.woff', weight: '400', style: 'italic' },
    { path: '../public/fonts/Grabag-Inline.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/Grabag-Outline.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/Grabag-Shadow-Italic.woff', weight: '400', style: 'italic' },
  ],
  variable: '--font-grabag',
  display: 'swap',
})

export const things = inter
export const carote = inter
export const cathelink = inter
export const luxury = localFont({ src: '../public/fonts/Luxiana-Regular.woff', variable: '--font-luxury', display: 'swap' })
export const masterday = inter
export const saintPauline = inter
