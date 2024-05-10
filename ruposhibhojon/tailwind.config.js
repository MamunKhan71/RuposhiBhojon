/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary" : "#F68712",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "sunset"]
  }
}