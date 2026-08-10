const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        // Body text (cool desaturated gray)
        primary: "#93969F",
        // Headline / high-emphasis text (off-white)
        secondary: "#F2F3F5",
        // Single accent, used identically across the whole site
        accent: "#5FD4FF",
        // Page background (off-black)
        base_col: "#0A0B0E",
        // Elevated surface: cards, sidebar panel, hover fills
        base_col_darker: "#141519",
        // Hairline dividers / card borders
        border_col: "#22242B",
      },
      // Radius scale (Shape Consistency Lock): rounded-lg (8px) for buttons,
      // inputs and tags. rounded-xl (12px) for cards and images. No pill
      // radius except small status/tag chips.
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
