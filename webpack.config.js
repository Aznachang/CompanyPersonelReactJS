const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/testCode/index.jsx',
  output: {
    path: __dirname + '/testCode/build',
    filename: 'bundle.js'
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.json']
  // },
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
