/* Imports --------------------------------------------- */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/* Export the used Webpack plugins --------------------- */
module.exports = [
  new ForkTsCheckerWebpackPlugin(),
];
