const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // The name of the bundled output file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-private-property-in-object',
              '@babel/plugin-syntax-import-assertions',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow both .js and .jsx files
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      return middlewares;
    },
  },
};
