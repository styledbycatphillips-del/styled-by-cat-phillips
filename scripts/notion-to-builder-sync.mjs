#!/usr/bin/env node
// Load env: prefer .env.local, fallback to .env
import fs from 'node:fs'
import path from 'node:path'
const root = process.cwd()
const envLocal = path.join(root, '.env.local')
if (fs.existsSync(envLocal)) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: envLocal, override: true })
} else {
  // default dotenv loader (will load .env if present)
  await import('dotenv/config')
}

import fetch from 'node-fetch'

const NOTION_TOKEN = process.env.NOTION_TOKEN || process.env.NOTION_SECRET
const NOTION_SOURCE_ID = process.env.NOTION_SOURCE_ID || process.env.NOTION_DATABASE_ID
const BUILDER_WRITE_KEY = process.env.BUILDER_WRITE_KEY
const BUILDER_MODEL = process.env.BUILDER_MODEL || 'page'
const BUILDER_SLUG = process.env.BUILDER_SLUG || 'homepage'
const BUILDER_PUBLISH = String(process.env.BUILDER_PUBLISH ?? 'true') === 'true'

if (!NOTION_TOKEN || !NOTION_SOURCE_ID || !BUILDER_WRITE_KEY || !BUILDER_SLUG) {
  console.error('Missing env: NOTION_TOKEN/NOTION_SECRET, NOTION_SOURCE_ID/NOTION_DATABASE_ID, BUILDER_WRITE_KEY, BUILDER_SLUG')
  process.exit(1)
}

const NOTION_API = 'https://api.notion.com/v1'
const headers = {
  Authorization: `Bearer ${NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json',
}

async function getNotionPayload() {
  // Try page first
  const pageRes = await fetch(`${NOTION_API}/pages/${NOTION_SOURCE_ID}`, { headers })
  if (pageRes.ok) return normalizeFromPage(await pageRes.json())

  // Else treat as database → grab latest by last_edited_time
  const dbRes = await fetch(`${NOTION_API}/databases/${NOTION_SOURCE_ID}/query`, {
    method: 'POST',
    headers,
    // Use timestamp-based sort for last_edited_time (Notion API expects `timestamp` here)
    body: JSON.stringify({ page_size: 1, sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }] }),
  })
  if (!dbRes.ok) throw new Error(await dbRes.text())
  const db = await dbRes.json()
  const row = db.results?.[0]
  if (!row) {
    throw new Error(
      `No rows found in database (NOTION_SOURCE_ID=${NOTION_SOURCE_ID}). ` +
        'Ensure this ID points to a Notion database with at least one row and that the integration token has access.'
    )
  }
  return normalizeFromPage(row)
}

function richTextToPlain(rt = []) {
  if (!Array.isArray(rt)) return ''
  return rt.map((b) => b?.plain_text ?? '').join('')
}

function normalizeFromPage(page) {
  const props = page.properties || {}
  const titleProp = Object.values(props).find((p) => p?.type === 'title')
  const title = titleProp ? richTextToPlain(titleProp.title) : 'Untitled'

  // body: common property names: body, description, content
  const bodyProp = props.body?.rich_text || props.description?.rich_text || props.content?.rich_text || null
  const body = bodyProp ? richTextToPlain(bodyProp) : ''

  const heroImage =
    (props.hero_image?.files?.[0]?.file?.url) || (props.hero_image?.files?.[0]?.external?.url) || ''

  const ctaLabel = props.cta_label?.rich_text ? richTextToPlain(props.cta_label.rich_text) : ''
  const ctaHref = props.cta_href?.url || ''

  return {
    title,
    body,
    heroImage,
    cta: { label: ctaLabel, href: ctaHref },
  }
}

async function upsertBuilderContent(content) {
  const endpoint = `https://builder.io/api/v1/write/${encodeURIComponent(BUILDER_MODEL)}`
  const res = await fetch(endpoint, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${BUILDER_WRITE_KEY}` },
    body: JSON.stringify({
      query: { 'data.slug': BUILDER_SLUG },
      data: { slug: BUILDER_SLUG, ...content, _syncedAt: new Date().toISOString() },
      upsert: true,
      options: { publish: BUILDER_PUBLISH },
    }),
  })
  if (!res.ok) throw new Error(`Builder write failed: ${await res.text()}`)
  return res.json()
}

(async () => {
  try {
    const payload = await getNotionPayload()
    const result = await upsertBuilderContent(payload)
    console.log('Synced', { slug: BUILDER_SLUG, model: BUILDER_MODEL, publish: BUILDER_PUBLISH })
    console.log(JSON.stringify(result, null, 2))
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
