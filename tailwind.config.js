module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        'primary':'#06141d',
        'secondary':'#1b2730',
        'terciary':'#c084fc',
        'fourth':'#93c5fd',
        'fifth':'#1e40af',
        'sixth':'#2563eb',
      },
      fontSize:{
        'xs':'10px'
      },
      gridTemplateColumns: {
        // Simple auto column grid
        'simple': 'repeat(auto-fit, minmax(240px, 1fr))',
        'message': '250px 400px',
      },
      height:{
        'message':'80vh',
      },
      width:{
        'notification':'550px',
        'networks':'650px',
      },
    },
  },
  plugins: [],
}