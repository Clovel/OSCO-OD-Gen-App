const { createWebpackAliases } = require('./webpack.helpers');

// Export aliases
module.exports = createWebpackAliases(
  {
    src: 'src',
    assets: 'src/client/assets',
    client: 'src/client',
    layouts: 'src/client/layouts',
    pages: 'src/client/pages',
    components: 'src/client/components',
    server: 'src/server',
    imports: 'src/imports',
    helpers: 'src/imports/helpers',
  },
);
