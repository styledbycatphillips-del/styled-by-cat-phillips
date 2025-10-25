# Builder.io Integration

This project includes Builder.io integration for visual content editing.

## Setup

1. Get your Builder.io API key from [Builder.io](https://www.builder.io)
2. Add it to your environment variables:
   ```
   NEXT_PUBLIC_BUILDER_API_KEY=your_api_key_here
   ```

## Files

- `src/lib/builder.ts` - Initializes Builder.io with your API key
- `src/builder-register.ts` - Registers custom components for use in Builder's visual editor
- `src/components/Hero.tsx` - Example Hero component that can be used in Builder
- `src/components/BuilderPageClient.tsx` - Client component for rendering Builder content

## Usage

To use Builder.io content in your pages:

```tsx
import { BuilderPageClient } from '@/src/components/BuilderPageClient';
import { builder } from '@builder.io/react';

export default async function Page() {
  // Fetch content from Builder.io
  const content = await builder
    .get('page', {
      url: '/your-page-url',
    })
    .promise();

  return <BuilderPageClient content={content} />;
}
```

## Registered Components

- **Hero**: A hero section component with title and subtitle props
