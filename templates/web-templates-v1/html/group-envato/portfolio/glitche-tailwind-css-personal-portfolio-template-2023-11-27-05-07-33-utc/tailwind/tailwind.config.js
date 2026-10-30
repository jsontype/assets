/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './**/*.{html,js}'],
  theme: {
    screens:{
      'max-1060': {'max': '1060px'},
      'max-1000': {'max': '1000px'},
      'max-960': {'max': '960px'},
      'max-840': {'max': '840px'},
      'max-600': {'max': '600px'},
      'max-580': {'max': '580px'},
      'max-480': {'max': '480px'},
      'max-400': {'max': '400px'},
    },
    fontFamily: {
      roboto: ['Roboto Mono', "monospace"],
    },
    extend: {
      colors: {
        "extra-color": "var(--extra-color)",
        "text-shadow-color": "var(--text-shadow-color)",
      },
    },
  },
}