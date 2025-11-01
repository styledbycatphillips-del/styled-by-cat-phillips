'use client'

import { useAnalytics, useUTMParams } from '@/lib/analytics-enhanced'

interface TrackedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  ctaType: string
  page: string
  context?: Record<string, any>
  preserveUTM?: boolean
}

export function TrackedLink({
  href,
  children,
  className,
  target,
  rel,
  ctaType,
  page,
  context = {},
  preserveUTM = true,
  ...props
}: TrackedLinkProps) {
  const { trackCTAClick } = useAnalytics()
  const utmData = useUTMParams()

  const handleClick = () => {
    trackCTAClick(ctaType, page, context)
  }

  const getHrefWithUTM = () => {
    if (!preserveUTM) return href

    const utmParams = new URLSearchParams()
    
    if (utmData.utm_source) utmParams.set('utm_source', utmData.utm_source)
    if (utmData.utm_medium) utmParams.set('utm_medium', utmData.utm_medium)
    if (utmData.utm_campaign) utmParams.set('utm_campaign', utmData.utm_campaign)

    if (utmParams.toString()) {
      const separator = href.includes('?') ? '&' : '?'
      return `${href}${separator}${utmParams.toString()}`
    }

    return href
  }

  return (
    <a
      href={getHrefWithUTM()}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}

interface TrackedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  actionType: string
  page: string
  context?: Record<string, any>
}

export function TrackedButton({
  children,
  className,
  onClick,
  disabled,
  type = 'button',
  actionType,
  page,
  context = {},
  ...props
}: TrackedButtonProps) {
  const { trackUserAction } = useAnalytics()

  const handleClick = () => {
    trackUserAction(actionType, 'button_click', page, 1)
    if (onClick) onClick()
  }

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}