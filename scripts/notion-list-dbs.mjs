import { config as dotenvConfig } from 'dotenv'
import { existsSync } from 'fs'
import { Client } from '@notionhq/client'

// Load env from .env.local if present, otherwise .env
if (existsSync('.env.local')) {
  dotenvConfig({ path: '.env.local' })
} else {
  dotenvConfig()
}

async function main() {
  const secret = process.env.NOTION_SECRET
  if (!secret) {
    console.error('NOTION_SECRET is not set')
    process.exit(1)
  }

  const notion = new Client({ auth: secret })

  const results = []
  let next
  do {
    const res = await notion.search({
      filter: { property: 'object', value: 'database' },
      page_size: 25,
      start_cursor: next,
    })
    for (const d of res.results) {
      const id = d.id
      // database titles are in d.title (array of rich_text)
      const title = (d.title?.[0]?.plain_text || d.title?.[0]?.text?.content || '').trim()
      results.push({ id, title })
    }
    next = res.has_more ? res.next_cursor : undefined
  } while (next)

  // Sort by title for readability
  results.sort((a, b) => a.title.localeCompare(b.title))
  console.log(JSON.stringify({ count: results.length, databases: results }, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

