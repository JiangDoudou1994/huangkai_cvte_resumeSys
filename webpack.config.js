var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// //为了路径中不出现 '/'， 使用path.resolve()比较稳。
var SRC_PATH = path.resolve(__dirname, 'src');
var APP_PATH = path.resolve(SRC_PATH, 'index');
var PUBLIC_PATH = path.resolve(__dirname, 'bundle');

module.exports = {
    // devtool: 'cheap-module-eval-source-map',
    entry: {
        app: APP_PATH,
    },
    output: {
        publicPath: '', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: PUBLIC_PATH, //编译到当前目录
        filename: 'assets/[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        rules: [
            {
                test: /\.js[x]$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','es2015','stage-1']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path.
            template: './src/index.temp.html', //html模板路径
            hash: false,
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
};