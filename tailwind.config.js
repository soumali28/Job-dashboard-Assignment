/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:{
          10:'#FCFCFC',
          50:'#E7E7E7',
          100: '#B0B0B0',
          200:'#888888',
          300:'#3D3D3D',
          350:'#5D5D5D',
          400:'#344054',
          450: '#6E6D6D',
          500:'#4F4F4F',
        },
        orange:{
          10:'#FEF4F2',
          50:'#FCB4A5',
          100: '#DC4A2D'
        },
        green:{
         
          50:'#ECFDF3',
          100:'#ABEFC6',
          200:'#067647',

        }
      }
    },
  },
  plugins: [],
}

