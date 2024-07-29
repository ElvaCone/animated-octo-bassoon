const express = require('express')

const app = express()

const mw = (req, res, next) => {
    console.log('这是一个最简单的中间件');
    next()
}

app.use(mw) // 也可以不定义函数变量直接把函数写这里

app.get('/', (req, res) => {
    console.log('/');
    res.send('Home page')
})

app.get('/user', (req, res) => {
    console.log('/user');
    res.send('User page')
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
