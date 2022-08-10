/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// startup script -> lepší využít npm script
//npx tailwindcss -i ./styles/input.css -o ./st/output.css --watch