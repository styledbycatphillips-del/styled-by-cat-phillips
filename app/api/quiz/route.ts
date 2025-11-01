import { NextResponse } from 'next/server'
import { writeLead } from '@/app/actions/writeLead'
import { z } from 'zod'

// 1) Payload schema
const QuizSchema = z.object({
  email: z.string().email(),
  role: z.string().min(2).max(64).optional(),
  channels: z.union([z.array(z.string()), z.string()]).optional(),
  hasMatrix: z.boolean().optional(),
  publishesMonthly: z.boolean().optional(),
  complexity: z.string().optional(),
})

// 2) Tiny in‑memory rate limit (per IP, per 60s)
const bucket = new Map<string, { count: number; ts: number }>()
const WINDOW_MS = 60_000
const MAX_REQ = 5

function band(score: number) {
  if (score < 35) return 'Emerging'
  if (score < 70) return 'Practicing'
  return 'Consistent'
}

export async function POST(req: Request) {
  try {
    // Rate limit
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const now = Date.now()
    const rec = bucket.get(ip) || { count: 0, ts: now }
    if (now - rec.ts > WINDOW_MS) { rec.count = 0; rec.ts = now }
    if (++rec.count > MAX_REQ) return NextResponse.json({ error: 'Too many attempts' }, { status: 429 })
    bucket.set(ip, rec)

    // Validate input
    const json = await req.json()
    const { email, role, channels = [], hasMatrix = false, publishesMonthly = false, complexity = '1' } = QuizSchema.parse(json)

    // Parse channels (handle both string and array)
    const channelArray = Array.isArray(channels) 
      ? channels 
      : typeof channels === 'string' 
        ? channels.split(',').map(c => c.trim()).filter(Boolean)
        : []

    // Score using the specification rubric
    let score = 10 // Base
    score += Math.min(channelArray.length * 5, 20) // +5 per channel, max +20
    score += hasMatrix ? 30 : 0 // +30 if matrix exists
    score += publishesMonthly ? 30 : 0 // +30 if publishes monthly
    score += (complexity === '2' || complexity === '3') ? 10 : 0 // +10 if complexity ≥ 2

    // Persist
    const quizData = { role, channels: channelArray, hasMatrix, publishesMonthly, complexity }
    const created = await writeLead({ 
      email, 
      source: 'Authority Index Quiz', 
      score,
      answers: quizData,
      meta: { band: band(score), ip }
    })

    // Post-launch monitoring (remove after 48h)
    console.log(`[QUIZ] ${new Date().toISOString()} | ${email} | Band: ${band(score)} | Score: ${score} | ID: ${created.id}`)

    return NextResponse.json({ ok: true, score, band: band(score), id: created.id })
  } catch (e: any) {
    console.log(`[QUIZ ERROR] ${new Date().toISOString()} | ${e?.message || 'Unknown error'}`)
    if (e?.name === 'ZodError') return NextResponse.json({ error: 'Invalid input', details: e.issues }, { status: 400 })
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
  }
}
