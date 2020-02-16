const path = require('path');

module.exports = {
  entry: './src/validate-color/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2'
  },
  mode: 'production'
};
