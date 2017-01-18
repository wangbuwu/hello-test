vvar express = require('express');
var app = express();

var mysql = require('mysql');
//配置模块
var settings = require('settings');
//连接数据库
var connection = mysql.createConnection(settings.db);
connection.connect();

//查询
var selectSQL = 'select * from `news`';

var arr = [];
connection.query(selectSQL, function(err, rows) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
        arr[i] = rows[i].name;
    }

    //把搜索值输出
    app.get('/', function(req, res) {
        res.send(arr);
    });


});
//关闭连接
connection.end();
app.listen(3000);