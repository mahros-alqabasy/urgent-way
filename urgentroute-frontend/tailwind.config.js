/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        healing: {
          50: "#e9f5e9",
          100: "#d3ebd3",
          200: "#b2e0b2",
          300: "#8ccb8c",
          400: "#5daa5d",
          500: "#3b8a3b",
          600: "#2a6a2a",
          700: "#1e501e",
          800: "#144014",
          900: "#0d2f0d",
        },
        urgent: {
          red: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
