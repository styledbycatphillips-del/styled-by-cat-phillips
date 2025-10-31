# Builder.io Integration — Design System Guide

This document tells Builder's AI and future contributors how to use the project's design system, where components live, and the conventions to follow when creating or editing pages in Builder.

Use the short modal copy in the Builder "Setup New Project" modal for quick instructions. Keep this file as the canonical reference.

---

## Locations

- React components: `components/` and `src/components/`
- Builder registration: `src/builder-register.tsx`
- Pages that use components: `app/` (App Router)

## Purpose

Prefer existing, registered components when assembling pages. The Builder AI should reuse our components and tokens instead of inventing new low‑level layout primitives when possible.

## Design tokens & scales

- Colors: use semantic names (primary, accent, neutral, success, warning). Prefer CSS variables (e.g., `--color-primary`).
- Typography: use named scales H1, H2, H3, body, caption. Example sizes (desktop): H1 48px, H2 36px, H3 24px, body 16px.
- Spacing: modular scale (4, 8, 12, 16, 24, 32). Use multiples for margins/padding.
- Breakpoints: sm (≤640px), md (641–1024px), lg (1025–1440px), xl (1441+).

## Component rules

- Use registered components first. Example: `Button` with props `{ variant: 'primary'|'secondary'|'ghost', size: 'sm'|'md'|'lg' }`.
- Title usage: H1 only on the main/home page. Interior pages should use H2 for primary titles.
- Images: always include `alt` text. Preferred hero aspect ratios: 16:9 or 4:3. Provide retina/2x sizes where possible.
- Forms: use server actions and API endpoints for capture — prefer `app/actions/writeLead.ts` or POST to `/api/quiz` for quiz submissions.
- Links: external links must open in a new tab and include `rel="noopener noreferrer"`.

## Accessibility

- All interactive elements must be keyboard accessible.
- Aim for color contrast ≥ 4.5:1 for body text and ≥ 3:1 for large text.
- Icon-only buttons must include `aria-label` or `aria-labelledby`.
- Maintain visible focus outlines (don’t remove focus styles unless replaced with an accessible alternative).

## Data & runtime considerations

- Do not require server-only secrets inside client components. Use server routes/actions for operations that need secrets.
- Prefer binding Builder slots to our data models or use API endpoints rather than embedding private keys.
- Preview deployments may be protected — use the Vercel preview access (or a bypass token) for automated tests.

## What not to do

- Don’t create new low-level layout components when a registered higher-level component exists.
- Avoid committing large binary assets to the repo (fonts/images) — host them via CDN or `public/` combined with `.gitignore` rules for local development.
- Don’t change global CSS variables without approval from design/dev.

## Examples

- Primary CTA (Book an Executive Audit)

  Component: `Button`

  Props: `{ variant: 'primary', label: 'Book an Executive Audit', href: '/contact' }`

- Hero block

  Component: `Hero`

  Props: `{ eyebrow, title (H1 on home), description, image (16:9, alt) }`

## Quick integration notes for builders

- If you need to create a new component, register it through `src/builder-register.tsx` so Builder's editor knows how to render and configure it.
- If a component needs runtime data, prefer providing a binding to an API model or a simple `/api/*` endpoint — avoid embedding secrets.

## Contact

If anything is unclear, contact the project owner or leave a comment in the PR so we can provide guidance on component choices or token usage.

---

This file may be included in the repository (committed) and referenced in the Builder project setup modal for the team to use as a canonical guide.
