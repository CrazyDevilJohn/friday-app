/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        prmaryWhite: "#f6f6f8",
        darkText: "#111",
      },
      height: {
        250: "250px",
        370: "370px",
        300: "300px",
      },
      width: {
        250: "250px",
        370: "370px",
        300: "300px",
      },
    },
  },
  plugins: [],
};
