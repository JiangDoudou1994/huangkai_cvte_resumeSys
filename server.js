var path = require('path');
var express = require('express');

var BUNDLE_PATH = path.resolve(__dirname, 'bundle');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(BUNDLE_PATH + '/index.html')
})

app.use(express.static(BUNDLE_PATH));


app.listen(8081, function (req, res) {
    console.log('服务器正常启动')
})