import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a0e27",
        "dark-secondary": "#151b3f",
        "dark-tertiary": "#1f2749",
        accent: "#6b4fff",
        "accent-light": "#8b5fff",
        success: "#10b981",
        warning: "#f59e0b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-accent": "radial-gradient(600px at 50% 50%, rgba(107, 79, 255, 0.15), transparent)",
        "glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-in": "slide-in 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(107, 79, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(107, 79, 255, 0.6)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
