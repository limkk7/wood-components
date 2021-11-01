const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'doc'),
  },
  entry: {
    example: './lib/example.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WoodUI',
      template: './lib/example.html',
      filename: 'index.html'
    })
  ],
})