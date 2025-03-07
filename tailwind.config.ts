import type { Config } from "tailwindcss";

export default {
     content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
     theme: {
          screens: {
               xs: "480px",
               sm: "640px",
               md: "768px",
               lg: "1024px",
               xl: "1280px",
          },
          extend: {
               colors: {
                    background: "var(--background)",
                    foreground: "var(--foreground)",
                    blue: "#1F94D2",
                    "light-black": "#333333",
                    "light-gray": "#F5F5F5",
               },
               lineHeight: {
                    "120%": "120%",
                    "130%": "130%",
               },
          },
     },
     plugins: [],
} satisfies Config;
