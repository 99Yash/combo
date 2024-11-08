import {
  Activity,
  AlertCircle,
  Hash,
  LucideIcon,
  MoreHorizontal,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from 'lucide-react';

export type Item = {
  value: string;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGElement>> | LucideIcon;
  group?: string;
};

export const allItems: Item[] = [
  // Placeholders
  {
    value: 'Select placeholder...',
    label: 'Select placeholder...',
    icon: Hash,
    group: 'Placeholders',
  },
  {
    value: 'Next.js',
    label: 'Next.js',
    icon: Activity,
    group: 'Placeholders',
  },

  // React Frameworks
  {
    value: 'sveltekit',
    label: 'SvelteKit',
    group: 'React Frameworks',
  },
  {
    value: 'sveltelong',
    label: 'SvelteKit is longer than usual',
    group: 'React Frameworks',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
    group: 'React Frameworks',
  },
  {
    value: 'remix',
    label: 'Remix',
    group: 'React Frameworks',
  },
  {
    value: 'astro',
    label: 'Astro',
    group: 'React Frameworks',
  },
  {
    value: 'gatsby',
    label: 'Gatsby',
    group: 'React Frameworks',
  },
  {
    value: 'react',
    label: 'React',
    group: 'React Frameworks',
  },

  // Non-React Frameworks
  {
    value: 'php',
    label: 'PHP',
    group: 'Non-React Frameworks',
  },
  {
    value: 'python',
    label: 'Python',
    group: 'Non-React Frameworks',
  },
  {
    value: 'java',
    label: 'Java',
    group: 'Non-React Frameworks',
  },
  {
    value: 'c',
    label: 'C',
    group: 'Non-React Frameworks',
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
] satisfies Item[];
