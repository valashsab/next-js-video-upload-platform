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
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
