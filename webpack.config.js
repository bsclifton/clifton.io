const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = {
  entry: path.join(__dirname, 'js', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      // https://github.com/pcardune/handlebars-loader
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      // TODO: need to implement context
      // see https://github.com/pcardune/handlebars-loader/issues/126
      query: {
        helperDirs: [
          path.join(__dirname, 'hbs', 'helpers')
        ],
        partialDirs: [
          path.join(__dirname, 'hbs', 'partials')
        ]
      }
    }]
  },
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(['dist']),

    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: 'hbs/index.html.hbs',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'hbs/about.html.hbs',
      filename: 'about/index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'hbs/email.php.hbs',
      filename: 'about/email.php',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: 'hbs/learn.html.hbs',
      filename: 'learn/index.html'
    }),

    // https://github.com/jharris4/html-webpack-include-assets-plugin
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'css/app.css'
      ],
      append: false
    })
  ]
}
