const express = require('express')

const app = express()

const mw = (req, res, next) => {
    req.startTime = new Date()
    next()
}

app.use(mw) // 也可以不定义函数变量直接把函数写这里

app.get('/', (req, res) => {
    res.send('Home page ' + req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User page ' + req.startTime)
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
