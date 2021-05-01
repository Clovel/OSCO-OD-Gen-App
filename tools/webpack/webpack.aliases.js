const { createWebpackAliases } = require('./webpack.helpers');

// Export aliases
module.exports = createWebpackAliases(
  {
    assets: 'assets',
    src: 'src',
    client: 'src/client',
    layouts: 'src/client/layouts',
    pages: 'src/client/pages',
    components: 'src/client/components',
    server: 'src/server',
    imports: 'src/imports',
    helpers: 'src/imports/helpers',
  },
);
