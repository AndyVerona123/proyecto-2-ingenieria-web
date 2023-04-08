
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellowbg': '#FFF159',        
      },
    },
    fontFamily: {
      'sans': [your_main_font],
      'roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};