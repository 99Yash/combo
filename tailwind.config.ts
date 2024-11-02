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
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
      },
      colors: {
        gray: {
          25: 'rgb(var(--gray-25))',
          50: 'rgb(var(--gray-50))',
          100: 'rgb(var(--gray-100))',
          200: 'rgb(var(--gray-200))',
          300: 'rgb(var(--gray-300))',
          400: 'rgb(var(--gray-400))',
          500: 'rgb(var(--gray-500))',
          600: 'rgb(var(--gray-600))',
          700: 'rgb(var(--gray-700))',
          800: 'rgb(var(--gray-800))',
          900: 'rgb(var(--gray-900))',
          950: 'rgb(var(--gray-950))',
          1000: 'rgb(var(--gray-1000))',
        },
        purple: {
          50: 'rgb(var(--purple-50))',
          100: 'rgb(var(--purple-100))',
          200: 'rgb(var(--purple-200))',
          300: 'rgb(var(--purple-300))',
          400: 'rgb(var(--purple-400))',
          500: 'rgb(var(--purple-500))',
          600: 'rgb(var(--purple-600))',
          700: 'rgb(var(--purple-700))',
          800: 'rgb(var(--purple-800))',
          900: 'rgb(var(--purple-900))',
          950: 'rgb(var(--purple-950))',
        },
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
