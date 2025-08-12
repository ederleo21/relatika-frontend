/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",  
    "./node_modules/flowbite/**/*.js"  
  ],
  theme: {
    extend: {
      colors: {
        lightbg: '#FFFEFE',
        greybg: '#F0F0F8',
        lighttext: '#60697B',
        darktext: '#343F52',
        red_coral: '#EF4444',  
        indigo_light: '#4f46e5' 
      },  
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'], 
          lora: ['Lora', 'serif'], 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

