/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  },
  plugins: [],
}

