/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nexus-blue": "#214451", // hero panel
        "nexus-gold": "#E6B855", // CTA gold
        "nexus-green": "#0f5a4f", // add button green
      },
    },
  },
  plugins: [],
};
