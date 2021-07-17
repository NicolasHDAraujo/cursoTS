//instalado ts-loader webpack e webpack-cli -D
const path = require('path');

module.exports = {
  mode: 'development', //deixar webpack mais rapido para não minificar os arquivos em desenvolvimento
  entry: './src/A02-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  devtool: 'source-map', //incluido manualmente para apresentar a linha com erro
};
