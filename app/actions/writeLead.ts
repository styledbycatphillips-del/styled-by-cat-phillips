import { Client } from '@notionhq/client'

export type LeadPayload = {
  name?: string
  email?: string
  phone?: string
  source?: string
  score?: number
  answers?: unknown
  meta?: Record<string, unknown>
}

function normalizeId(id: string | undefined | null) {
  if (!id) return ''
  const s = id.replace(/[^a-fA-F0-9]/g, '')
  if (s.length !== 32) return id
  return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20)}`
}

export async function writeLead(payload: LeadPayload) {
  const token = process.env.NOTION_SECRET || process.env.NOTION_TOKEN || process.env.NOTION_API_KEY
  const dbRaw = process.env.NOTION_LEADS_DB_ID
  const dbId = normalizeId(dbRaw)

  if (!token) throw new Error('Missing NOTION_SECRET/NOTION_TOKEN')
  if (!dbId) throw new Error('Missing NOTION_LEADS_DB_ID')

  const notion = new Client({ auth: token })

  const { name = '', email = '', phone = '', source = 'quiz', score, answers, meta = {} } = payload || {}

  // Retrieve DB to detect available properties and types
  const db = await notion.databases.retrieve({ database_id: dbId })
  const props = (db as any).properties || {}

  // Find title property key
  const titleKey = Object.keys(props).find((k) => props[k]?.type === 'title') || 'Name'
  const hasProp = (key: string, type: string) => props[key] && props[key].type === type

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
  if (hasProp('Submitted', 'date')) p['Submitted'] = { date: { start: new Date().toISOString() } }

  const detailsText = (() => {
    try {
      return JSON.stringify({ answers, meta }, null, 2).slice(0, 1900)
    } catch {
      return String(answers ?? '')
    }
  })()
  if (detailsText) {
    if (hasProp('Details', 'rich_text')) p['Details'] = { rich_text: [{ type: 'text', text: { content: detailsText } }] }
    else if (hasProp('Notes', 'rich_text')) p['Notes'] = { rich_text: [{ type: 'text', text: { content: detailsText } }] }
  }

  const created = await notion.pages.create({ parent: { database_id: dbId }, properties: p })
  return created
}

