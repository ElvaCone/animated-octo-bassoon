const express = require('express')

const app = express()

app.get('/', (req, res) => {
    throw new Error('服务器内部发生了错误')
    res.send('Home page')
})

// 错误级别的中间件必须注册在所有路由之后
app.use((err, req, res, next) => { // 错误级别的中间件必须有4个形参 err req res next
    console.log('发生了错误：' + err.message);
    res.send('发生了错误：' + err.message);
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
