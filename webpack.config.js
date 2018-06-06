const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = {
  mode: 'development',
  entry: {
    'bundle.js': [
      path.resolve(__dirname, 'js/app.js')
    ],
    'bundle.css': [
      path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css'),
      path.resolve(__dirname, 'node_modules/font-awesome/css/font-awesome.min.css'),
      path.resolve(__dirname, 'css/app.css')
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
          // TODO: need to implement context
          // see https://github.com/pcardune/handlebars-loader/issues/126
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
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(['dist']),

    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin('[name].css'),

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
    })

    // https://github.com/jharris4/html-webpack-include-assets-plugin
    // new HtmlWebpackIncludeAssetsPlugin({
    //   assets: [
    //   ],
    //   append: false
    // })
  ]
}
