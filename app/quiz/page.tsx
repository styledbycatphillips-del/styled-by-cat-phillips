'use client'

import { useState, Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function QuizForm() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [role, setRole] = useState('')
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])
  const [channelsError, setChannelsError] = useState('')
  const [hasMatrix, setHasMatrix] = useState<boolean | null>(null)
  const [publishesMonthly, setPublishesMonthly] = useState<boolean | null>(null)
  const [complexity, setComplexity] = useState('')
  const [submitting, setSubmitting] = useState(false)
  
  const router = useRouter()
  const params = useSearchParams()

  // Analytics: Track quiz start
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const utmParams = {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
      }
      window.gtag('event', 'quiz_start', utmParams)
    }
  }, [params])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return 'Work email is required'
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    // Block common personal domains for enterprise focus
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
    const domain = email.split('@')[1]?.toLowerCase()
    if (personalDomains.includes(domain)) return 'Please use your work email address'
    return ''
  }

  const validateChannels = (channels: string[]) => {
    if (channels.length === 0) return 'Please select at least one channel'
    if (channels.length > 4) return 'Please select no more than 4 channels'
    return ''
  }

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email))
  }

  const handleChannelChange = (channel: string, checked: boolean) => {
    let newChannels: string[]
    if (checked) {
      newChannels = [...selectedChannels, channel]
    } else {
      newChannels = selectedChannels.filter(c => c !== channel)
    }
    
    if (newChannels.length <= 4) {
      setSelectedChannels(newChannels)
      setChannelsError(validateChannels(newChannels))
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    // Validate all fields
    const emailErr = validateEmail(email)
    const channelsErr = validateChannels(selectedChannels)
    
    setEmailError(emailErr)
    setChannelsError(channelsErr)
    
    if (emailErr || channelsErr || !role || hasMatrix === null || publishesMonthly === null) {
      return
    }
    
    setSubmitting(true)

    try {
      // Analytics: Track quiz submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'quiz_submit', {
          role,
          channels_count: selectedChannels.length,
          has_matrix: hasMatrix,
          publishes: publishesMonthly,
          complexity: complexity || '1'
        })
      }

      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          role, 
          channels: selectedChannels, 
          hasMatrix, 
          publishesMonthly, 
          complexity: complexity || '1' 
        }),
      })

      const data = await res.json()
      if (!res.ok || !data?.ok) throw new Error(data?.error || 'Quiz failed')

      // Analytics: Track scoring
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'quiz_scored', {
          score: data.score,
          band: data.band
        })
      }

      // Support id if your API returns page id { id: '...' }
      const id = data.id || ''

      // Preserve UTM from the current URL if present
      const utm = ['utm_source', 'utm_medium', 'utm_campaign']
        .reduce((acc, k) => ({ ...acc, [k]: params.get(k) || '' }), {} as Record<string, string>)

      const q = new URLSearchParams({
        band: String(data.band || ''),
        score: String(data.score ?? ''),
        id,
        ...utm,
      })

      router.push(`/quiz/success?${q.toString()}`)
    } catch (err: any) {
      alert(err.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-24">
      <h1 className="text-3xl font-semibold text-center mb-4">Authority Index™</h1>
      <p className="text-lg text-neutral-700 text-center mb-2">
        Six quick answers. One clear baseline.
      </p>
      <p className="text-neutral-600 text-center mb-8">
        Start the quiz and get your score.
      </p>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
            Work email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            aria-describedby={emailError ? "email_error" : "email_help"}
            aria-invalid={!!emailError}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent focus:outline-none ${
              emailError ? 'border-red-500' : 'border-neutral-300'
            }`}
          />
          {emailError ? (
            <p id="email_error" className="mt-1 text-xs text-red-600" role="alert">{emailError}</p>
          ) : (
            <p id="email_help" className="mt-1 text-xs text-neutral-600">Use your company email.</p>
          )}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-neutral-900 mb-2">
            Role *
          </label>
          <select
            id="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent focus:outline-none"
          >
            <option value="">Select a role</option>
            <option value="Executive">Executive</option>
            <option value="Director">Director</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <fieldset>
          <legend className="block text-sm font-medium text-neutral-900 mb-2">
            Where you publish now *
          </legend>
          <div className="space-y-2" role="group" aria-describedby={channelsError ? "channels_error" : "channels_help"}>
            {['Website', 'Social', 'PR', 'Events', 'Sales collateral'].map((channel) => (
              <label key={channel} className="flex items-center gap-3 p-2 rounded hover:bg-neutral-50 cursor-pointer">
                <input
                  type="checkbox"
                  value={channel}
                  checked={selectedChannels.includes(channel)}
                  onChange={(e) => handleChannelChange(channel, e.target.checked)}
                  className="w-4 h-4 text-black focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                />
                <span className="text-sm">{channel}</span>
              </label>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between">
            {channelsError ? (
              <p id="channels_error" className="text-xs text-red-600" role="alert">{channelsError}</p>
            ) : (
              <p id="channels_help" className="text-xs text-neutral-600">
                Choose 1–4 channels you actively use.
              </p>
            )}
            <span className="text-xs text-neutral-500">{selectedChannels.length}/4</span>
          </div>
        </fieldset>

        <fieldset className="border border-neutral-200 rounded-lg p-4">
          <legend className="text-sm font-medium text-neutral-900 px-2">One message matrix for all teams? *</legend>
          <div className="flex gap-6 mt-2">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="matrix" 
                value="yes" 
                required
                checked={hasMatrix === true}
                onChange={(e) => setHasMatrix(e.target.value === 'yes')}
                className="w-4 h-4 text-black focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="matrix" 
                value="no" 
                required
                checked={hasMatrix === false}
                onChange={(e) => setHasMatrix(e.target.value === 'yes')}
                className="w-4 h-4 text-black focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="border border-neutral-200 rounded-lg p-4">
          <legend className="text-sm font-medium text-neutral-900 px-2">Leaders publish monthly? *</legend>
          <div className="flex gap-6 mt-2">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="publish" 
                value="yes" 
                required
                checked={publishesMonthly === true}
                onChange={(e) => setPublishesMonthly(e.target.value === 'yes')}
                className="w-4 h-4 text-black focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="publish" 
                value="no" 
                required
                checked={publishesMonthly === false}
                onChange={(e) => setPublishesMonthly(e.target.value === 'yes')}
                className="w-4 h-4 text-black focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </fieldset>

        <div>
          <label htmlFor="complexity" className="block text-sm font-medium text-neutral-900 mb-2">
            Brand complexity (optional)
          </label>
          <select
            id="complexity"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
            aria-describedby="complexity_help"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent focus:outline-none"
          >
            <option value="">Select complexity level</option>
            <option value="1">1 — Simple (single team)</option>
            <option value="2">2 — Multi-team</option>
            <option value="3">3 — Multi-unit/region</option>
          </select>
          <p id="complexity_help" className="mt-1 text-xs text-neutral-600">
            Choose 2 or 3 if you coordinate across multiple teams or business units.
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting || !!emailError || !!channelsError}
          className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 min-h-[48px]"
        >
          {submitting ? 'Calculating your Authority Index™...' : 'Get my Authority Index™ score'}
        </button>
        
        <p className="text-xs text-neutral-600">
          We store quiz results to send your baseline and plan. Request deletion anytime at /privacy or <a href="mailto:contact@kirkseyhouse.com" className="underline">contact@kirkseyhouse.com</a>.
        </p>
      </form>
    </main>
  )
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-2xl px-4 py-24 text-center">Loading quiz...</div>}>
      <QuizForm />
    </Suspense>
  )
}