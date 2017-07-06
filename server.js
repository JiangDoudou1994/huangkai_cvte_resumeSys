var path = require('path');
var express = require('express');

var app = express();

app.get('*',function(req,res) {
    res.sendFile(__dirname+'/index.html')
})

app.listen(8081,function(req,res) {
    console.log('服务器正常启动')
})