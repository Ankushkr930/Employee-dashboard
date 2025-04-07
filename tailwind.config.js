/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "../react/my-vite-app/src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}

