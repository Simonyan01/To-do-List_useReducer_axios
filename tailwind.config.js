/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        120: "120px",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
    plugins: [],
  },
};
