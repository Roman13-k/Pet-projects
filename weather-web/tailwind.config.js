/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        clouds: "url('/public/bg/clouds.jpg')",
        cloudsNight: "url('/public/bg/clouds-night.jpg')",
        clear: "url('/public/bg/clear.jpg')",
        night: "url('/public/bg/night.jpg')",
        mist: "url('/public/bg/mist.jpg')",
        rain: "url('/public/bg/rain.jpg')",
        snow: "url('/public/bg/snow.jpg')",
        thunderstorm: "url('/public/bg/thunderstorm.jpg')",
      },
      fontSize: {
        "10xl": "143px",
      },
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif", "system-ui"],
        istok: ["Istok Web", "ui-sans-serif", "system-ui"],
      },
      minWidth: {
        huge: "480px",
      },
    },
  },
  plugins: [],
};
