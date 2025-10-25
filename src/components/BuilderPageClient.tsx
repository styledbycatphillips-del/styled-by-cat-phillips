'use client';

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import type { BuilderContent } from '@builder.io/sdk';
import '@/src/builder-register';

export interface BuilderPageClientProps {
  content: BuilderContent | null | undefined;
}

export function BuilderPageClient({ content }: BuilderPageClientProps) {
  const isPreviewing = useIsPreviewing();

  // If Builder content exists or we're in preview mode, render it
  if (content || isPreviewing) {
    return <BuilderComponent model="page" content={content || undefined} />;
  }

  // Fallback UI when no content is available
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-lg text-gray-600">Content not found</p>
    </div>
  );
}
