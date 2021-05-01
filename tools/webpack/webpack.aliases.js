const { createWebpackAliases } = require('./webpack.helpers');

// Export aliases
module.exports = createWebpackAliases(
  {
    src: 'src',
    client: 'src/client',
    assets: 'src/client/assets',
    layouts: 'src/client/layouts',
    pages: 'src/client/pages',
    components: 'src/client/components',
    server: 'src/server',
    imports: 'src/imports',
    helpers: 'src/imports/helpers',
  },
);
