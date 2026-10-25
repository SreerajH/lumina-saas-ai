/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'lm-bg': '#f3efe6',
        'lm-surface': '#fbf9f4',
        'lm-surface2': '#e8e2d4',
        'lm-accent': '#e5432a',
        'lm-accent2': '#b8321c',
        'lm-accent3': '#2f5d4e',
        'lm-text': '#17160f',
        'lm-muted': '#6b665a',
      },
      fontFamily: {
        display: ['Instrument Serif', 'serif'],
        body: ['Instrument Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      letterSpacing: {
        tight2: '-0.02em',
        tight3: '-0.03em',
        tight4: '-0.04em',
      },
    },
  },
  plugins: [],
};
