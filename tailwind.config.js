/** @type {import('tailwindcss').Config} */
import { customColors } from 'd4design';

export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/d4design/dist/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: { monosphere : ['monosphere'] },
      colors: customColors
    }
  },
};
