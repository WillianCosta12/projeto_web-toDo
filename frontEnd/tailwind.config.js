/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-green": "#5BC0BE",
        "light-yellow": "#F9ED69",
        purple: "#726A95",
        "soft-orange": "#F08A5D",
        "dark-blue": "#3B3B98",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  safelist: [
    "bg-blue-green",
    "bg-light-yellow",
    "bg-purple",
    "bg-soft-orange",
    "bg-dark-blue",
  ],
};
