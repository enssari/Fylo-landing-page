/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkblue": "hsl(217, 28%, 15%)",
        "heroblue": "hsl(218, 28%, 13%)",
        "lighter-cyan": "hsl(176, 68%, 64%)",
        "cyan": "hsl(198, 60%, 50%)",
        "shadowblue": "hsl(219, 30%, 18%)",
        "footerblue": "hsl(216, 53%, 9%)",
        "lightred": "hsl(0, 100%, 63%)"
      }
    },
  },
  plugins: [],
}