import type { Config } from "tailwindcss";

// NOTE: theme.extend.colors/fontFamily are overwritten per-generated-project by
// projectWriter.ts using the Design System output. This file is the
// fallback shape only.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#102A43",
        secondary: "#126B70",
        background: "#FAF6EF",
        foreground: "#1C2B36",
        accent: "#C49A62",
        mint: "#E7EFE7",
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
