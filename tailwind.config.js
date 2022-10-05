module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#161819",
        orange: "#fa782a",
        gray: "rgb(209 213 219)",
        buttonSelect: "#fe5563",
        buttonSelectLight: "#fe6798",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
