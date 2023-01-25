/** @type {import('prettier').Config} */

module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
}
