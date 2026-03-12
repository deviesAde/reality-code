import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        red: {
          DEFAULT: "#E10600",
          dark: "#8B0000",
          light: "#FF1A15",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        glitch: "glitch 2.5s infinite",
        "glitch-2": "glitch2 2.5s infinite",
        "grid-move": "gridMove 6s linear infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "blink-red": "blinkRed 1.5s step-end infinite",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%, 95%, 100%": { transform: "translate(0)", clipPath: "none" },
          "96%": {
            transform: "translate(-3px, 1px)",
            clipPath: "inset(30% 0 40% 0)",
          },
          "97%": {
            transform: "translate(3px, -1px)",
            clipPath: "inset(70% 0 10% 0)",
          },
          "98%": {
            transform: "translate(-2px, 2px)",
            clipPath: "inset(10% 0 80% 0)",
          },
          "99%": {
            transform: "translate(2px, -2px)",
            clipPath: "inset(60% 0 20% 0)",
          },
        },
        glitch2: {
          "0%, 95%, 100%": {
            transform: "translate(0)",
            opacity: "0",
            clipPath: "none",
          },
          "96%": {
            transform: "translate(3px, -1px)",
            opacity: "0.7",
            clipPath: "inset(20% 0 50% 0)",
          },
          "97%": {
            transform: "translate(-3px, 1px)",
            opacity: "0.7",
            clipPath: "inset(60% 0 20% 0)",
          },
          "98%": {
            transform: "translate(2px, 2px)",
            opacity: "0.7",
            clipPath: "inset(40% 0 40% 0)",
          },
          "99%": {
            transform: "translate(-2px, -2px)",
            opacity: "0.7",
            clipPath: "inset(80% 0 5% 0)",
          },
        },
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(80px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blinkRed: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
