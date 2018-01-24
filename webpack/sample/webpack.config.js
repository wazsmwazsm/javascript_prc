module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js", // 唯一入口文件
    output: {
        path: __dirname + "/public", // 打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
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
                    }
                ]
            }
        ]
    }
}
