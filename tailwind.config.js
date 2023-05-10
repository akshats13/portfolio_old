/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        montserrat: ["Monsterrat", "sans-serif"],
      },
      textColor : {
        primary: "#ff0165",
        menu: "281236"
      },
      backgroundColor : {
        menu: "ff0ac2",
      }
    },
  },
  plugins: [],
}