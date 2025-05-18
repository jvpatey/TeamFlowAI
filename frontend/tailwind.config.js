/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#393E41",
        timberwolf: "#D3D0CB",
        platinum: "#E7E5DF",
        keppel: "#44BBA4",
        saffron: "#E7BB41",
      },
    },
  },
  plugins: [],
};
