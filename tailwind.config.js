/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#fffbf3',
        pramary : '#f95c19',
        banner : "#fff7e7",
        bannerText : 'rgba(38, 17, 52, 1)',
        service : "rgba(17, 17, 29, 1)",
        bannerpara : 'rgba(77, 77, 77, 1)',
        border_b : '#FFB800',
        navtext : 'rgba(129, 115, 130, 1)',
        border : 'rgba(197, 197, 210, 1)',
        acces : 'rgba(255, 175, 15, 1)',
        get : 'rgba(34, 33, 50, 1)',
        footer : 'rgba(47, 46, 65, 1)'
      },
      maxWidth :{
          container : '1140px'
      },
      fontFamily: {
          'raleway': ["Raleway", "sans-serif"],
        },
        
    },
    backgroundImage: {
      'hero-pattern': "url(/src/assets/video.png)",
    }
  },
  plugins: [],
}