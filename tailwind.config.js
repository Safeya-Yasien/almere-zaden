/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // This is good
    "./src/**/*.{js,ts,jsx,tsx}", // Checks all files in the `src` folder
    "./components/**/*.{js,ts,jsx,tsx}", // Add other folders if you have more
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
