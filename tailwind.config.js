/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ffefd5",
      },
      letterSpacing: {
        lg: "0.50em",
      },
    },
  },
  plugins: [require("daisyui")],
};
