module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff4dd2',
        neonBlue: '#7afcff',
        neonGreen: '#39ff14'
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
