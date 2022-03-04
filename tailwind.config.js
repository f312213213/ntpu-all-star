const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      custom: {
        1000: '#0f1824',
        900: '#1e2f48',
        800: '#2c476d',
        700: '#3b5f91',
        600: '#4a77b5',
        500: '#6e92c4',
        400: '#92add3',
        300: '#b7c8e1',
        200: '#dbe4f0',
        100: '#edf1f8'
      },
      highLight: '#4ab5a3',
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      blue: colors.blue
    },
    extend: {}
  },
  plugins: []
}
