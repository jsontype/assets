/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './**/*.{html,js}'],
  theme: {
    screens:{
      'large': {'max': '1330px'},
      'big': {'max': '1023px'},
      'middle': {'max': '720px'},
      'small': {'max': '560px'},
    },
    fontFamily: {
      poppins: ['Poppins', "sans-serif"],
      cormorant: ['Cormorant Garamond', "sans-serif"],
    },
    extend: {
      colors: {
        "extra-color": "var(--extra-color)",
      },
    },
  },
}
