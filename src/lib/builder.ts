import { builder } from '@builder.io/react';

// Initialize Builder with your API key
// Replace with your actual Builder.io API key in production
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'YOUR_BUILDER_API_KEY';

builder.init(BUILDER_API_KEY);

export { builder };
