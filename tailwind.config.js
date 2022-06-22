const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#06283D',
        },
        light: {
          50: '#F4F4F8',
        },
        accent: {
          50: '#1363DF',
        },
        secondary: {
          50: '#F15412',
        },
      },
    },
  },
  plugins: [],
};
