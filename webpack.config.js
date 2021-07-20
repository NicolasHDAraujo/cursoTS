//instalado ts-loader webpack e webpack-cli -D
const path = require('path');

module.exports = {
  mode: 'development', //deixar webpack mais rapido para não minificar os arquivos em desenvolvimento
  entry: './src/A02-webpackexercicio/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: ['tsconfig.frontend.json'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map', //incluido manualmente para apresentar a linha com erro
};
