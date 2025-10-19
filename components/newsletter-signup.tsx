'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { trackEvent } from '@/lib/analytics'

interface NewsletterSignupProps {
  variant: 'inline' | 'card'
  source?: 'popup' | 'inline' | 'ribbon' | 'chat' | 'editorial'
}

type Role = 'Attorney' | 'Advisor' | 'Agent'
type Status = 'idle' | 'submitting' | 'success' | 'error' | 'duplicate'

// Analytics tracking function
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, any>) => void
  }
}

export function NewsletterSignup({ variant, source = 'inline' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role | ''>('')
  const [honeypot, setHoneypot] = useState('') // Security honeypot
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Track impression on mount
  useEffect(() => {
    if (variant === 'card') {
      trackEvent('popup_impression', { source })
    }
  }, [variant, source])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track engagement
    if (variant === 'card') {
      trackEvent('popup_engaged', { source })
    }

    // Reset errors
    setErrors({})
    
    // Client-side validation
    const newErrors: Record<string, string> = {}
    
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus('submitting')

    try {
      const payload = {
        email: email.trim(),
        role: role || undefined,
        source,
        website: honeypot // Honeypot field
      }

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setRole('')
        
        // Track successful submission
        const eventName = variant === 'card' ? 'popup_submit' : 'inline_submit'
        trackEvent(eventName, { source, role: role || undefined, email_provided: true })
        
      } else if (res.status === 409) {
        setStatus('duplicate')
      } else if (res.status === 422) {
        const errorData = await res.json()
        setErrors({ email: errorData.message || 'Invalid email address' })
        setStatus('error')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'
  const hasEmailError = Boolean(errors.email)

  const containerClasses = variant === 'card' 
    ? 'bg-white rounded-2xl shadow-xl p-8 border border-signature-gray/30'
    : 'bg-signature-cream/50 rounded-lg p-6'

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {variant === 'card' && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif font-bold text-signature-black mb-2">
            Originals set the standard.
          </h3>
          <p className="text-signature-navy">
            Get the Signature Edit. Seven rules to look credible on camera.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Email field */}
        <div>
          <label htmlFor="newsletter-email" className="block text-sm font-medium text-signature-navy mb-2">
            Email Address *
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              hasEmailError
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-signature-gray/30 focus:border-signature-champagne focus:ring-signature-champagne/20'
            } focus:ring-2 focus:outline-none`}
            placeholder="your.email@example.com"
            aria-invalid={hasEmailError}
            aria-describedby={hasEmailError ? 'email-error' : undefined}
            disabled={isSubmitting}
            required
          />
          {hasEmailError && (
            <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Role field (optional) */}
        <div>
          <label htmlFor="newsletter-role" className="block text-sm font-medium text-signature-navy mb-2">
            Professional Role (Optional)
          </label>
          <select
            id="newsletter-role"
            value={role}
            onChange={(e) => setRole(e.target.value as Role | '')}
            className="w-full px-4 py-3 rounded-lg border border-signature-gray/30 focus:border-signature-champagne focus:ring-signature-champagne/20 focus:ring-2 focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            <option value="">Select your role</option>
            <option value="Attorney">Attorney</option>
            <option value="Advisor">Advisor</option>
            <option value="Agent">Agent</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </span>
          ) : (
            'Get the Edit'
          )}
        </button>

        {/* Status messages */}
        <div aria-live="polite" aria-atomic="true" className="min-h-[24px]">
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 text-sm font-medium"
            >
              Check your inbox. The Signature Edit is on the way.
            </motion.p>
          )}
          
          {status === 'duplicate' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-600 text-sm font-medium"
            >
              You're already subscribed! Check your inbox for our latest updates.
            </motion.p>
          )}
          
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm font-medium"
            >
              Something went wrong. Please try again or contact us directly.
            </motion.p>
          )}
        </div>
      </form>

      {variant === 'card' && (
        <p className="text-xs text-signature-gray text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      )}
    </motion.div>
  )
}
