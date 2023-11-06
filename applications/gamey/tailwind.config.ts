import type { Config } from 'tailwindcss';

import { lightTheme } from '@signbit/ui-components/src/assets/theme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    // reference to ui-components package
    '../../packages/ui-components/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    ...lightTheme,
  },
  plugins: [],
};
export default config;
