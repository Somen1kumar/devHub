/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors : {
          'Btn-Primary': '#f8f8f8',
          'Btn-Secondary': '#d3d3d3',
          'transparent-Background': 'rgba(0,0,0,.75)',
          'Btn-ternary1': '#ccc',
          'Btn-ternary2': '#f2f2f2',
          'Btn-ternary3': 'rgb(96,96,96)'
        },
        screens: {
          mobLand: '581px',
          tab: "768px",
          desk: '1024px',
          desktop: '1280px'
        }
      },
    },
    plugins: [],
  }