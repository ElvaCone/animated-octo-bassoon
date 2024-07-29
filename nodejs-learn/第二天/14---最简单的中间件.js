const express = require('express')

const app = express()

const mw = (req, res, next) => {
    console.log('这是一个最简单的中间件');
    next() // 将流转关系转交给下一个中间件或路由
}

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
