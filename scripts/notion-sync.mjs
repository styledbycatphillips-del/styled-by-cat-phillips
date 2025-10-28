import { config as dotenvConfig } from 'dotenv'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { Client } from '@notionhq/client'

// Load env from .env.local if present, otherwise .env
if (existsSync('.env.local')) {
  dotenvConfig({ path: '.env.local' })
} else {
  dotenvConfig()
}

const NOTION_SECRET = process.env.NOTION_SECRET || process.env.NOTION_TOKEN || process.env.NOTION_API_KEY
const DATABASE_ID = process.env.NOTION_DATABASE_ID

if (!NOTION_SECRET) {
  console.error('Missing NOTION_SECRET (or NOTION_TOKEN/NOTION_API_KEY)')
  process.exit(1)
}
if (!DATABASE_ID) {
  console.error('Missing NOTION_DATABASE_ID (set it in .env.local or CI secrets)')
  process.exit(1)
}

const notion = new Client({ auth: NOTION_SECRET })

const OUT_DIR = path.join(process.cwd(), 'content', 'notion')
mkdirSync(OUT_DIR, { recursive: true })

function slugify(str, fallback) {
  const base = (str || fallback || '').toString().toLowerCase().trim()
  return base
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function rtToMd(rich) {
  if (!Array.isArray(rich)) return ''
  return rich
    .map((r) => {
      const { annotations = {}, plain_text = '', href } = r
      let txt = plain_text || ''
      if (!txt) return ''
      if (annotations.code) txt = '`' + txt + '`'
      if (annotations.bold) txt = '**' + txt + '**'
      if (annotations.italic) txt = '_' + txt + '_'
      if (annotations.strikethrough) txt = '~~' + txt + '~~'
      // underline is not standard markdown; ignore for now
      if (href) txt = '[' + txt + '](' + href + ')'
      return txt
    })
    .join('')
}

async function fetchAllPages(databaseId) {
  const pages = []
  let cursor
  do {
    const res = await notion.databases.query({ database_id: databaseId, page_size: 100, start_cursor: cursor })
    pages.push(...res.results)
    cursor = res.has_more ? res.next_cursor : undefined
  } while (cursor)
  return pages
}

async function fetchAllBlocks(blockId) {
  const blocks = []
  let cursor
  do {
    const res = await notion.blocks.children.list({ block_id: blockId, page_size: 100, start_cursor: cursor })
    blocks.push(...res.results)
    cursor = res.has_more ? res.next_cursor : undefined
  } while (cursor)
  return blocks
}

async function blocksToMarkdown(blocks, indent = 0) {
  const lines = []
  const indentStr = '  '.repeat(indent)
  for (const b of blocks) {
    const t = b.type
    const data = b[t]
    if (!data) continue
    if (t === 'paragraph') {
      const txt = rtToMd(data.rich_text)
      if (txt) lines.push(indentStr + txt + '\n')
    } else if (t === 'heading_1' || t === 'heading_2' || t === 'heading_3') {
      const level = t === 'heading_1' ? '#' : t === 'heading_2' ? '##' : '###'
      lines.push(`${level} ${rtToMd(data.rich_text)}\n`)
    } else if (t === 'bulleted_list_item') {
      lines.push(indentStr + '- ' + rtToMd(data.rich_text) + '\n')
      if (b.has_children) {
        const children = await fetchAllBlocks(b.id)
        lines.push(await blocksToMarkdown(children, indent + 1))
      }
    } else if (t === 'numbered_list_item') {
      lines.push(indentStr + '1. ' + rtToMd(data.rich_text) + '\n')
      if (b.has_children) {
        const children = await fetchAllBlocks(b.id)
        lines.push(await blocksToMarkdown(children, indent + 1))
      }
    } else if (t === 'to_do') {
      const chk = data.checked ? 'x' : ' '
      lines.push(indentStr + `- [${chk}] ` + rtToMd(data.rich_text) + '\n')
    } else if (t === 'quote') {
      lines.push(indentStr + '> ' + rtToMd(data.rich_text) + '\n')
    } else if (t === 'code') {
      const lang = data.language || ''
      lines.push('```' + lang + '\n' + (data.rich_text?.map((r) => r.plain_text).join('') || '') + '\n```\n')
    } else if (t === 'callout') {
      const emoji = data.icon?.emoji ? data.icon.emoji + ' ' : ''
      lines.push(indentStr + '> ' + emoji + rtToMd(data.rich_text) + '\n')
    } else if (t === 'toggle') {
      lines.push(indentStr + '<details><summary>' + rtToMd(data.rich_text) + '</summary>\n')
      if (b.has_children) {
        const children = await fetchAllBlocks(b.id)
        lines.push(await blocksToMarkdown(children, indent + 1))
      }
      lines.push(indentStr + '</details>\n')
    } else if (t === 'divider') {
      lines.push('\n---\n\n')
    } else if (t === 'image') {
      const cap = rtToMd(data.caption || [])
      const url = data.type === 'external' ? data.external.url : data.file.url
      lines.push(`![$${cap || ''}](${url})\n`)
    } else if (t === 'bookmark' || t === 'embed' || t === 'video' || t === 'file' || t === 'pdf') {
      const url = data.url || data.external?.url || data.file?.url || ''
      if (url) lines.push(url + '\n')
    } else if (t === 'table') {
      // Simplify: render as plain rows
      if (b.has_children) {
        const rows = await fetchAllBlocks(b.id)
        for (const row of rows) {
          if (row.type === 'table_row') {
            const cells = row.table_row.cells || []
            const txt = cells.map((cell) => rtToMd(cell)).join(' | ')
            lines.push('| ' + txt + ' |\n')
          }
        }
      }
    } else {
      // Fallback: skip unsupported block types
    }
  }
  return lines.join('')
}

function extractTitleFromProperties(props) {
  for (const [key, val] of Object.entries(props || {})) {
    if (val?.type === 'title') {
      return (val.title || []).map((r) => r.plain_text || '').join('').trim()
    }
  }
  return ''
}

function fmEscape(str) {
  return String(str || '').replace(/"/g, '\\"')
}

async function run() {
  console.log('[notion-sync] Querying database...')
  const pages = await fetchAllPages(DATABASE_ID)
  console.log(`[notion-sync] Found ${pages.length} pages`)

  for (const page of pages) {
    if (page.archived) continue
    const id = page.id
    const created = page.created_time
    const edited = page.last_edited_time
    const url = page.url
    const title = extractTitleFromProperties(page.properties) || id
    const datePrefix = (created || '').slice(0, 10)
    const slug = slugify(title, id)
    const filename = `${datePrefix ? datePrefix + '-' : ''}${slug}--${id.replace(/-/g, '')}.md`
    const filepath = path.join(OUT_DIR, filename)

    // Fetch content blocks
    const blocks = await fetchAllBlocks(id)
    const mdBody = await blocksToMarkdown(blocks)

    const fm = [
      '---',
      `id: "${fmEscape(id)}"`,
      `title: "${fmEscape(title)}"`,
      `url: "${fmEscape(url)}"`,
      `created: "${fmEscape(created)}"`,
      `last_edited: "${fmEscape(edited)}"`,
      '---',
      '',
    ].join('\n')

    writeFileSync(filepath, fm + mdBody, 'utf-8')
    console.log('[notion-sync] Wrote', path.relative(process.cwd(), filepath))
  }

  console.log('[notion-sync] Done')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})

