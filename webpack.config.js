const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true')),
  'process.env': {
    API_URL: JSON.stringify(process.env.API_URL || 'http://localhost:3000/')
  }
});

const stylesheetsLoaders = [
  { loader: 'style-loader' },
  { loader: 'css-loader'
  }
];

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    filename: '[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [htmlWebpackPlugin, definePlugin],
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        use: stylesheetsLoaders
      }, {
        test: /\.scss$/,
        use: [...stylesheetsLoaders, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      }, {
        test: /\.sass$/,
        use: [...stylesheetsLoaders, {
          loader: 'sass-loader',
          options: {
            indentedSyntax: 'sass',
            sourceMap: true
          }
        }]
      }, {
        test: /\.less$/,
        use: [...stylesheetsLoaders, {
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }]
      }, {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]",
          },
        },
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api*': 'http://localhost:8181'
    }
  }
};
