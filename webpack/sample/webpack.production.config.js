const webpack = require('webpack');
// 此插件依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 用于优化的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 去除 build 文件中的残余文件的插件
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    devtool: 'null',
    entry: __dirname + "/app/main.js", // 唯一入口文件
    output: {
        path: __dirname + "/public", // 打包后的文件存放的地方
        filename: "bundle-[hash].js" //打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /(\.ksx|\.js$)/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用 css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'), // 添加版权声明的插件
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
}
