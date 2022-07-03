module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{json,md}",
  ],
  theme: {
    extend: {
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
