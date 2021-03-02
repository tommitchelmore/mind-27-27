module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff'
      },
      grey: {
        DEFAULT: '#555555'
      },
      blue: {
        DEFAULT: '#013378',
        light: '#CDD5E5',
      },
      purple: {
        DEFAULT: '#702285'
      },
      yellow: {
        DEFAULT: '#FFCC00'
      }
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'hand': ['Patrick Hand', 'cursive']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
