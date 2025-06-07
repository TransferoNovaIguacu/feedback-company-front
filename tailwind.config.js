/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <- ESSA LINHA É FUNDAMENTAL!
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#895df6',
        secondary: '#3f80f6',
      },
    },
  },
  plugins: [],
}
