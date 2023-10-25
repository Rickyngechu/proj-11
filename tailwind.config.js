/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "Dark-Blue-1": "hsl(217, 28%, 15%)",
      "Dark-Blue-2": "hsl(218, 28%, 13%)",
      "Dark-Blue-3": "hsl(216, 53%, 9%)",
      "Dark-Blue-4": "hsl(219, 30%, 18%)",

      Cyan: "hsl(176, 68%, 64%)",
      Blue: "hsl(198, 60%, 50%)",
      "Light-Red": " hsl(0, 100%, 63%)",

      White: " hsl(0, 0%, 100%)",
      "white-2": "hsla(0, 0%, 84%, 0.813)",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "900px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
