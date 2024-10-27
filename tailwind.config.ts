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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6b21a8", // Dark purple
        secondary: "#bfa34b", // Gold
        accent: "#10b981", // Emerald green
        muted: "#a1a1aa", // Muted silver
        noteYellow: "#fef3c7", // Sticky note yellow
        notePink: "#fbcfe8", // Sticky note pink
        noteGreen: "#bbf7d0", // Sticky note green
        noteBlue: "#bfdbfe", // Sticky note blue
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
