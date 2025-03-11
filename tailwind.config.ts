import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                kinderFun: ['"Fredoka One"', '"Comic Sans MS"', 'cursive'],
            },
            colors: {
                primary: "#1A1A80", // ✅ Deep Blue
                secondary: "#FF5A24", // ✅ Bright Orange
                accent: "#FFB534", // ✅ Soft Yellow
                background: "#FFFFFF", // ✅ White
                lightBlue: "#E3F2FD",
                lightOrange: "#FFDAB9",
                textDark: "#1B1B1B",
                textLight: "#FFFFFF",
                gray: {
                    light: "#E0E0E0",
                    dark: "#757575",
                },
            },
        },
    },
    plugins: [],
};

export default config;
