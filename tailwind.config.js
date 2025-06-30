/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1a1a1a',      // Deep black
          secondary: '#2d2d2d',    // Charcoal gray
          accent: '#f5f5f5',       // Light gray/white
          gold: '#d4af37',         // Elegant gold
          goldColor: '#f4d03f',    // Bright gold
          dark: '#000000',         // Pure black
          lightGold: '#faf8f3'     // Cream white
        }
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      aspectRatio: {
        '2/1': '2 / 1',
      }
    },
  },
  plugins: [],
};