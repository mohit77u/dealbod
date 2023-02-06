/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '320px', 'max': '480px'},
      },
      colors: {
        'primaryPurple':  '#9D34DA',
        'primaryYellow':  '#CC9900',
        'lightYellow':  '#F7F0D9',
        'lightGray':  '#F9F3FD',
        'red':  '#FC2F2F',
      },
      boxShadow: {
        'primary': '0px 26.6186px 17.6092px rgba(0, 0, 0, 0.0425185), 0px 13.8212px 8.98376px rgba(0, 0, 0, 0.035), 0px 5.63085px 4.50468px rgba(0, 0, 0, 0.0274815), 0px 1.27974px 2.17556px rgba(0, 0, 0, 0.0168519);'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
