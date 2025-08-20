/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue900: "#0B0D17",
        Blue300: "#D0D6F9",
      },
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Barlow: ["Barlow", "sans-serif"],
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
