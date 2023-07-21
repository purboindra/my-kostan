/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"montserrat"', "serif"],
        body: ['"montserrat"', "serif"],
      },
      colors: {
        primaryColor: "#FFD428",
        secondaryColor: "#FF8900",
        blackColor: "#242A37",
        greyColor: "#F1F2F6",
      },
    },
  },
  plugins: [],
};
