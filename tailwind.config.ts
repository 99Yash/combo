import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'rgb(var(--gray-200) / <alpha-value>)',
        input: 'rgb(var(--gray-200) / <alpha-value>)',
        ring: 'rgb(var(--gray-200) / <alpha-value>)',
        background: 'rgb(var(--gray-25) / <alpha-value>)',
        foreground: 'rgb(var(--gray-1000) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--purple-600) / <alpha-value>)',
          foreground: 'rgb(var(--gray-25) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--gray-100) / <alpha-value>)',
          foreground: 'rgb(var(--gray-1000) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--gray-900) / <alpha-value>)',
          foreground: 'rgb(var(--gray-25) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--gray-100) / <alpha-value>)',
          foreground: 'rgb(var(--gray-600) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--gray-100) / <alpha-value>)',
          foreground: 'rgb(var(--gray-1000) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--gray-25) / <alpha-value>)',
          foreground: 'rgb(var(--gray-1000) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'rgb(var(--gray-25) / <alpha-value>)',
          foreground: 'rgb(var(--gray-1000) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
} satisfies Config;

export default config;
