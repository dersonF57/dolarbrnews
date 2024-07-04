// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  // Adicione outras customizações aqui
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, 'src/components')
  })
  // Remova ou ajuste qualquer configuração inválida
);
