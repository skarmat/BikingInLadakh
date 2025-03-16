/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        red: {
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
        },
        rose: {
          300: "#FDA4AF",
        },
      },
    },
  },
  plugins: [],
};
