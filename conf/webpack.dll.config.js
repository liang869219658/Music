const webpack = require('webpack');

module.exports = {
  entry: {
    'react': ['react', 'react-dom'],
  },
  output: {
    path: './public/',
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: './public/[name]-manifest.json',
      name: '[name]_library',
    }),
  ],
  debug: true
}