/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#2dc86d",
      success: "#71cb75",
      info: "#02A0FC",
      danger: "#FF3A29",
      warning: "#FFB200",
      white: '#FFF',
      dark: "#303030",
      gray: "#f7f7f7",
      black: {
        5: "#00000011",
        10: "#00000022",
        20: "#00000033",
        40: "#00000066",
        60: "#00000099",
        80: "#000000cc",
        100: "#000000",
      },
      
    },
    fontFamily: {
      dm: "DM Sans, sans-serif",
    },
    extend: {},
  },
  plugins: [],
}