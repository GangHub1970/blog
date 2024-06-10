import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      next: {
        "0%, 100%": {
          transform: "translateX(-55%)",
          // "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          // "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    animation: {
      next: "next .5s ease-in-out",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
