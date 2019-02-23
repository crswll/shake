const path = require('path');

module.exports = {
  entry: {
    withIndex: './src/with-index.js',
    withoutIndex: './src/without-index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
