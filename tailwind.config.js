/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petroleum: {
          50: "#eefafa",
          100: "#d7f2f0",
          500: "#188f92",
          600: "#10777d",
          700: "#115e64",
          800: "#0f4c52",
          900: "#12383c"
        },
        honey: {
          100: "#fff0c8",
          300: "#ffd36f",
          500: "#f5a623"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 94, 100, 0.13)"
      }
    }
  },
  plugins: []
};
