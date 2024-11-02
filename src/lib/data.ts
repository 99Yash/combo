import {
  Activity,
  AlertCircle,
  Hash,
  MoreHorizontal,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from 'lucide-react';

export const frameworks = [
  {
    value: 'sveltekit',
    label: 'SvelteKit',
    group: 'react',
  },
  {
    value: 'sveltelong',
    label: 'SvelteKit is longer than usual',
    group: 'react',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
    group: 'react',
  },
  {
    value: 'remix',
    label: 'Remix',
    group: 'react',
  },
  {
    value: 'astro',
    label: 'Astro',
    group: 'react',
  },
  {
    value: 'gatsby',
    label: 'Gatsby',
    group: 'react',
  },
  {
    value: 'react',
    label: 'React',
    group: 'react',
  },
] as const;

export const placeholders = [
  {
    value: 'Select placeholder...',
    label: 'Select placeholder...',
    icon: Hash,
  },
  {
    value: 'Next.js',
    label: 'Next.js',
    icon: Activity,
  },
] as const;

export const priorities = [
  {
    value: 'none',
    label: 'No priority',
    icon: MoreHorizontal,
  },
  {
    value: 'low',
    label: 'Low',
    icon: SignalLow,
  },
  {
    value: 'medium',
    label: 'Medium',
    icon: SignalMedium,
  },
  {
    value: 'high',
    label: 'High',
    icon: SignalHigh,
  },
  {
    value: 'urgent',
    label: 'Urgent',
    icon: AlertCircle,
  },
] as const;
