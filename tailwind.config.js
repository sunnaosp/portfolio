module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      brand: ["Arima Madurai", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#3B2C35",
        secondary: "#FCF6F0",
        linkedIn: "#0A66C2",
        cv: "#4C7CEC",
        email: "#BB1E49",
        dribbble: "#EA4C89",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
