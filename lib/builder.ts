import { builder } from '@builder.io/sdk';

const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (!key) throw new Error('Missing NEXT_PUBLIC_BUILDER_API_KEY in .env.local');

builder.init(key);
export { builder };
