/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
// startup script -> lepší využít npm script
//npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch