const fs = require('fs')
const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { AutoUIPlugin } = require('./src/autoui-loader')

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
    entry: (function () {
      const entry = {}
      const mainPath = path.join(__dirname, 'src/main')
      fs.readdirSync(mainPath).forEach(function (name) {
        if (fs.statSync(path.join(mainPath, name)).isFile()) {
          entry[path.basename(name, path.extname(name))] = './src/main/' + name
        }
      });
      return entry
    })(),
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
        {
          test: /\.tsx$/,
          use: [
            {
              loader: path.resolve('./src/autoui-loader.js')
            }
          ],
        },
      ],
    },
    plugins: [
      new AutoUIPlugin(),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/assets", to: "assets" },
        ],
      }),
    ],
  }
}
