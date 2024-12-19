/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        bgCover : "url('/src/assets/images/IMG_5742.JPG')",
        bgOverlay : "linear-gradient(to bottom, rgba(23, 24, 37, 0.3) 10%, rgba(23, 24, 37, 0.9) 100%)"
      },
      colors : {
        'black-middle' : '#161616',
        'white-middle' : '#FEFEFE',
        'blue-dark' : '#171825'
      },
      fontFamily : {
        brownSugar : ['Brown Sugar']
      }
    },
  },
  plugins: [],
}

