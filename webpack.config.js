var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, 'src/client/app')

var config = {
  context: APP_DIR,
  entry: ["webpack-hot-middleware/client", APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: 'index.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use : 'babel-loader'
      },
      {
        test: /\.css$/,
        include : APP_DIR,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = config
