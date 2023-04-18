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
        rose: ["Rosefield", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        // "6xl": "71.5rem",
      },
      colors: {
        bsm: {
          faince: "#45b5cf",
          cornblue: "#2a7fc2",
          ocean: "#00adea",
          matt: "#f6f6f6",
          orientblue: "#0f4988",
          nightblue: "#162259",
          alice: "#dfeaf8",
          pink: "#e50069",
          purple: "#641462",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.bsm.nightblue"),
            "--tw-prose-headings": theme("colors.bsm.nightblue"),
            "line-height": "1.5",
            strong: {
              color: "inherit",
            },
            em: {
              fontFamily: "Rosefield",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
