import scrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      iPhone12Pro: "390px",
      iPhone14ProMax: "430px",
    },
    colors: {
      lightGreen: "#D2F5D2",
      green: "#61DE5E",
      busGreen: "#071124",
      mutegreen01: "#E2E3EE",
      mutegreen02: "#3B4A41",
      mutegreen03: "#727272",
      busBlack: "#121212",
      darkGray: "#1A1A1A",
      darkGray3: "#B4B4B4",
      warn: "#FF6869",
      lightRed: "#FF0001",
      black: "#000",
      white: "#fff",
      busColor: "#417FF9",
      lightGrey: "#dbdbdb",
    },
    fontSize: {
      Bold16: [
        "1rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold18: [
        "1.125rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold21: [
        "1.3125rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold28: [
        "1.75rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold30: [
        "1.875rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold40: [
        "2.5rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold45: [
        "2.8125rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Bold170: [
        "10.625rem",
        { notItalic: true, fontWeight: 700, lineHeight: "normal" },
      ],
      Regular12: [
        "0.75rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],
      Regular16: [
        "1rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],

      Regular18: [
        "1.125rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],
      Regular27: [
        "1.6875rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],
      Regular45: [
        "2.8125rem",
        { notItalic: true, fontWeight: 400, lineHeight: "normal" },
      ],
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(0.6)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
        scaleUp: "scaleUp 1s ease-in-out",
      },
    },
  },
  plugins: [scrollbarHide],
};
