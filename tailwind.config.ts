import { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        kinderFun: ['"Fredoka One"', '"Comic Sans MS"', 'cursive'], // Playful, kid-friendly font
      },
      colors: {
        primary: "#1A1A80", // Deep Blue from the logo
        secondary: "#FF5A24", // Bright Orange from the logo
        accent: "#FFB534", // Soft Yellow (Warmth & Friendliness)
        background: "#F8F9FA", // Light grayish-white for a clean UI
        lightBlue: "#E3F2FD", // Soft sky blue for kids' theme
        lightOrange: "#FFDAB9", // Soft peach for warmth
        textDark: "#1B1B1B", // Dark text for readability
        textLight: "#FFFFFF", // White for contrast elements
        gray: {
          light: "#E0E0E0",
          dark: "#757575",
        },
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadows for a friendly UI
        intense: "0 8px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
