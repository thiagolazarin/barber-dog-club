/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petroleum: {
          50: "#fff7ed",
          100: "#fed7aa",
          500: "#f59e0b",
          600: "#d97706",
          700: "#9a4f0f",
          800: "#4a2412",
          900: "#17100c"
        },
        honey: {
          100: "#fff3d7",
          300: "#f4b63f",
          500: "#e67918"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 16, 12, 0.16)"
      }
    }
  },
  plugins: []
};
