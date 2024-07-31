const mysql = require('mysql')

// 创建数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 查询语句
db.query('select * from users', (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(results); // 得到数组，每个元素是一行数据
})

// 插入语句的原始写法
const user = {
    username: 'abb',
    password: 'bbb'
}
const sqlStr = 'insert into users (username, password) values (?, ?)' // 占位符
db.query(sqlStr, [user.username, user.password], (err, results) => { // 数组给占位符赋值
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) { // 影响行数
        console.log('插入成功！');
    }
})

// 插入语句的简化写法
const user2 = {
    username: 'abb',
    password: 'bbb'
}
const sqlStr2 = 'insert into users set ?' // 占位符
db.query(sqlStr2, user2, (err, results) => { // 对象给占位符赋值
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) { // 影响行数
        console.log('插入成功！');
    }
})

// 更新语句的原始写法
const user3 = {
    id: 5,
    username: 'ccc',
    password: 'c1c1c1'
}
const sqlStr3 = 'update users set username=?, password=? where id=?' // 占位符
db.query(sqlStr3, [user3.username, user3.password, user3.id], (err, results) => { // 数组给占位符赋值
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) { // 影响行数
        console.log('更新成功！');
    }
})

// 插入语句的简化写法
const user4 = {
    id: 5,
    username: 'ddd',
    password: 'd2d2d2'
}
const sqlStr4 = 'update users set ? where id=?' // 占位符
db.query(sqlStr4, [user4, user4.id], (err, results) => { // 数组给占位符赋值
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) { // 影响行数
        console.log('更新成功！');
    }
})

// 删除语句
const sqlStr5 = 'delete from users where id=?' // 占位符
db.query(sqlStr5, 5, (err, results) => { // 数字给占位符赋值
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) { // 影响行数
        console.log('删除成功！');
    }
})

// 标记删除
const sqlStr6 = 'update users set status=? where id=?' // 占位符
db.query(sqlStr6, [1, 4], (err, results) => { // 数组给占位符赋值
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) { // 影响行数
        console.log('标记删除成功！');
    }
})

