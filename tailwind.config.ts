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
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        base: "#04080F",
        accent: "#F3B61F",
        offWhite: "#FFFCFF",
        Emphasis: "#813405",
        Gray: "#8C8B89",
        BlacK_9: "#C6C6C6",
        Black_8: "#C6C6C6",
      },
      backgroundImage: {
        OraYel: "linear-gradient(to right, #F3B61F, #813405)",
      },
    },
  },
};

export default config;
