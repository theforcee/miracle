/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xs": "375px",
      "3xs": "550px",
      xs: "640px",
      sm: "768px",
      md: "900px",
      "2md": "1050px",
      lg: "1200px",
      xl: "1368px",
      "2xl": "1536px",
      main: "1440px",
    },
    colors: {
      main: "#FBC61D",
      miracleGray: "#747474",
      miracleLightGray: "#f7f7f8",
      miraclePurple: "#6B2FEB",
      miracleGreen: "#00CE5F",
      miracleOrange: "#FB7800",
      miracleRed: "#EB522F",
      miracleBlue: "#2F91EB",
      "miracleTransparent-10": "#A5FAFF1A",
      "miracleTransparent-20": "#44C4EC33",
      ...colors,
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.125rem" }], // 12px/18px
      sm: ["0.875rem", { lineHeight: "1.5rem" }], // 14px/24px
      base: ["1rem", { lineHeight: "1.25rem" }], // 16px/20px
      lg: ["1.125rem", { lineHeight: "1.5rem" }], // 18px/24px
      xl: ["1.25rem", { lineHeight: "2rem" }], // 20px/32px
      "2xl": ["1.5rem", { lineHeight: "1.875rem" }], // 24px/30px
      "3xl": ["2rem", { lineHeight: "2.75rem" }], // 32px/44px
      "4xl": ["2.625rem", { lineHeight: "3.125rem" }], // 42px/50px
      "5xl": ["3rem", { lineHeight: "3.75rem" }], // 48px/60px
      "6xl": ["3.5rem", { lineHeight: "4rem" }], // 56px/64px
      "7xl": ["5rem", { lineHeight: "6.25rem" }], // 80px/100px
      "13/18": ["13px", { lineHeight: "18px" }],
      "14/20": ["14px", { lineHeight: "20px" }],
      "16/20": ["16px", { lineHeight: "20px" }],
      "16/22": ["16px", { lineHeight: "22px" }],
      "18/22": ["18px", { lineHeight: "22px" }],
      "20/25": ["20px", { lineHeight: "25px" }],
      "20/26": ["20px", { lineHeight: "26px" }],
      "20/28": ["20px", { lineHeight: "28px" }],
      "22/28": ["22px", { lineHeight: "28px" }],
      "22/30": ["22px", { lineHeight: "30px" }],
      "32/38": ["32px", { lineHeight: "38px" }],
      "32/42": ["32px", { lineHeight: "42px" }],
    },
    fontFamily: {
      miracleMedium: ["Outfit"],
      miracleBold: ["Outfit"],
    },
    extend: {},
  },
  plugins: [],
}
