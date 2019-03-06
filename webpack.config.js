const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件 

module.exports = {
    entry: './src/js/entry.js',   // 入口文件
    output: {                     // 输出配置
        filename: 'bundle.js',      // 输出文件名
        path: path.resolve(__dirname, 'dist')   //输出文件路径配置 resolve(arg1, arg2)兩個參數前面不能帶“/”
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', //把css樣式加載到頁面中
                    'css-loader' //加載css文件
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader', //加載url對應的資源
                        options: {
                        limit: 8192    //文件大小小於8*1024byte時就自動轉換為base64編碼放在頁面對應位置  
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist' //内置服务器动态加载页面所在的目录
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
    ]
};