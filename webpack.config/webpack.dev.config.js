var path = require('path');
var webpack = require('webpack');

//为了路径中不出现 '/'， 使用path.resolve()比较稳。

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: path.resolve(__dirname, 'src')
    },
    output: {
        publicPath: '', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: '', //编译到当前目录
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        loaders: []
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: '../index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html', //html模板路径
            hash: false,
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
};