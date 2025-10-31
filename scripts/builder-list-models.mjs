#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
const root = process.cwd()
const envLocal = path.join(root, '.env.local')
if (fs.existsSync(envLocal)) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: envLocal, override: true })
} else {
  await import('dotenv/config')
}

import fetch from 'node-fetch'

const KEY = process.env.BUILDER_WRITE_KEY
if (!KEY) {
  console.error('Missing BUILDER_WRITE_KEY in env')
  process.exit(1)
}

const res = await fetch('https://builder.io/api/v1/models', {
  headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
})
const text = await res.text()
try {
  const json = JSON.parse(text)
  console.log('status', res.status)
  console.dir(json, { depth: 2 })
} catch (e) {
  console.log('status', res.status)
  console.log(text)
}
