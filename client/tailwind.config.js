/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'inter': ["El Messiri", "sans-serif"],
       'nlink':["Inter", "sans-serif"],
       'monument':["Monument","Extended" ,"Ultrabold","sans-serif"]
      },
    },
  },
  plugins: [],
}

