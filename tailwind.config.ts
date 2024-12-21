import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px", // Extra small screens for better support
        sm: "600px", // Small screens
        md: "800px", // Medium screens
        lg: "1100px", // Large screens
        xl: "1400px", // Extra large screens
        "2xl": "1600px", // 2x Extra large screens
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {  // Corrected from 'color' to 'colors'
        button1: "#3563E9",  // Custom color for button
        bg1: "#F6F7F9",      // Custom background color
        bg2:"#F3F5F7",
      },
    },
  },
  plugins: [],
};

export default config;
