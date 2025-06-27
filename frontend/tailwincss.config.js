// tailwind.config.js
import { defineConfig } from 'vite'
import plugin from 'tailwindcss/plugin'

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        subheading: "rgb(var(--subheading) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
