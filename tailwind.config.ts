import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0D1117",
          950: "#070A0E",
        },
        slate: {
          card: "#161B22",
        },
        graphite: {
          border: "#21262D",
          hover: "#30363D",
        },
        ember: {
          DEFAULT: "#FF6835",
          hover: "#FF7D4F",
          dim: "rgba(255, 104, 53, 0.12)",
          border: "rgba(255, 104, 53, 0.3)",
        },
        paper: {
          DEFAULT: "#F7F4EF",
          muted: "rgba(247, 244, 239, 0.7)",
        },
        ash: {
          DEFAULT: "#8B949E",
          dark: "#484F58",
        },
        signal: {
          success: "#7EE787",
          blue: "#58A6FF",
          warning: "#F0883E",
        },
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
