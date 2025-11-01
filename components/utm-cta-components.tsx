'use client'

import { useEffect } from 'react'

interface UTMCTALinkProps {
  href: string
  children: React.ReactNode
  className?: string
  ctaType: string
  onClick?: () => void
}

export function UTMCTALink({ href, children, className, ctaType, onClick }: UTMCTALinkProps) {
  const handleClick = () => {
    // Fire GA4 success CTA event
    if (typeof window !== 'undefined' && (window as any).fireSuccessCTA) {
      (window as any).fireSuccessCTA(ctaType)
    }
    
    if (onClick) onClick()
  }

  return (
    <a 
      href={href}
      className={`js-utm ${className || ''}`}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

interface QuizPageSetupProps {
  onQuizStart?: () => void
}

export function QuizPageSetup({ onQuizStart }: QuizPageSetupProps) {
  useEffect(() => {
    // Fire quiz start event when component mounts
    if (typeof window !== 'undefined' && (window as any).fireQuizStart) {
      (window as any).fireQuizStart()
    }
    
    if (onQuizStart) onQuizStart()
  }, [onQuizStart])

  return null
}

interface SuccessPageSetupProps {
  score: number
  band: string
  onQuizScored?: (data: { score: number; band: string }) => void
}

export function SuccessPageSetup({ score, band, onQuizScored }: SuccessPageSetupProps) {
  useEffect(() => {
    // Fire quiz scored event when success page loads
    if (typeof window !== 'undefined' && (window as any).fireQuizScored) {
      (window as any).fireQuizScored({ score, band })
    }
    
    if (onQuizScored) onQuizScored({ score, band })
  }, [score, band, onQuizScored])

  return null
}

// Utility to fire audit booking events
export function fireAuditBooking(source: string) {
  if (typeof window !== 'undefined' && (window as any).fireAuditBooked) {
    (window as any).fireAuditBooked(source)
  }
}