const webpack = require('webpack')
const cssnano = require('cssnano')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssSimpleVars = require('postcss-simple-vars')
const postcssInherit = require('postcss-inherit')
const postcssImport = require('postcss-import')

module.exports = {
  entry: {
    app: './index.ts',
  },
  output: {
    path: './dist',
    filename: 'build.js',
    publicPath: '/',
    library: 'graphcool-styles',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
			commonjs2: 'react',
			amd: 'React',
			root: 'React',
    },
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.ts(x?)$/,
      loader: 'tslint',
    }, {
      test: /\.css/,
      loader: ExtractTextPlugin.extract({
        loader: 'css?modules!postcss'
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
