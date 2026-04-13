/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'lm-bg': '#050508',
        'lm-surface': '#0d0d14',
        'lm-surface2': '#13131e',
        'lm-accent': '#7c6fff',
        'lm-accent2': '#c084fc',
        'lm-accent3': '#38bdf8',
        'lm-text': '#f0f0f8',
        'lm-muted': '#7a7a9a',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
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
