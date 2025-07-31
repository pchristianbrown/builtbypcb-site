/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md}"],
  presets: [require("tailwindcss/preset")], // ✅ enables all default utilities
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pcb: {
          DEFAULT: '#0f172a',
          accent: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
};
