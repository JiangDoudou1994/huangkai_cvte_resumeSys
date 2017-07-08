var path = require('path');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
// var hrm = require('webpack-hot-middleware');
var webpack =require('webpack');

//注意当前文件的引入路径
var config = require('./webpack.config.js')
var compiler = webpack(config);

var BUNDLE_PATH = path.resolve(__dirname, 'bundle');
var app = express();

app.use(webpackDevMiddleware(compiler, {
  // configuration可以配置在这儿，也可以配置在config文件中。
  publicPath: config.output.publicPath, // Same as `output.publicPath` in most cases.
}));

// app.use(require("webpack-hot-middleware")(compiler))


app.use(express.static(BUNDLE_PATH));


app.get('/', function (req, res) {
    res.sendFile(BUNDLE_PATH + '/index.html')
})


app.listen(8081, function (req, res) {
    console.log('服务器正常启动')
})