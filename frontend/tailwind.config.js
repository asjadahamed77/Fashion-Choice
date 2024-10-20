/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursiveFont': ['"Dancing Script"', 'cursive'],
        'headingFont': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
