module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(woff2?|otf|ttf)$/,
        use: { loader: 'file-loader', options: { name: 'fonts/[name]-[hash].[ext]' } },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: { loader: 'url-loader', options: { limit: 1, name: '[path][name]-[hash].[ext]' } },
      },
    ],
  },
};
