/** @type {import('tailwindcss').Config} */
/*export default {
  content: [
    "./index.html",
    "./src/**//*{js,jx,ts,tsx"*/
  /*],
  theme: {
    extend: {},
  },
  plugins: [],
}*/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'reverse-spin': 'reverse-spin 12s linear infinite',
        'text-breathe': 'text-breathe 4s ease-in-out infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        'text-breathe': {
          '0%, 100%': { transform: 'scale(1) translateY(0)', opacity: 1 },
          '50%': { transform: 'scale(0.85) translateY(10px)', opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
}

