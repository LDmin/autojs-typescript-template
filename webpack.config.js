const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => {
  return {
    resolve: {
      modules: ['./node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@base': path.resolve(__dirname, 'src/base'),
        '@main': path.resolve(__dirname, 'src/main'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      main: './src/main/main.ts',
      example: './src/main/example.ts',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/assets", to: "assets" },
        ],
      }),
    ],
  }
}
