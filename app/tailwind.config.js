/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#f6f6f8",
        primaryOrange: "#FFB800",
        darkText: "#555",
      },
      height: {
        70: "70px",
        110: "110px",
        200: "200px",
        250: "250px",
        370: "370px",
        300: "300px",
      },
      width: {
        70: "70px",
        110: "100px",
        200: "200px",
        250: "250px",
        370: "370px",
        300: "300px",
      },
    },
  },
  plugins: [],
};
