/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',        
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      colors: {
        'textAlertColor': '#ffdada',
        'secondaryTextColor': '#b5b5b5',
        'primaryColor': '#333333',
        'secondaryColor': '#3d3d3d', 
        'TertiaryColor': '#474747',
      },
      
    },
  },
  plugins: [],
}
