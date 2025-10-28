import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

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

export const carote = localFont({
  src: '../public/fonts/Carote.otf',
  variable: '--font-carote',
  display: 'swap',
})

export const things = localFont({
  src: '../public/fonts/Things.otf',
  variable: '--font-things',
  display: 'swap',
})

export const cathelink = localFont({
  src: '../public/fonts/Cathelink.otf',
  variable: '--font-cathelink',
  display: 'swap',
})

export const luxury = localFont({
  src: '../public/fonts/Luxury.otf',
  variable: '--font-luxury',
  display: 'swap',
})

export const masterday = localFont({
  src: '../public/fonts/Masterday Luxury.otf',
  variable: '--font-masterday',
  display: 'swap',
})

export const saintPauline = localFont({
  src: '../public/fonts/Saint Pauline.otf',
  variable: '--font-saint-pauline',
  display: 'swap',
})

export const noar = localFont({
  src: [
    { path: '../public/fonts/Noar Regular.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Noar Medium.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Noar Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-noar',
  display: 'swap',
})

export const grabag = localFont({
  src: '../public/fonts/Grabag Regular.otf',
  variable: '--font-grabag',
  display: 'swap',
})
