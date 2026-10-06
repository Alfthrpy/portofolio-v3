const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "3rem",
        lg: "6.2rem",
      },
    },
    extend: {
      colors: {
        // RawBlock: raw black on white. No grays, no tints.
        ink: "#000000",
        paper: "#FFFFFF",
        linkblue: "#0000FF",
        success: "#008000",
        warning: "#FFA500",
        error: "#FF0000",
        sunken: "#F0F0F0",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-work-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-space-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
