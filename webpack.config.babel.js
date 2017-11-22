import path from 'path'

export default {
  context: __dirname,
  entry: [
    './src/index.js',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-app.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: path.resolve(__dirname, 'node_modules') },
    ],
  },
  devtool: 'source-map',
}