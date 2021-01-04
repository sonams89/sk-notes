const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline:true,
    port: 8008
  },
  module:{
    rules:[
      {test: /\.js?$/,
        use: {
            loader: 'babel-loader'
      }, exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
};