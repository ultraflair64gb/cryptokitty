/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
        "4xl": "1800px",
      },
      colors: {
        h1Primary: "#30742A",
        h1Primary2: "#E3FF10",
        h1Primary5: "#38B27A",
        n1: "#0A1023",
        n2: "#2C3655",
        n3: "#848894",
        n4: "#959AAA",
        n5: "#BDC2D1",
        n6: "#D8DCE7",
        n7: "#F8F8F8",
        n8: "#FFFFFF",
        n9: "#F5FAFF",
        n10: "#EEF1FF",
        title: " #211F54",
        light: "#F7F7FC",
        light2: "#F5F3FF",
        para: "#6E7191",
        para2: "#575B80",
        para3: "#5A5F96",
        gray: "#D8D4EB",
        dark: "#07193D",
        dark2: "#070720",
      },

      fontFamily: {
        "body-font": ["var(--body-font)"],
        "title-font": ["var(--title-font)"],
      },

      spacing: {
        15: "60px",
        18: "72px",
        25: "100px",
        30: "120px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "custom-pulse": "custom-pulse 6s ease-in-out infinite alternate-reverse;",
      },
    },
  },
  plugins: [require("./spacing-plugin")],
};
