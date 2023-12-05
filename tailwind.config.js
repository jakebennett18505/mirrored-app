/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],

          primary: "#407FA1",
          secondary: "#001F5C",
          accent: "#FF6A00",
          neutral: "#000000",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#407FA1",
          secondary: "#001F5C",
          accent: "#FF6A00",
          neutral: "#ffffff",
          "base-100": "#2C2738",
        },
      },
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
  },
  plugins: [require("daisyui")],
};
