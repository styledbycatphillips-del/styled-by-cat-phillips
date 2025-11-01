'use client'

import { useEffect, useRef } from 'react'
import { useAnalytics } from '@/lib/analytics-enhanced'

interface AnalyticsTrackerProps {
  children: React.ReactNode
  page?: string
  category?: string
}

export function AnalyticsTracker({ children, page, category = 'page' }: AnalyticsTrackerProps) {
  const { trackPageView, trackEngagement } = useAnalytics()
  const startTime = useRef<number>(Date.now())
  const hasTrackedScroll = useRef<boolean>(false)

  useEffect(() => {
    if (page) {
      trackPageView(page)
    }

    // Track scroll engagement
    const handleScroll = () => {
      if (!hasTrackedScroll.current && window.scrollY > window.innerHeight * 0.25) {
        trackEngagement('scroll', Math.round(window.scrollY))
        hasTrackedScroll.current = true
      }
    }

    // Track time on page when leaving
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000)
      if (timeOnPage > 10) { // Only track if spent more than 10 seconds
        trackEngagement('time_on_page', timeOnPage)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      handleBeforeUnload() // Track time when component unmounts
    }
  }, [page, trackPageView, trackEngagement])

  return <>{children}</>
}