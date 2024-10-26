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
        "wood-smoke": "#18191F",
        bigfish: "#D9DBE1",
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
      height: {
        81.5: "326px",
      },
      lineHeight: {
        11: "44px",
      },
      spacing: {
        2.25: "9px",
        2.75: "11px",
        7.5: "30px",
        41.25: "165px",
      },
      width: {
        "3/5": "60%",
        10.25: "41px",
        19.5: "78px",
        26: "104px",
        56.25: "225px",
        74.75: "299px",
        81.5: "326px",
        135.5: "542px",
        221.75: "887px",
      },
      padding: {
        5.5: "22px",
        26.25: "105px",
        30: "120px",
      },
      gap: {
        3.5: "14px",
        12.5: "50px",
        26: "104px",
        34: "136px",
      },
      spacing: {
        2.25: "9px",
        2.75: "11px",
        6.25: "25px",
        6.375: "25.5px",
        7.5: "30px",
        13: "52px",
        63.75: "255px",
        125: "500px",
        135: "540px",
        150: "600px",
        150.25: "601px",
        165.25: "661px",
        200: "800px",
        277.5: "1110px",
        288: "1152px",
        360: "1440px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(100%)" },
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
