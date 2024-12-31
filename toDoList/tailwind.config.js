/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 5px 0 #6c63ff",
      },
      colors: {
        black: "#252525",
        purple: " #6c63ff",
        white: "#f7f7f7",
      },
      fontFamily: {
        kanit: ["Kanit", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },

      borderWidth: {
        1: "1px",
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  },
};
