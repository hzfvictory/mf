const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devtool: false,
  entry: './src/main.js',
  mode: "development",
  output: {
    globalObject: 'window',
  },
  devServer: {
    port: 3000,
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
      name: "app1", // 应用的名称。在其他应用查找的时候，会在这个name的作用域下去查找对应的组件。
      filename: "remoteEntry.js", // 这些对外暴露的模块存放在哪个文件中。
      // 对外暴露的模块。只有对外暴露的相应的模块功能才能被使用。
      exposes: {
        './Header': "./src/components/Header.vue",
      },
      // shared: ['vue'] // 让远程加载的模块对应依赖改为使用本地项目的 vue
    })
  ]
}