import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right top, #000000, #150e12, #20181f, #29212e, #2e2c3f, #2c3247, #27394e, #224054, #1d4251, #1d434d, #204448, #254543)",
        "custom-gradient2":"linear-gradient(to right top, #080d4e, #001f55, #002b54, #00344e, #003c48, #034247, #114845, #214e41, #26543b, #325831, #425c25, #555e18)",
      },
      colors: {
        white: colors.white,
        orange: colors.orange,
        primary: "#ebcc60eb",
        secondary: "#b72576",
        header: "#011024db",
      },
    },
  },
  plugins: [require("tailwindcss-gradients"), nextui()],
};
export default config;
