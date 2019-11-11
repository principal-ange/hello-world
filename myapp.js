var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'w.rdc.sae.sina.com.cn',
    post: 3306,
    user: '5z0k2xll4n',
    password: 'w00wmhwlkmh2xk3xmk44ihl31i4jii0wz44j30iy',
    database: 'app_papic'
});

applicationCache.post("/register", function(req,res){
    console.log('[INFO] 收到来自 ' + req.body.name + ' 同学的报名表，写入数据库中');
    connection.query("INSERT INTO" `training` (`name`,`schoolnumber`,`department`) VALUES ('" + req.body.name"','" + req.body.schoolnumber + "','" + req.body.department + "');", function(err){
        if(err) {
            console.log('[ERROR] 写入数据库失败！');
            console.log('[ERROR] 错误内容：' + err.message);
            res.end();
        } else {
            console.log('[INFO] 完成');
            res.write("1");
            res.end();
        }
    });
});
