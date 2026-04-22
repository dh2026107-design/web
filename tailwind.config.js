/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        navy: { 950: "#020818", 900: "#050d2a", 800: "#0a1740", 700: "#0f2160", 600: "#152b80" },
        gold: { 300: "#fde68a", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706" },
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.4s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(16px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
      },
    },
  },
  plugins: [],
};
