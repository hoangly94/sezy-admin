import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// const commonPaths = require('./config/paths');

export default {
  name: "local",
  mode: 'development',
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: '[name].js'
 },
  node:{
    // tls: 'empty',
    // Buffer: true,
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        // include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
                // localIdentName: '[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]_[hash]',
              runtimeCompat: false,
              prefixize: true,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '[hash].[ext]',
        },
      },
      {
        test: /\.ico$/i,
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: 'favicon.ico',
        },
      },
    ],
  },
  resolve: {
    // modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
    extensions: ['.tsx', '.ts', '.js', '.jsx', ".css"],
    // modules: ['node_modules'],
    alias: {
      '~config': path.resolve(__dirname, 'config/'),
      '@config': path.resolve(__dirname, 'config/index.ts'),
      '~components': path.resolve(__dirname, 'src/components/'),
      '~pages': path.resolve(__dirname, 'src/pages/'),
      '~stores': path.resolve(__dirname, 'src/stores/'),
      '~utils': path.resolve(__dirname, 'src/utils/'),
      '@utils': path.resolve(__dirname, 'src/utils/index.ts'),
      '@hocs': path.resolve(__dirname, 'src/hocs/index.tsx'),
      '@hooks': path.resolve(__dirname, 'src/hooks/index.tsx'),
    },
    fallback: { "stream": false },
  },
  devtool: 'eval-source-map',
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // historyApiFallback: true,
    // contentBase: commonPaths.devServerContentBase,
    compress: true, 
    port: 4000,
    watchContentBase: true,
    historyApiFallback: true,
  },
};

