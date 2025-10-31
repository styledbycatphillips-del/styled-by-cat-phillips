import { BuilderComponent } from '@builder.io/react';
import { builder } from '../builder';

export async function getStaticProps() {
  const content = await builder.get('page', { url: '/builder-test' }).toPromise();
  return { props: { content: content || null }, revalidate: 5 };
}

export default function BuilderTest({ content }: { content: any }) {
  return content
    ? <BuilderComponent model="page" content={content} />
    : <main style={{ padding: 32 }}>No Builder content found for /builder-test.</main>;
}
