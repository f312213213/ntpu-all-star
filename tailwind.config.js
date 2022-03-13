const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      custom: {
        1000: '#111822',
        900: '#213045',
        800: '#324867',
        700: '#42608a',
        600: '#5378ac',
        500: '#7593bd',
        400: '#98aecd',
        300: '#bac9de',
        200: '#dde4ee',
        100: '#eef2f7'
      },
      highLight: '#ac53a5',
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      red: colors.red
    },
    extend: {}
  },
  plugins: []
}
