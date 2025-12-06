import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        base: "#04080F",
        accent: "#F3B61F",
        offWhite: "#FFFCFF",
        Emphasis: "#813405",
        Gray: "#8C8B89",
        Black_9: "#C6C6C6",
        Black_8: "#C6C6C6",
        // Mode specific colors
        dev: {
          bg: "#0a0a0a",
          text: "#60a5fa", // Blue 400 (Matches Faith/About section)
          accent: "#1e3a8a", // Blue 900
        },
        eng: {
          bg: "#f0f2f5",
          text: "#1a365d",
          accent: "#2b6cb0",
        },
        creative: {
          bg: "#111",
          text: "#fff",
          accent: "#ff0080",
        },
      },
      backgroundImage: {
        OraYel: "linear-gradient(to right, #F3B61F, #813405)",
      },
      animation: {
        "text-morph": "morph 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        morph: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
};

export default config;
