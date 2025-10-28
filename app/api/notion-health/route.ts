import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

export async function GET() {
  const secret = process.env.NOTION_SECRET
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'Missing NOTION_SECRET env var' },
      { status: 500 }
    )
  }

  try {
    const notion = new Client({ auth: secret })

    // Simple calls that validate the token without exposing data
    const users = await notion.users.list({ page_size: 1 })
    const search = await notion.search({ page_size: 1 })

    return NextResponse.json({
      ok: true,
      users_seen: users?.results?.length ?? 0,
      search_results: search?.results?.length ?? 0,
    })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || String(e) },
      { status: 500 }
    )
  }
}

