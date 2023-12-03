/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#407FA1",
          "secondary": "#001F5C",
          "accent": "#FF6A00",
          "neutral": "#000000",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#ecf2f6",
          100: "#d9e5ec",
          200: "#c6d9e3",
          300: "#b3ccd9",
          400: "#a0bfd0",
          500: "#8cb2c7",
          600: "#79a5bd",
          700: "#407FA1",
          800: "#407FA1",
          900: "#407FA1",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("flowbite/plugin"),
    require("flowbite-typography"),
  ],
};
