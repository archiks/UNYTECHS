/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A0A0A',     // Midnight black background
          teal: '#D4AF37',     // Champagne gold accent (token kept for back-compat)
          purple: '#722F37',   // Deep burgundy / wine
          light: '#141414',    // Dark card surface
          white: '#FFFFFF',
          cream: '#F5F0E8',    // Ivory / cream
          gold: '#D4AF37',     // Champagne gold (alias)
          wine: '#722F37',     // Burgundy alias
          rose: '#C97B63',     // Dusty rose / terracotta accent
          ink:  '#1A1A1A',     // Slightly lifted black
        },
        solana: {
          green: '#D4AF37',
          purple: '#722F37',
          dark: '#141414',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
