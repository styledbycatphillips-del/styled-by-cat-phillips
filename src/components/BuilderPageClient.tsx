"use client"

import React from 'react'
import { BuilderComponent } from '@builder.io/react'
import type { BuilderContent } from '@builder.io/sdk'

// Registration is mounted once in the app layout

export type BuilderPageClientProps = {
  content: BuilderContent | null
}

export default function BuilderPageClient({ content }: BuilderPageClientProps) {
  return <BuilderComponent model="page" content={content || undefined} />
}
