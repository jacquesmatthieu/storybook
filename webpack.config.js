const path = require('path');
const { DefinePlugin, ContextReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env = {}) => ({
  entry: {
    boot: './app.jsx',
  },
  context: path.resolve(__dirname, './packages/app/src'),
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json'],
  },
  output: {
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true,
    })],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|otf|ttf)$/,
        use: { loader: 'file-loader', options: { name: 'fonts/[name]-[hash].[ext]' } },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: { loader: 'url-loader', options: { limit: 1, name: '[path][name]-[hash].[ext]' } },
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
  devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
  mode: env.production ? 'production' : 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9090,
    historyApiFallback: true,
    proxy: {
      '/auth/oauthLogin': 'http://localhost:5000',
      '/auth/login': 'http://localhost:5000',
      '/graphql': 'http://localhost:5000',
      '/uploadTransportReceipt': 'http://localhost:5000',
      '/files/*': 'http://localhost:5000',
      '/locales/*': 'http://localhost:5000',
    },
  },
  plugins: [
    ...(env.production ? [] : [new ErrorOverlayPlugin()]),
    new CleanWebpackPlugin(['./dist']),
    new ContextReplacementPlugin(/moment[/\\]locale$/, /fr/),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new WebpackPwaManifest({
      name: 'Arborescence',
      short_name: 'Arborescence',
      description: 'LinkValue\'s greatest achievement',
      theme_color: '#f5f9fa',
      background_color: '#f5f9fa',
      icons: [
        {
          src: path.resolve('./packages/app/src/assets/images/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new FaviconsWebpackPlugin('./assets/images/icon.png'),
    new DefinePlugin({ 'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV || process.env.NODE_ENV) }),
  ],
});
