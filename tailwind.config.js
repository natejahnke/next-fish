module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#ff688a",
          DEFAULT: "#ff2052",
        }
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}