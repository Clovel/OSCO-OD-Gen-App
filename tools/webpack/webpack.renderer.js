/* Imports --------------------------------------------- */
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/* Renderer exclusive rules ---------------------------- */
rules.push(
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      }
    ],
  },
);

/* Renderer webpack configuration ---------------------- */
module.exports = {
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(__dirname, '../../src/client/assets'),
          to: path.resolve(__dirname, '../../.webpack/renderer/assets'),
        },
      ],
    ),
  ],
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.css',
      '.json',
    ],
    alias: require('./webpack.aliases'),
  },
};
