/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md}"],
  presets: [require("tailwindcss/defaultConfig")], // 👈 Enables full utility set
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
