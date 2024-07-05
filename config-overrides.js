// config-overrides.js
const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');
const path = require('path');

module.exports = override(
  // Adicione os aliases do Webpack
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    crypto: false,
    stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
    assert: path.resolve(__dirname, 'node_modules/assert'),
    http: path.resolve(__dirname, 'node_modules/stream-http'),
    https: path.resolve(__dirname, 'node_modules/https-browserify'),
    os: path.resolve(__dirname, 'node_modules/os-browserify/browser'),
    url: path.resolve(__dirname, 'node_modules/url')
  }),
  // Adicione o plugin do Webpack
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  )
);
