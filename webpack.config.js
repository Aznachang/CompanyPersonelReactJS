var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './testCode/index.jsx',
  output: {
    path: './testCode/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel-loader?presets[]=react,presets[]=es2015'
        ]
      }
    ]
  }
}
