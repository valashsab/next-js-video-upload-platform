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
          primary: '#000000',
          secondary: '#808080',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
