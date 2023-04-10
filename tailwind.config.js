/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#111111",
        
"secondary": "#a7a2f2",
        
"accent": "#f2aef9",
        
"neutral": "#211A28",
        
"base-100": "#ECEEEE",
        
"info": "#5CBED6",
        
"success": "#73E8C3",
        
"warning": "#F2D12C",
        
"error": "#EE4455",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

