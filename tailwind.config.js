/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch