const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Todo',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}