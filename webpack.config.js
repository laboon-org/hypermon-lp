const path = require('path'); // lấy đường dẫn tuyệt đối của thư mục

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)$/,
      },
      {
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: {crypto: false},
  },
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader?limit=100000',
};
module.exports = config;
