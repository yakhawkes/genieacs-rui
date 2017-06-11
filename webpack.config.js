const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src/client/app')

const config = {
  context: APP_DIR,
  entry: ['webpack-hot-middleware/client', `${APP_DIR}/index.jsx`],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}

module.exports = config
