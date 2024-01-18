/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greenbox": "#1F2B21", 
        "mypink": "#FFBBDC"
      }
    },
  },
  plugins: [],
}

