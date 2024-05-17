/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'esteban': ["Esteban", 'serif'],
        'work-sans': ["Work Sans", 'sans-serif']
      },
      colors: {
        primary: '#f1f2ed',
        seconday: '#f0d32d',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}