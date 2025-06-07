/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1b26",
        secondary: "#7aa2f7",
        tertiary: "#9aa5ce",
        light: "#c0caf5",
        accent: {
          purple: "#bb9af7",
          green: "#9ece6a",
          orange: "#ff9e64",
          red: "#f7768e",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 