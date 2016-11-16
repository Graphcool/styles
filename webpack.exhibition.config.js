const webpack = require('webpack')
const cssnano = require('cssnano')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssSimpleVars = require('postcss-simple-vars')
const postcssInherit = require('postcss-inherit')
const postcssImport = require('postcss-import')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    exhibition: './exhibition/main.tsx',
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.ts(x?)$/,
      loader: 'tslint',
    }, {
      test: /\.css$/,
      exclude: /particles\.css/,
      loader: ExtractTextPlugin.extract({
        loader: 'css?modules!postcss',
      }),
    }, {
      test: /particles\.css$/,
      loader: ExtractTextPlugin.extract({
        loader: 'css?modules&localIdentName=[local]!postcss',
      }),
    }, {
      test: /\.ts(x?)$/,
      loader: 'awesome-typescript',
    }, {
      test: /icons\/.*\.svg$/,
      loader: 'raw!svgo',
    }],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'exhibition/index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          postcssImport(),
          postcssInherit,
          postcssSimpleVars({
            variables: () => require('./dist/variables/variables'),
          }),
          cssnano({
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions'],
            },
            discardComments: {
              removeAll: true,
            },
            safe: true,
          })
        ],
        svgo: {
          plugins: [
            {removeStyleElement: true},
          ],
        },
      }
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
}
