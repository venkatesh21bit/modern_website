/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sanf-serif"],
        general: ["general", "sanf-serif"],
        "circular-web": ["circular-web", "sanf-serif"],
        "robert-medium": ["robert-regular", "sanf-serif"],
        "robert-regular": ["robert-medium", "sanf-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724FF",
        },
        yellow: {
          100 : "#8E983F",
          300 : "#EDFF66"
        },
      },
    },
  },
  plugins: [],
};
