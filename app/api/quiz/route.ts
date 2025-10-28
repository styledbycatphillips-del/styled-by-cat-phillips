import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

function normalizeId(id: string | undefined | null) {
  if (!id) return ''
  const s = id.replace(/[^a-fA-F0-9]/g, '')
  if (s.length !== 32) return id
  return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20)}`
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.NOTION_SECRET
    const leadsDbRaw = process.env.NOTION_LEADS_DB_ID
    const leadsDb = normalizeId(leadsDbRaw)

    if (!secret) {
      return NextResponse.json({ ok: false, error: 'Missing NOTION_SECRET' }, { status: 500 })
    }
    if (!leadsDb) {
      return NextResponse.json({ ok: false, error: 'Missing NOTION_LEADS_DB_ID' }, { status: 500 })
    }

    const notion = new Client({ auth: secret })

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

    // Retrieve DB to detect available properties and types
    let db
    try {
      db = await notion.databases.retrieve({ database_id: leadsDb })
    } catch (e: any) {
      return NextResponse.json(
        { ok: false, error: `Cannot access leads DB: ${e?.message || e}` },
        { status: 500 },
      )
    }

    const props = db.properties || {}
    // Find title property key
    let titleKey = Object.keys(props).find((k) => (props as any)[k]?.type === 'title') || 'Name'

    // Helper to check a property exists and of a given type
    const hasProp = (key: string, type: string) => props[key] && (props as any)[key].type === type

    // Build properties payload resiliently
    const p: Record<string, any> = {}

    const titleContent = name || email || 'New Lead'
    p[titleKey] = { title: [{ type: 'text', text: { content: titleContent } }] }

    if (email) {
      if (hasProp('Email', 'email')) p['Email'] = { email }
      else if (hasProp('Email', 'rich_text')) p['Email'] = { rich_text: [{ type: 'text', text: { content: email } }] }
    }

    if (phone) {
      if (hasProp('Phone', 'phone_number')) p['Phone'] = { phone_number: phone }
      else if (hasProp('Phone', 'rich_text')) p['Phone'] = { rich_text: [{ type: 'text', text: { content: phone } }] }
    }

    if (source) {
      if (hasProp('Source', 'select')) p['Source'] = { select: { name: String(source) } }
      else if (hasProp('Source', 'multi_select')) p['Source'] = { multi_select: [{ name: String(source) }] }
      else if (hasProp('Source', 'rich_text')) p['Source'] = { rich_text: [{ type: 'text', text: { content: String(source) } }] }
    }

    if (typeof score === 'number' && !Number.isNaN(score)) {
      if (hasProp('Score', 'number')) p['Score'] = { number: score }
      else if (hasProp('Score', 'rich_text')) p['Score'] = { rich_text: [{ type: 'text', text: { content: String(score) } }] }
    }

    // Submitted date if available
    if (hasProp('Submitted', 'date')) p['Submitted'] = { date: { start: new Date().toISOString() } }

    // Dump answers JSON into a Details/Notes field if present
    const answersJson = (() => {
      try {
        return JSON.stringify({ answers, meta }, null, 2)
      } catch {
        return String(answers ?? '')
      }
    })()

    if (hasProp('Details', 'rich_text')) {
      p['Details'] = { rich_text: [{ type: 'text', text: { content: answersJson.slice(0, 1900) } }] }
    } else if (hasProp('Notes', 'rich_text')) {
      p['Notes'] = { rich_text: [{ type: 'text', text: { content: answersJson.slice(0, 1900) } }] }
    }

    // Finally create the lead row
    const created = await notion.pages.create({ parent: { database_id: leadsDb }, properties: p })

    return NextResponse.json({ ok: true, id: created.id })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 })
  }
}

