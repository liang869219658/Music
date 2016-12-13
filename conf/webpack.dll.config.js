const webpack = require('webpack');
const path = require('path');
let publicPath = path.resolve(__dirname,'../public/');
module.exports = {
  entry: {
    'react': ['react', 'react-dom'],
  },
  output: {
    path: publicPath,
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname,'../public/[name]-manifest.json'),
      name: '[name]_library',
    }),
  ],
  debug: true
}