'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function QuizForm() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [channels, setChannels] = useState('')
  const [hasMatrix, setHasMatrix] = useState(false)
  const [publishesMonthly, setPublishesMonthly] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  
  const router = useRouter()
  const params = useSearchParams()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, channels, hasMatrix, publishesMonthly }),
      })

      const data = await res.json()
      if (!res.ok || !data?.ok) throw new Error(data?.error || 'Quiz failed')

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
      <h1 className="text-3xl font-semibold text-center mb-8">Authority Index Quiz</h1>
      <p className="text-neutral-600 text-center mb-8">
        Quick assessment to understand where your brand stands and how visible you are.
      </p>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="email_help"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <p id="email_help" className="mt-1 text-xs text-neutral-600">Use your company email.</p>
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-neutral-900 mb-2">
            Role
          </label>
          <select
            id="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="">Select a role</option>
            <option value="Executive">Executive</option>
            <option value="Director">Director</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <div>
          <label htmlFor="channels" className="block text-sm font-medium text-neutral-900 mb-2">
            Where you publish now
          </label>
          <select
            id="channels"
            multiple
            required
            value={channels ? [channels] : []}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, option => option.value);
              setChannels(selected.join(', '));
            }}
            aria-describedby="channels_help"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="Website">Website</option>
            <option value="Social">Social</option>
            <option value="PR">PR</option>
            <option value="Events">Events</option>
            <option value="Sales collateral">Sales collateral</option>
          </select>
          <p id="channels_help" className="mt-1 text-xs text-neutral-600">Choose channels you actively use.</p>
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-neutral-900 mb-2">One message matrix for all teams?</legend>
          <div className="flex gap-6">
            <label className="inline-flex items-center gap-2">
              <input 
                type="radio" 
                name="matrix" 
                value="yes" 
                required
                checked={hasMatrix === true}
                onChange={(e) => setHasMatrix(e.target.value === 'yes')}
                className="text-black focus:ring-black"
              />
              Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input 
                type="radio" 
                name="matrix" 
                value="no" 
                required
                checked={hasMatrix === false}
                onChange={(e) => setHasMatrix(e.target.value === 'yes')}
                className="text-black focus:ring-black"
              />
              No
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-neutral-900 mb-2">Leaders publish monthly?</legend>
          <div className="flex gap-6">
            <label className="inline-flex items-center gap-2">
              <input 
                type="radio" 
                name="publish" 
                value="yes" 
                required
                checked={publishesMonthly === true}
                onChange={(e) => setPublishesMonthly(e.target.value === 'yes')}
                className="text-black focus:ring-black"
              />
              Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input 
                type="radio" 
                name="publish" 
                value="no" 
                required
                checked={publishesMonthly === false}
                onChange={(e) => setPublishesMonthly(e.target.value === 'yes')}
                className="text-black focus:ring-black"
              />
              No
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Calculating...' : 'Get my score'}
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