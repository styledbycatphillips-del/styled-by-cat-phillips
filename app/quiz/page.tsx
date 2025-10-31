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
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-neutral-900 mb-2">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="">Select your role</option>
            <option value="CEO">CEO</option>
            <option value="Founder">Founder</option>
            <option value="Executive">Executive</option>
            <option value="Director">Director</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <div>
          <label htmlFor="channels" className="block text-sm font-medium text-neutral-900 mb-2">
            Primary channels where you need to be visible
          </label>
          <select
            id="channels"
            value={channels}
            onChange={(e) => setChannels(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="">Select primary channels</option>
            <option value="LinkedIn + Conferences">LinkedIn + Conferences</option>
            <option value="Media + Press">Media + Press</option>
            <option value="Internal + Board">Internal + Board meetings</option>
            <option value="Social + Digital">Social + Digital platforms</option>
          </select>
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <input
              id="hasMatrix"
              type="checkbox"
              checked={hasMatrix}
              onChange={(e) => setHasMatrix(e.target.checked)}
              className="w-4 h-4 text-black bg-neutral-100 border-neutral-300 rounded focus:ring-black"
            />
            <label htmlFor="hasMatrix" className="ml-2 text-sm text-neutral-900">
              I have a clear message matrix (consistent messaging across all platforms)
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="publishesMonthly"
              type="checkbox"
              checked={publishesMonthly}
              onChange={(e) => setPublishesMonthly(e.target.checked)}
              className="w-4 h-4 text-black bg-neutral-100 border-neutral-300 rounded focus:ring-black"
            />
            <label htmlFor="publishesMonthly" className="ml-2 text-sm text-neutral-900">
              I publish content or speak publicly at least monthly
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Calculating...' : 'Get My Authority Index'}
        </button>
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