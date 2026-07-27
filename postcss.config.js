// postcss.config.js
// Tailwind v4 handles vendor prefixing itself (Lightning CSS), so autoprefixer is not needed.
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
