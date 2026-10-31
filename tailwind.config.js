/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3F0E8",
          deep: "#E6E0D4",
        },
        ink: "#1C2030",
        navy: {
          DEFAULT: "#26325C",
          deep: "#1B2444",
        },
        orange: {
          DEFAULT: "#ED7004",
          deep: "#C45C03",
        },
        ember: "#9E4A02",
        line: "#D9D2C5",
      },
      fontFamily: {
        sans: ["Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Fraunces", "Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
      },
      boxShadow: {
        lift: "0 24px 60px -32px rgba(28, 32, 48, 0.55)",
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
}
