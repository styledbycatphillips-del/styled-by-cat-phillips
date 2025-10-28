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
  const dbId = process.env.NOTION_DATABASE_ID

  try {
    const notion = new Client({ auth: secret })

    // Basic sanity checks
    const users = await notion.users.list({ page_size: 1 })
    const search = await notion.search({ page_size: 1 })

    let dbCheck = null
    if (dbId) {
      try {
        // Attempt a retrieve or query limited page size
        dbCheck = await notion.databases.retrieve({ database_id: dbId })
      } catch (e) {
        dbCheck = { error: (e?.message || String(e)).slice(0, 200) }
      }
    }

    console.log(JSON.stringify({
      ok: true,
      users_seen: users?.results?.length ?? 0,
      search_results: search?.results?.length ?? 0,
      database_check: dbCheck ? (dbCheck.id ? 'ok' : dbCheck) : 'skipped',
    }, null, 2))
  } catch (e) {
    console.error(JSON.stringify({ ok: false, error: e?.message || String(e) }, null, 2))
    process.exit(1)
  }
}

main()
