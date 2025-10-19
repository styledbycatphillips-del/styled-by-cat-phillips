import { Cormorant_Garamond, Inter } from 'next/font/google'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant'
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'
})

export default function EditorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${cormorant.variable} ${inter.variable}`}>
      {children}
    </div>
  )
}