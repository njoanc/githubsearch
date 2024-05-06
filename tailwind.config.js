/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, js,ts, tsx}"],
  theme: {
    colors: {
      "light-blue": "#0079FF",
      "c-gray": "#697C9A",
      "c-light-gray": "#4B6A9B",
      "c-dark": "#2B3442",
      "c-light": "#FFFFFF",
      "m-dark": "#1E2A47",
      "light-bg": "#F6F8FF",
    },
    extend: {},
    fontFamily: {
      specemono: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
