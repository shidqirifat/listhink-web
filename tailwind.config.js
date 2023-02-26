/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-primary': '#FBFBFB',
        'green-primary': '#94B49F',
        'green-primary-hover': '#7B9684',
        'green-secondary': '#EAF0EC',
        'green-secondary-hover': '#DBE6DF',
        'black-primary': '#202224',
        'yellow-primary': '#FFDB89',
        'yellow-secondary': '#FFF3D8',
        'gray-primary': '#D2D3D3',
        netral: '#B2B2B2',
        warning: '#D4B672',
        danger: '#EB455F'
      }
    },
    fontFamily: {
      inter: 'Inter'
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
