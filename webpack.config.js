const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module:{
    rules:[
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
            loader: 'awesome-typescript-loader'
        }
      },
      {
        test:/\.(scss|sass|css)$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}
