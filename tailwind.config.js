/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,astro,ts}'],
  theme: {
    extend: {
    colors: {
      primary: '#1e40af',
      secondary: '#facc15',
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
    },
  },
  },
  plugins: [require('@tailwindcss/typography')],
};
