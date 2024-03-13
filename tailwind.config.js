/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      title: ['Poppins']
    },
    extend: {
      colors: {
        green: '#3f7d20',
        inputBg: '#313131',
        bgColor: '#161616',
        inputPlaceholder: '#b8b8b8'
      }
    }
  },
  plugins: []
}
