
var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {

  var newstype=req.query.newstype;
  var connection=mysql.createConnection({
     host:'localhost',
     port:3306,
     user:'root',
     password:'',
     database:'xampp'
  });
  connection.connect();
  res.header("Content-Type", "application/json; charset=utf-8");
  connection.query('SELECT * FROM `news` WHERE newstype=?',[newstype],function(err,rows,fields){
   res.json(rows);
  });
});
module.exports = router;
