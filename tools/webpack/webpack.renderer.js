/* Imports --------------------------------------------- */
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

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
  }
);

/* Renderer webpack configuration ---------------------- */
module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
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
