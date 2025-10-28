import { builder } from '@/lib/builder'
import BuilderPageClient from '@/components/BuilderPageClient'

type PageParams = { params: { slug?: string[] } }

export default async function BuilderCatchAll({ params }: PageParams) {
  const urlPath = '/' + (params.slug?.join('/') ?? '')
  const content = await builder.get('page', { url: urlPath }).toPromise()
  if (!content) return null
  return <BuilderPageClient content={content} />
}

