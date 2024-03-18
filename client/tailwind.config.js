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
       'enter':["Inter", "sans-serif"],
       'monument':["Monument","Extended" ,"Ultrabold","sans-serif"]
      },
      spacing: {
        '102': '28rem',
        '74':'18.25rem' 
      }
    },
  },
  plugins: [],
}

