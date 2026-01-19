import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
            },
        },
    },
};

export default config;
