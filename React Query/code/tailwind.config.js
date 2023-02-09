/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.8s linear infinite',
      },
    },
  },
  plugins: [],
}
