// tailwind.config.js - FIXED
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: {
          DEFAULT: "#F7A8B8",
          light: "#FDF2F8",
          dark: "#EC4899",
        },
        pastelOrange: {
          DEFAULT: "#FFB347",
          light: "#FEF3C7",
          dark: "#F59E0B",
        },
        pastelPurple: {
          DEFAULT: "#CBB3EE",
          light: "#F3E8FF",
          dark: "#A855F7",
        },
      },
    },
  },
  plugins: [],
  // Add this to force generation of custom colors
  safelist: [
    'bg-pastelPink',
    'bg-pastelPink-light',
    'bg-pastelPink-dark',
    'bg-pastelOrange', 
    'bg-pastelOrange-light',
    'bg-pastelOrange-dark',
    'bg-pastelPurple',
    'bg-pastelPurple-light', 
    'bg-pastelPurple-dark',
    'text-pastelPink',
    'text-pastelOrange',
    'text-pastelPurple',
    'from-pastelPink-light',
    'to-pastelOrange-light',
    'via-pastelPurple-light',
    'hover:bg-pastelPink-dark',
    'hover:bg-pastelOrange-dark',
  ]
};