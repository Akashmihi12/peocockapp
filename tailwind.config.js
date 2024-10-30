/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Correct paths to include all component files
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#4b2e2e', // Custom brown color for the hero text
        },
      },
    },
  },
  plugins: [],
};

export default config;
