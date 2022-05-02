const path = require('path');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const COPY_PLUGIN = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const eslintPlugin = require('eslint-webpack-plugin'); 

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
      open: true,
      port: 8080,
      contentBase: path.join(__dirname, 'src'),
    },
  };
  
  const esLintPlugin = (isDev) => isDev ? [] : [ new eslintPlugin({ extensions: ['ts', 'js'] }) ];

  module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext]',
    },
  module: {
    rules: [
      /*{
        test: /\.[tj]s?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },*/
      {
        test: /\.(?:ico|gif|png|svg|jpg|jpeg)$/i,
        type: 'assets/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] 
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    ...esLintPlugin(development),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
    new HTML_WEBPACK_PLUGIN({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAsset: false }),
  ],
  ...devServer(development)
});
