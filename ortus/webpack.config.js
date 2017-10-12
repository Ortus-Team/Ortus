var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/* const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
}); */

var ip="localhost";
module.exports = {
  context: __dirname,

  entry: {
    Index: ['webpack-dev-server/client?http://' + ip + ':3000',
                 'webpack/hot/only-dev-server',
                './reactApp/src/index.js'
                ],
     vendors: ['react'],
  },
  output: {
      path: path.resolve('./reactApp/bundles/'),
      filename: "[name]-[hash].js",
      publicPath: 'http://localhost:3000/assets/bundles/',
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('app.css')
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
      // { test: /\.(s)*css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'sass-loader'], options: { modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]' } },
      {
          test: /\.scss$/,
          loaders: [ 'style', 'css', 'sass' ]
      }
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.scss'],
    root: [
      // path.resolve('./reactApp/src'),
      path.resolve('./reactApp')
    ]
  },
}
