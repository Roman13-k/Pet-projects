/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#252525",
        purple: " #6c63ff",
        white: "#f7f7f7",
      },
      fontFamily: {
        kanit: ["Kanit", "ui-sans-serif", "system-ui"],
      },
      cursor: { custom: 'url("/public/cursor.svg"), auto' },
    },
    plugins: [],
  },
};
