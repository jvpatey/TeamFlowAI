/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#393E41",
        outerSpace: "#4F5D65",
        timberwolf: "#e3e1de",
        platinum: "#E7E5DF",
        keppel: "#44BBA4",
        keppelLight: "#78cebd",
        zomp: "#3ba590",
        brunswickGreen: "#1b4b41",
        saffron: "#E7BB41",
      },
    },
  },
  plugins: [],
};
