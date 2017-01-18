var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'xampp'
});
/* 后台路由页面 */
//获取所有新闻列表
router.get('/getnews', function(req, res, next) {
	connection.query('SELECT * FROM `news`',function(err,rows){
		res.json(rows);
	});
});
//删除新闻
router.post('/delete',function(req, res) {
	var newsid=req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `newsid`=?',[newsid],function(err,result){
		res.json(result);
	});
});
//添加新闻
router.post('/insert', function(req, res) {

	var newstype=req.body.newstype,
	newstitle=req.body.newstitle,
	newsimg=req.body.newsimg,
	newscontent=req.body.newscontent,
	newstime=req.body.newstime,
	newssrc=req.body.newssrc;
	connection.query('INSERT INTO `news` ( `newstype`,`newstitle`, `newsimg`, `newscontent`, `newstime`,`newssrc`) VALUES (?,?,?,?,?,?)',[newstype,newstitle,newsimg,newscontent,newstime,newssrc],function(err,result){
		if (!err) {
			res.json(result);
		}
	});
});

//更新新闻
router.post('/update', function(req, res) {
	var newsid=req.body.newsid,
	newstitle=req.body.newstitle,
	newstype=req.body.newstype,
	newscontent=req.body.newscontent,
	newsimg=req.body.newsimg,
	newstime=req.body.newstime,
	newssrc=req.body.newssrc;
	connection.query('UPDATE `news` SET `newstype`=?,`newstitle`=?,`newscontent`=?,`newsimg`=?,`newstime`=?, `newssrc`=? WHERE `newsid`=?',[newstype,newstitle,newscontent,newsimg,newstime,newssrc,newsid],function(err,rows){
		res.json(rows);
	});
});

//模态框取值
router.get('/curnews', function(req, res) {
	var newsid=req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE newsid=?',[newsid],function(err,rows){
		res.json(rows);
	});
});

module.exports = router;
