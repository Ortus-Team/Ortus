var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
      // { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader", // Will inject the style tag if plugin fails
          loader: "css-loader!sass-loader",
        }),
      },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.scss']
  },
}
