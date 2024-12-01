/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'castle': "url('/src/assets/triplets_castle.png')",
      },
      spacing: {
        'auth-card-h': '500px',
        'auth-card-w': '800px',
      },
      colors: {
        primary: {
          default: '#954dc9',
          light: '#954dc950',
        },
        secondary: {
          default: '#e3ac40',
          light: '#e3ac4050',
        },
        neutral: {
          default: '#343236',
          light: '#34323650',
        },
      },
    },
  },
  plugins: [],
};
