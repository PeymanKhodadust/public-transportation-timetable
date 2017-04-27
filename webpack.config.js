const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackNotifierPlugin = require("webpack-notifier");
var webpack = require("webpack");


const extractLess = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: path.resolve(__dirname, ""),
  entry: {
      index: "./src/index.tsx",
      main: './src/main.less'
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    chunkFilename: "[id].js",
    sourceMapFilename: "[file].map"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less", ".css"]
  },
  module: {
    rules: [{
        test: /\.less$/,
        use: extractLess.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
           use: 'css-loader'
         })
      },
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '10000',
            mimetype: 'image/[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                   require("autoprefixer")
                ],
                tslint: {
                    failOnHint: false
                }
            }
        }),
        new WebpackNotifierPlugin(),
        extractLess

    ],


};

function SuppressEntryChunksPlugin(options) {
    this.options = options;
}

SuppressEntryChunksPlugin.prototype.apply = function (compiler) {
    const options = this.options;

    compiler.plugin('emit', function (compilation, callback) {
        compilation.chunks.forEach(function (chunk) {
            if (options.indexOf(chunk.name) >= 0) {
                chunk.files.forEach(function (file) {
                    if (file.indexOf('.js') !== -1) {
                        delete compilation.assets[file];
                    }
                });
            }
        });
        callback();
    });
};

