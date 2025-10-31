import { builder } from '@/lib/builder';
import BuilderPageClient from '@/components/BuilderPageClient'

export default async function Page() {
  const content = await builder.get('page', { url: '/builder-test' }).toPromise();
  return content
    ? <BuilderPageClient content={content} />
    : <main style={{ padding: 32 }}>No Builder content found for /builder-test.</main>;
}
