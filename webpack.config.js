const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HandlebarsPlugin = require('handlebars-webpack-plugin')
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
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      query: {
        helperDirs: [
          path.join(__dirname, 'hbs', 'helpers')
        ],
        partialDirs: [
          path.join(__dirname, 'hbs', 'partials')
        ]
      },
    }]
  },
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(['dist']),

    // https://github.com/sagold/handlebars-webpack-plugin
    // new HandlebarsPlugin({
    //   entry: path.join(process.cwd(), 'hbs', '*.hbs'),
    //   output: path.join(paths.DIST, '[name]'),
    //   data: path.join(paths.ROOT, 'hbs', 'config.json'),
    //   partials: [
    //     path.join(process.cwd(), 'hbs', 'partials', '*.hbs')
    //   ],
    //   helpers: {
    //     projectHelpers: path.join(process.cwd(), 'hbs', 'helpers', '*.js')
    //   }
    // }),

    new HtmlWebpackPlugin({
      template: 'hbs/index.html.hbs'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['css/app.css'],
      append: false
    })
  ]
}
