/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Unicase"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
