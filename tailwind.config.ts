import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        success: {
          DEFAULT: '#4CAF50',
          light: '#E8F5E9'
        },
        primary: {
          DEFAULT: '#497,00',
          dark: '#0056b3'
        },
        timer: '#FF6B00',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
