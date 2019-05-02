const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        enforce: "pre", test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/favicon.ico"
    })
  ]
};
