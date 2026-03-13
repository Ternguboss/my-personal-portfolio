/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), //  plugin 
  ],
  daisyui: {
    themes: [ "night"], // DaisyUI config for my theme
  },
};