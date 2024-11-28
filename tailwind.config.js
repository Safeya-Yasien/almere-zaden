/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sunset-orange": "#fba43d",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
