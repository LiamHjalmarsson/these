/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        'center-top': 'center top',
      },
      colors: {
        primary: "#19140F",
        secondary: "#6F6A64",
        accent: "00FFFF",
        red: "#F5B7B7"
      },
      boxShadow: {
        middle: "0 0px 8px -2px",
      },
      maxWidth: {
        xs: "450"
      }
    },
  },
  plugins: [],
}