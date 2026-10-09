import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#102A43",
        secondary: "#126B70",
        background: "#FAF6EF",
        foreground: "#1C2B36",
        // Gold accent: use `bg-accent` for fills and for text on navy.
        // Use `text-accent-dark` for small text on cream/white/mint (4.9:1+).
        accent: { DEFAULT: "#C49A62", dark: "#7A5A25" },
        mint: "#E7EFE7",
        // Borders and placeholder text for form fields (3:1+ and 4.5:1+ on cream)
        field: "#78694F",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
