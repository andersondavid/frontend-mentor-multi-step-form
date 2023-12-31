/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'marine-blue': 'hsl(213, 96%, 18%)',
      'purplish-blue': 'hsl(243, 100%, 62%)',
      'pastel-blue': 'hsl(228, 100%, 84%)',
      'light-blue': 'hsl(206, 94%, 87%)',
      'strawberry-red': 'hsl(354, 84%, 57%)',
      'cool-gray': 'hsl(231, 11%, 63%)',
      'light-gray': 'hsl(229, 24%, 87%)',
      'magnolia': 'hsl(217, 100%, 97%)',
      'alabaster': 'hsl(231, 100%, 99%)',
      'white': 'hsl(0, 0%, 100%)',
      'transparent': '#00000000',
      'black': '#000000'
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'sidebar-mobile': "url('https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
}
