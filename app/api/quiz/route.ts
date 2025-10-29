import { NextRequest, NextResponse } from 'next/server'
import { writeLead } from '@/app/actions/writeLead'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const {
      name = '',
      email = '',
      phone = '',
      source = 'quiz',
      score,
      answers,
      meta = {},
    } = body || {}

    const created = await writeLead({ name, email, phone, source, score, answers, meta })
    return NextResponse.json({ ok: true, id: created.id })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 })
  }
}
