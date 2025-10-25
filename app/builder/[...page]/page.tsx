import React from 'react'
import { notFound } from 'next/navigation'
import { builder } from '@/lib/builder'
import BuilderPageClient from '@/components/BuilderPageClient'
import '@/builder-register'

type PageParams = {
  params: { page?: string[] }
}

export default async function BuilderCatchAllPage({ params }: PageParams) {
  const segments = params?.page ?? []
  const path = '/' + segments.join('/')

  const content = await builder
    .get('page', {
      userAttributes: {
        url: segments.length === 0 ? '/' : path,
      },
    })
    .promise()

  if (!content) {
    // Fallback if no Builder content is found
    notFound()
  }

  return <BuilderPageClient content={content} />
}

