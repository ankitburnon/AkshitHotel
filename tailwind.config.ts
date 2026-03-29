import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5A47",
        cream: "#FAF6F1",
        accent: "#C2703E",
        highlight: "#A16207",
        body: "#3D3530",
        "dark-bg": "#1a3a2e",
        darkest: "#0a1f16",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-karla)", "sans-serif"],
      },
      animation: {
        "mist-drift": "mistDrift 8s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        mistDrift: {
          "0%, 100%": { transform: "translateX(-2%)" },
          "50%": { transform: "translateX(2%)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
