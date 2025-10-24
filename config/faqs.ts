export type Faq = {
  question: string
  answer: string
}

export const faqs: readonly Faq[] = [
  {
    question: 'What is The Signature Architecture methodology?',
    answer:
      'The Signature Architecture™ is our proprietary 3‑step system for engineering executive presence: Discover your identity, Design your strategy and Deploy your presence across wardrobe, voice and digital platforms.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Options range from a Signature Calibration Session (starting at $350) to full Architectural or Executive Presence Intensives.',
  },
  {
    question: 'What is the Authority Index?',
    answer:
      'The Authority Index™ is our measurement tool that scores your visibility, credibility and consistency on a 0‑100 scale. It provides a baseline and tracks your progress through our programs.',
  },
] as const

