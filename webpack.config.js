const config = {
  entry: './index.js',
  output: {
      filename: 'bundle.js',
      path: './build',
      publicPath: 'build/',
  },
  resolveLoader: {
      moduleExtensions: ['-loader']
  }
};

module.exports = config;