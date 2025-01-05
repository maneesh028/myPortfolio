module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Add all HTML and TypeScript files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
  ],
};