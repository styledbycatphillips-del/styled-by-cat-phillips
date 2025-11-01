'use client'

import { useEffect, useState } from 'react'
import { useAnalytics } from '@/lib/analytics-enhanced'

interface FormAnalyticsProps {
  formName: string
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
  className?: string
}

export function FormAnalytics({ formName, children, onSubmit, className }: FormAnalyticsProps) {
  const { trackUserAction, trackFormError } = useAnalytics()
  const [startTime] = useState(Date.now())
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Track form view
    trackUserAction('form_view', 'form_interaction', formName)
  }, [formName, trackUserAction])

  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true)
      trackUserAction('form_start', 'form_interaction', formName)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    const timeToComplete = Math.round((Date.now() - startTime) / 1000)
    trackUserAction('form_submit', 'form_interaction', formName, timeToComplete)
    
    if (onSubmit) {
      onSubmit(e)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      onFocus={handleFormStart}
      className={className}
      data-analytics-form={formName}
    >
      {children}
    </form>
  )
}

interface FormFieldProps {
  name: string
  formName: string
  children: React.ReactNode
  error?: string
}

export function FormField({ name, formName, children, error }: FormFieldProps) {
  const { trackFormError } = useAnalytics()

  useEffect(() => {
    if (error) {
      trackFormError(formName, name, 'validation_error')
    }
  }, [error, formName, name, trackFormError])

  return (
    <div data-field={name}>
      {children}
    </div>
  )
}