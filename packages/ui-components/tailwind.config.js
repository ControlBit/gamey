import { lightTheme } from './src/assets/theme.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        retro: ['Retro Gaming'],
        pixel: ['ThemeVCK Text'],
      },
    },
    ...lightTheme,
  },
  plugins: [],
};
