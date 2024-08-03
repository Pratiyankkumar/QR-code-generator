/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        100: '650px'
      },
      fontSize: {
        xss: '15px'
      },
      width: {
        100: '650px'
      }
    },
  },
  plugins: [],
};


