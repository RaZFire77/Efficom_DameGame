module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 10 row grid
        10: "repeat(10, minmax(0, 1fr))",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
