const path = require('path');

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)$/,
      },
      {
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[hash]_[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: { crypto: false },
  },
};
module.exports = config;
