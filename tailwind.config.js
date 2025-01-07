/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'black-middle' : '#161616',
        'white-middle' : '#FEFEFE',
        'blue-dark' : '#171825',
        'grey-light' : '#D9D9D9',
        'black-rangga' : '#121212'
      },
      backgroundImage : {
        'coverImg' : "url('/src/assets/images/DSCF4332-12323-1.png')"
      }
    },
  },
  plugins: [],
}

