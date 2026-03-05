/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emt-blue': '#0072CE',
        'emt-dark': '#003B73',
        'emt-light': '#E8F4FD',
        'emt-green': '#2ECC71',
        'emt-orange': '#F39C12',
        'emt-red': '#E74C3C',
        'emt-text': '#2C3E50',
        'emt-bg': '#F8F9FA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
