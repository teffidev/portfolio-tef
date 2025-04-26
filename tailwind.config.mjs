/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // Habilita el modo oscuro con clases
  theme: {
    extend: {
      colors: {
        // Paleta de colores pastel/tierra/nude moderna
        primary: {
          // Tonos pasteles rosados-terracota para modo light
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724",
        },
        secondary: {
          // Tonos tierra/nude suaves
          50: "#faf5f2",
          100: "#f5ebe6",
          200: "#ead8ce",
          300: "#dbc1b0",
          400: "#c8a48e",
          500: "#b58b71",
          600: "#a47559",
          700: "#8b614a",
          800: "#725041",
          900: "#5e4436",
          950: "#2e211a",
        },
        neutral: {
          // Grises cálidos para transiciones
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        // Modo oscuro - colores específicos
        dark: {
          background: "#2a2521", // Base tierra oscuro cálido
          surface: "#36302a", // Un poco más claro para cards
          accent: "#dbc1b0", // Color secundario 300 como acento
          text: "#e7e5e4", // Texto claro ligeramente cálido
        },
        // Modo claro - colores específicos
        light: {
          background: "#faf5f2", // Base nude muy claro
          surface: "#ffffff", // Blanco para tarjetas
          accent: "#a47559", // Color secundario 600 como acento
          text: "#292524", // Texto oscuro ligeramente cálido
        },
      },
      fontFamily: {
        // Agregamos Montserrat como fuente principal
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        // Mantenemos las otras fuentes
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
        heading: ["Manrope", ...defaultTheme.fontFamily.sans],
        // Definimos específicamente Montserrat para poder usarla con class="font-montserrat"
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "slide-down": "slideDown 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
