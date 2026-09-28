import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#f4b400",
        bgdark: "#0a0e17",
        surface: "#111726",
        "surface-border": "#1f2637",
      },
    },
  },
  plugins: [],
};

export default config;
