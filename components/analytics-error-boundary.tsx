'use client'

import React from 'react'
import { analytics } from '@/lib/analytics-enhanced'
import { ANALYTICS_EVENTS } from '@/lib/analytics-config'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: any
}

class AnalyticsErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> },
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Track error in analytics
    analytics.track(ANALYTICS_EVENTS.QUIZ_ERROR, {
      error_message: error.message,
      error_stack: error.stack?.substring(0, 500), // Truncate for GA4 limits
      component_stack: errorInfo.componentStack?.substring(0, 500),
      error_boundary: 'AnalyticsErrorBoundary',
      timestamp: new Date().toISOString(),
    })

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Analytics Error Boundary caught an error:', error, errorInfo)
    }

    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback
      
      if (FallbackComponent && this.state.error) {
        return <FallbackComponent error={this.state.error} />
      }

      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-semibold mb-2">Something went wrong</h3>
          <p className="text-red-600 text-sm">
            We&apos;ve been notified of this error. Please try refreshing the page.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-2 text-xs">
              <summary className="cursor-pointer text-red-700">Error Details</summary>
              <pre className="mt-1 bg-red-100 p-2 rounded overflow-auto">
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

// Enhanced error tracking for async operations
export function trackAsyncError(
  error: Error,
  context: {
    operation: string
    component?: string
    userId?: string
    additionalData?: Record<string, any>
  }
) {
  analytics.track('async_error', {
    error_message: error.message,
    error_name: error.name,
    operation: context.operation,
    component: context.component,
    user_id: context.userId,
    ...context.additionalData,
    timestamp: new Date().toISOString(),
  })

  if (process.env.NODE_ENV === 'development') {
    console.error(`Async Error in ${context.operation}:`, error)
  }
}

// Hook for error tracking in functional components
export function useErrorTracking(componentName: string) {
  const trackError = (error: Error, context?: Record<string, any>) => {
    trackAsyncError(error, {
      operation: 'component_error',
      component: componentName,
      additionalData: context,
    })
  }

  return { trackError }
}

export default AnalyticsErrorBoundary