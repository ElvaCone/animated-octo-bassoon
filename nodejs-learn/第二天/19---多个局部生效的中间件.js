const express = require('express')

const app = express()

const mw1 = (req, res, next) => {
    console.log('调用了第1个局部生效的中间件');
    next()
}

const mw2 = (req, res, next) => {
    console.log('调用了第2个局部生效的中间件');
    next()
}

app.get('/', mw1, mw2, (req, res) => { // 多个中间件可以用逗号分隔
    res.send('Home page')
})

app.get('/nav', [mw1, mw2], (req, res) => { // 多个中间件可以写成数组
    res.send('Nav page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
