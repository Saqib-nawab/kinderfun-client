import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
    plugins: [
        tailwindcss, // ✅ Correct ESM Import
        autoprefixer, // ✅ Correct ESM Import
    ],
};
