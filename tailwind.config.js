/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-pattern": "url('/src/assets/dark_bg_home_screen.jpg')",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        Raleway: ["Raleway_Bold"],
      },
    },
  },
  plugins: [],
};
