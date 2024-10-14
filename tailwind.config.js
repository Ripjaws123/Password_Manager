/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'm3xl': { 'max': '2560px' },

      'm2xl': { 'max': '1536px' },

      'mxl': { 'max': '1280px' },

      'mlg': { 'max': '1024px' },

      'mmd': { 'max': '768px' },

      'msm': { 'max': '640px' },

      'mlm': { 'max': '426px' },

      'mmm': { 'max': '376px' },

      'msm': { 'max': '321px' },

    },
    extend: {},
  },
  plugins: [],
}