Builder.io Integration

This branch integrates Builder.io into the Next.js App Router project with:
- Client-safe component registration (`src/builder-register.ts`)
- Example custom component (`src/components/Hero.tsx`)
- Client renderer for Builder content (`src/components/BuilderPageClient.tsx`)
- Dynamic catch-all route for Builder pages (`app/builder/[...page]/page.tsx`)
- Layout import to ensure registration side effects are applied (`app/layout.tsx`)

Setup
- Install the React SDK: `npm install @builder.io/react`
- Create `.env.local` from `.env.local.example` and set `NEXT_PUBLIC_BUILDER_API_KEY` to your public Builder API key.
- Start the dev server: `npm run dev`
- Visit `/builder` to render the Builder catch-all route. Create pages in Builder with URLs matching your app (e.g. `/`, `/about`).

Notes
- Builder is initialized in `lib/builder.ts` using `NEXT_PUBLIC_BUILDER_API_KEY`. Keep this file unchanged.
- Custom components are registered in `src/builder-register.ts`. The registration only loads `@builder.io/react` in the browser and avoids server-only import issues.
- `app/layout.tsx` imports `@/builder-register` to make registration side effects available across the app.

