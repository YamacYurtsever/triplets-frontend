/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/src/assets/triplets_castle.png')",
      },
    },
  },
  plugins: [],
};
