/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
    amber: {
      50: "#fffbeb",
      100: "#fff4c6",
      200: "#ffe888",
      300: "#ffd64a",
      400: "#ffc017",
      500: "#f9a107",
      600: "#dd7902",
      700: "#b75406",
      800: "#94400c",
      900: "#7a350d",
      950: "#461b02",
    },
  },
  plugins: [],
};
