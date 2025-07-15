/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        starbucks: {
          green: '#00704A',
          'dark-green': '#1E3932',
          gold: '#D4A574',
          pink: '#FF69B4',
          blue: '#4169E1',
          orange: '#FF8C00',
          purple: '#9370DB',
          red: '#DC143C',
        },
        category: {
          pink: '#FF69B4',
          blue: '#4169E1',
          orange: '#FF8C00',
          purple: '#9370DB',
          red: '#DC143C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config; 