/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        f1: "#31A0FE",
        f2: "#23856D",
        f3: "#EC5C2E"

      },
      backgroundImage: {
        bg1: "url('../img/cp-bg.png')",
        bg2 : "url('../img/cp-bg-2.png')"
      }
    },
  },
  plugins: [],
}

