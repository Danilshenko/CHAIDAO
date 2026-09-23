/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0a1410",
          900: "#0f1f18",
          800: "#163028",
          700: "#1b3d32",
          600: "#234a3a",
          500: "#2d5a48",
        },
        cream: {
          50: "#faf8f4",
          100: "#f3efe6",
          200: "#e8e2d4",
          300: "#d4cbb8",
        },
        gold: {
          300: "#dfc98a",
          400: "#c9a962",
          500: "#b8944f",
          600: "#9a7a3f",
        },
        charcoal: "#141414",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
        "6xl": "3.5rem",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0,0,0,0.28)",
        glass: "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 0 36px rgba(201,169,98,0.35)",
        card: "0 20px 50px rgba(10,20,16,0.35)",
      },
      backgroundImage: {
        leaf:
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 8c8 12 18 22 18 34a18 18 0 11-36 0c0-12 10-22 18-34z' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
