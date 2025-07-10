/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        pcb: {
          DEFAULT: '#0f172a', // Dark navy
          accent: '#22d3ee',  // Cyan accent
        },
      },
    },
  },
  plugins: [],
};
