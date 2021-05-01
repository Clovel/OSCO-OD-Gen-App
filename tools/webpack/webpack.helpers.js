/* Imports --------------------------------------------- */
const path = require('path');
const cwd = process.cwd();

/* Webpack helper functions ---------------------------- */
const createWebpackAliases = (pAliases) => {
  const lResult = {};
  for(const lAliasName in pAliases) {
    lResult[lAliasName] = path.join(
      cwd,
      pAliases[lAliasName],
    );
  }
  return lResult;
};

/* Export Webpack helper functions --------------------- */
module.exports = {
  createWebpackAliases,
};
