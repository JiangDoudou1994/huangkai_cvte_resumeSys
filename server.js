var path = require('path');
var express = require('express');

var STATIC_PATH = path.resolve(__dirname, 'bundle')
var app = express();

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/bundle/index.html')
})

const publicPath = express.static(path.join(__dirname, '/bundle/assets'));

app.use('/bundle', publicPath);


app.listen(8081, function (req, res) {
    console.log('服务器正常启动')
})