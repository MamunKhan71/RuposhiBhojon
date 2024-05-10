/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
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
  plugins: [require("daisyui"), require('preline/plugin'),],
  daisyui: {
    themes: ["light", "sunset"]
  }
}