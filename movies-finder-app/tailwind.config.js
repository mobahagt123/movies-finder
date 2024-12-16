/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'nunito': ['Nunito'],
        'chivo' : ['Chivo']
      },

      keyframes: {
        fadeIn: {
          '0%': {opacity:'0'},
          '100%': {opacity:'1'}
        },
        fadeOut: {
          '0%': {opacity:'1'},
          '100%': {opacity:'0'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
        fadeOut: 'fadeOut 1s ease-out'
      }
    },
  },
  plugins: [],
}

