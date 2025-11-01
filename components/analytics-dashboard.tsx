'use client'

import { useState, useEffect } from 'react'
import { analytics } from '@/lib/analytics-enhanced'

interface AnalyticsDashboardProps {
  isVisible?: boolean
}

interface AnalyticsEvent {
  event: string
  timestamp: string
  parameters: Record<string, any>
}

export function AnalyticsDashboard({ isVisible = false }: AnalyticsDashboardProps) {
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  const [showDashboard, setShowDashboard] = useState(isVisible)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    // Listen for analytics events
    const originalTrack = analytics.track.bind(analytics)
    analytics.track = (eventName: string, parameters: Record<string, any> = {}) => {
      // Call original method
      originalTrack(eventName, parameters)
      
      // Store for dashboard
      const newEvent: AnalyticsEvent = {
        event: eventName,
        timestamp: new Date().toISOString(),
        parameters
      }
      
      setEvents(prev => [newEvent, ...prev.slice(0, 49)]) // Keep last 50 events
    }

    // Keyboard shortcut to toggle dashboard
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowDashboard(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!showDashboard || process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 max-h-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50 overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 border-b flex justify-between items-center">
        <h3 className="font-semibold text-sm">Analytics Dashboard</h3>
        <button
          onClick={() => setShowDashboard(false)}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          ✕
        </button>
      </div>
      
      <div className="p-4 overflow-y-auto max-h-80">
        <div className="mb-4">
          <p className="text-xs text-gray-600 mb-2">
            Events: {events.length} | Ctrl+Shift+A to toggle
          </p>
          <button
            onClick={() => setEvents([])}
            className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded"
          >
            Clear Events
          </button>
        </div>

        <div className="space-y-2">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 p-2 rounded text-xs">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-blue-600">{event.event}</span>
                <span className="text-gray-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </span>
              </div>
              
              {Object.keys(event.parameters).length > 0 && (
                <div className="text-gray-600">
                  <details className="cursor-pointer">
                    <summary className="hover:text-gray-800">Parameters ({Object.keys(event.parameters).length})</summary>
                    <pre className="mt-1 text-xs bg-gray-100 p-1 rounded overflow-x-auto">
                      {JSON.stringify(event.parameters, null, 2)}
                    </pre>
                  </details>
                </div>
              )}
            </div>
          ))}
          
          {events.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              No events yet. Interact with the page to see analytics events.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Hook for analytics debugging
export function useAnalyticsDebug() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  
  const logEvent = (eventName: string, parameters: Record<string, any>) => {
    if (process.env.NODE_ENV === 'development') {
      console.group(`📊 Analytics: ${eventName}`)
      console.log('Parameters:', parameters)
      console.log('Timestamp:', new Date().toISOString())
      console.groupEnd()
    }
  }

  return { logEvent, events }
}