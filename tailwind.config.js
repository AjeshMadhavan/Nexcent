/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 2px 4px rgba(171, 190, 209, 0.6)",
        md: "0 4px 8px rgba(171, 190, 209, 0.4)",
        lg: "0 6px 12px rgba(171, 190, 209, 0.3)",
        xl: "0 8px 16px rgba(171, 190, 209, 0.4)",
        "2xl": "0 16px 32px rgba(171, 190, 209, 0.3)",
      },
      colors: {
        "neutral-black": "#263238",
        grey: "#717171",
        silver: "#F5F7FA",
        "d-grey": "#4D4D4D",
        "l-grey": "#89939E",
        "grey-blue": "#ABBED1",
        "shade-1": "#43A046",
        "shade-2": "#388E3B",
        "shade-3": "#237D31",
        "shade-4": "#1B5E1F",
        "shade-5": "#103E13",
        "tint-1": "#66BB69",
        "tint-2": "#81C784",
        "tint-3": "#A5D6A7",
        "tint-4": "#C8E6C9",
        "tint-5": "#E8F5E9",
        primary: "#28CB8B",
        secondary: "#263238",
        info: "#2194f3",
        success: "#2E7D31",
        warning: "#FBC02D",
        error: "#E53835",
        "devil-grass": "#4CAF4F",
        "brand-primary": "#4CAF4F",
      },
      fontFamily: {
        inter: "Inter",
      },
      fontSize: {
        "headline-1": [
          "64px",
          {
            lineHeight: "76px",
            fontWeight: "600",
          },
        ],
        "headline-2": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "600",
          },
        ],
        "headline-3": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        "headline-4": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "body-1": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "body-2": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-3": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-4": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
      },
      lineHeight: {
        11: "44px",
      },
      width: {
        74.75: "299px",
        135.5: "542px",
      },
      padding: {
        5.5: "22px",
        26.25: "105px",
        30: "120px",
      },
      gap: {
        3.5: "14px",
        6.25: "25px",
        12.5: "50px",
        26: "104px",
        34: "136px",
      },
      spacing: {
        288: "1152px",
        150: "600px",
        200: "800px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 5s linear infinite",
      },
    },
  },
  plugins: [],
};