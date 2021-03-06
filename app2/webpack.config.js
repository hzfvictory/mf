const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devtool: false,
  entry: './src/main.js',
  mode: "development",
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new ModuleFederationPlugin({
      name: "app2",
      // 一个映射管理，将其他远程的名称映射成本地的别名。例如上面的我们将其他远程项目 app1 映射成了本地的 app_one
      remotes: {
        app_one: "app1@http://localhost:3000/remoteEntry.js",
      }
    })
  ]
}