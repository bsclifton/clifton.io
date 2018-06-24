const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./hbs/config.json')

module.exports = {
  mode: 'development',
  entry: {
    'bundle.js': [
      path.resolve(__dirname, 'js/app.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        // https://github.com/pcardune/handlebars-loader
        test: /\.hbs$/,
        use: [{
          loader: 'handlebars-loader',
          options: {
            helperDirs: [
              path.resolve(__dirname, 'hbs', 'helpers')
            ],
            partialDirs: [
              path.resolve(__dirname, 'hbs', 'partials')
            ]
          }
        }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    }
  },
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(['dist']),

    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),

    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: 'hbs/index.html.hbs',
      filename: 'index.html',
      ...config
    }),
    new HtmlWebpackPlugin({
      template: 'hbs/about.html.hbs',
      filename: 'about/index.html',
      ...config
    }),
    new HtmlWebpackPlugin({
      template: 'hbs/email.php.hbs',
      filename: 'about/email.php',
      ...config,
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: 'hbs/learn.html.hbs',
      filename: 'learn/index.html',
      ...config
    })
  ]
}
