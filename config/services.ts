export type Service = {
  id: 'calibration' | 'architecture' | 'executive'
  title: string
  kind: string
  bullets: string[]
  cta: { label: string; href: string }
}

export const services: Service[] = [
  {
    id: 'calibration',
    title: 'Signature Calibration Session — Starting at $350',
    kind: 'Discovery Consultation',
    bullets: [
      'Presence audit and priority roadmap',
      'Signature palette + wardrobe direction',
      'Key talking points and next steps',
    ],
    cta: { label: 'Book a discovery call →', href: '/contact' },
  },
  {
    id: 'architecture',
    title: 'Signature Architecture Intensive — $1,800 – $3,500',
    kind: 'Complete Transformation',
    bullets: [
      'Wardrobe overhaul + lookbook',
      'Voice, messaging, and platform alignment',
      'Photography and content direction',
    ],
    cta: { label: 'Book a discovery call →', href: '/contact' },
  },
  {
    id: 'executive',
    title: 'Executive Presence Intensive — $2,500 – $6,000',
    kind: 'Leadership Presence',
    bullets: [
      'On‑call styling and event preparation',
      'Executive coaching and media readiness',
      'Authority Index™ audit and refinement',
    ],
    cta: { label: 'Book a discovery call →', href: '/contact' },
  },
] as const

