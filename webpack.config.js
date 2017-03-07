const config = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
      path: './build',
      publicPath: 'build/',
  },
  resolveLoader: {
      moduleExtensions: ['-loader']
  },
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
  }
};

module.exports = config;