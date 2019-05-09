const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    mode: env.NODE_ENV || 'development',
    devtool: 'source-map',
    entry: {
      "ffp.es5": "./ffp-browser.js",
      "ffp.es5.min": "./ffp-browser.js"
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
      })]
    }
  }
};