/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      white: "white",
      none: "none"
    },
    borderWidth: {
      1: "1px",
    },
    fontFamily: {
      quickstand: ['Quicksand', 'sans-serif']
    },
    gridTemplateRows: {
      7: "repeat(7,minmax(0,1fr))",
      8: "repeat(8,minmax(0,1fr))",
      5: "repeat(5,minmax(0,1fr))",

    }
  },
  plugins: [],
}