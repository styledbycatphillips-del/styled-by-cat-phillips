'use client';

import { Builder } from '@builder.io/react';
import '@/src/lib/builder';
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
