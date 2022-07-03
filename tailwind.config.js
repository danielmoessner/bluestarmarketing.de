// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{json,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bsm: {
          ocean: "#00adea",
          matt: "#f6f6f6",
          nightblue: "#162259",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.bsm.nightblue"),
            "--tw-prose-headings": theme("colors.bsm.nightblue"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
