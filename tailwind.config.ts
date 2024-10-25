import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  darkMode: 'class', // or 'media' or 'class
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-background": "linear-gradient(180deg, rgba(213,189,175,1) 4%, rgba(214,204,194,1) 34%, rgba(191,191,191,1) 80%);"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out"  
      },
      colors: {
        "weird-brown": "#c88e6d",
        "yes-grey": "#515151",
        "black": "#000000",
        "lightest-grey-ever": "#d9d9d9",
        "border-brown": "#B7A194",
        "completed": "#008E1F",
        "in-progress": "#8E0000",
        "project-border": "#B7A194"
      }
    }
  },
  plugins: [nextui()],
};

export default config;