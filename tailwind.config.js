/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#FFD90F',
          secondary: '#E5E4E2',
          tertiary: '#8D83EE',
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': '#CDC7E5',
        'custom-bg2': '#000000',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
