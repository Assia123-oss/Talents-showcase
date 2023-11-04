/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "967px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkGreen: "hsl(180, 86%, 27%)",
        darkBlue: "	hsl(235, 94%, 13%)",
        lightDarkBlue: "	hsl(213, 57%, 14%)",
        darkPink: "		hsl(335, 67%, 57%)",
        lightPink: "	hsl(23, 40%, 90%)",
        lightBlue: "	hsl(220, 33%, 98%)",
        pink: "	hsl(27, 100%, 96%)",
        blue: "#7E8896",
        superLightPink: "	hsl(24, 56%, 96%)",
        lightSuperDarkBlue: "	hsl(214, 19%, 86%)",
        dullBlue: "	hsl(230, 15%, 62%)",
      },
    },
  },
  plugins: [],
};

