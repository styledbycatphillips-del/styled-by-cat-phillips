   // Type definitions for Kirksey House website

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export interface Service {
  name: string
  tagline: string
  price: string
  description: string
  features: string[]
  bestFor: string
  href: string
  featured?: boolean
}

export interface Testimonial {
  content: string
  author: string
  title: string
  location: string
  image: string
  rating: number
}

export interface ProcessStep {
  number: string
  title: string
  subtitle: string
  description: string
  features: string[]
  image: string
}

export interface NavigationItem {
  name: string
  href: string
}
