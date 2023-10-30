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
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': '#CDC7E5',
        'custom-bg2': '#6B7D7D',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
