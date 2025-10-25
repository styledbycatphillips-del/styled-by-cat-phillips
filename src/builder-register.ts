'use client';

import { Builder } from '@builder.io/react';
import { builder } from '@/src/lib/builder';
import { Hero } from '@/src/components/Hero';

// Register the Hero component with Builder.io
Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Welcome',
      helperText: 'The main heading text',
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'Default subtitle',
      helperText: 'The subtitle text below the heading',
    },
  ],
});

// Export builder instance for use in other files
export { builder };
