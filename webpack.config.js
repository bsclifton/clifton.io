const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HandlebarsPlugin = require('handlebars-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'js'),
  ROOT: path.resolve(__dirname)
}

module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(['dist']),

    // https://github.com/sagold/handlebars-webpack-plugin
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), 'hbs', '*.hbs'),
      output: path.join(paths.DIST, '[name]'),
      data: path.join(paths.ROOT, 'hbs', 'config.json'),
      partials: [
        path.join(process.cwd(), 'hbs', 'partials', '*.hbs')
      ],
      helpers: {
        projectHelpers: path.join(process.cwd(), 'hbs', 'helpers', '*.js')
      }
    })

    // ,new HtmlWebpackPlugin({
    //   template: 'dist/index.html'
    // })
  ]
}
