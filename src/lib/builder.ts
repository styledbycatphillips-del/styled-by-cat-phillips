import { builder } from '@builder.io/react';

// Initialize Builder with your API key
// Set NEXT_PUBLIC_BUILDER_API_KEY in your environment variables
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (!BUILDER_API_KEY) {
  console.warn('NEXT_PUBLIC_BUILDER_API_KEY is not set. Builder.io integration will not work.');
}

builder.init(BUILDER_API_KEY || '');

export { builder };
