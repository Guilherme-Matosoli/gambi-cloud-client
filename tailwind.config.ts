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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      blur: {
        "light": "calc(600px / 5)"
      },
      width: {
        "light": "600px"
      },
      height: {
        "light": "600px"
      },
      borderColor: {
        "op": "#23204F"
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        "light": "0 0 5px 1px white"
      },
      screens: {
        "mobile": "900px",
        "phone": "600px"
      }
    },
  },
  plugins: [],
};
export default config;
