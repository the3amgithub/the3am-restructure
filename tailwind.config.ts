import type { Config } from 'tailwindcss'
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: colors.white,
        orange: colors.orange,
        primary: "#492b81",
        secondary: "#b72576",
        header: "#011024db",
      
      },
    },
  },
  plugins: [],
}
export default config
