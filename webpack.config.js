const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: '.',
    watchContentBase: true,
    port: 8022,
    inline: true,
    hot: true
  }
}