/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00d0ff", // Cyan accent
      },
      keyframes: {
        'shiny-text': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'shiny-text': 'shiny-text 8s infinite linear',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
