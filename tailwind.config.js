/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {

    // },
    extend: {
      colors: {
        primary: {
          light: "#212121",
          normal: "#242424",
          deep: "#000000",
        },
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
        },
        "gray-muted": "#b0b0b0",
        tertiary: "",
        "text-muted": "#3d3d3d",
        "primary-blue": {
          primary: "#2b1cb7",
          hover: "#3f2ae5",
        },
      },
    },
  },
  plugins: [],
};
