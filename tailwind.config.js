/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'white':' #ddffdf',
      'black':' #000b00',
      'primary': {
        10: '#eaffdf',
        20: '#cbffb4',
        30: '#a6ff88',
        40: '#76ff59',
        50: '#00ff00',
        60: '#00bb1f',
        70: '#067c20',
        80: '#0f4117',
        90: '#000b00',
      },
      'accent': {
        10: '#eaffff',
        20: '#c9ffff',
        30: '#a4ffff',
        40: '#74ffff',
        50: '#00ffff',
        60: '#24bab7',
        70: '#257a76',
        80: '#1a3f3c',
        90: '#000706',
      },
      'gradient': {
        10: '#00ffff',
        20: '#00ff59',
        30: '#00ff7c',
        40: '#00ff99',
        50: '#00ffb2',
        60: '#00ffca',
        70: '#00ffde',
        80: '#00fff1',
        90: '#00ffff',
      },
      'grayscale': {
        10: '#ddffdf',
        20: '#bedcc0',
        30: '#8ba38d',
        40: '#738875',
        50: '#5c6e5e',
        60: '#465447',
        70: '#313c32',
        80: '#1d261e',
        90: '#000b00',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

