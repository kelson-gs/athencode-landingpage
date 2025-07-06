import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Garanta que escaneia todos os arquivos da sua app
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        slate: {
          800: '#1e293b',
          600: '#475569',
          50:  '#f8fafc',
        },
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // Títulos principais
        '5xl': ['3rem', { lineHeight: '1' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
      },
      spacing: {
        '20': '5rem',     // py-20
        '16': '4rem',     // mb-16
        '8': '2rem',      // gap-8
        '6': '1.5rem',    // space-y-6
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'bounce': 'bounce 1s infinite',
      },
      transitionProperty: {
        'all': 'all',
      },
      translate: {
        '-2': '-0.5rem',
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
export default config
