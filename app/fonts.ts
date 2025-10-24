import { Bodoni_Moda, Inter } from 'next/font/google'

export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-head',
  weight: ['400', '500', '600', '700'],
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

