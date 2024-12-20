/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#364A63",
        secondary: "#8091A7",
        purple: "#6576FF",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}

