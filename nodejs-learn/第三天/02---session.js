const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({ // 配置成功了就有req.session
    secret: 'xxxxx', // 任意字符串
    resave: false,
    saveUninitialized: true
}))

app.post('/api/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '00000000') {
        return res.send({
            status: 1,
            msg: '登录失败！'
        })
    }

    req.session.user = req.body
    req.session.isLogin = true
    res.send({
        status: 0,
        msg: '登录成功！'
    })
})

app.get('/api/username', (req, res) => {
    if (!req.session.isLogin) {
        return res.send({
            status: 1,
            msg: '请先登录！'
        })
    }

    res.send({
        status: 0,
        msg: '已登录！',
        username: req.session.user.username
    })
})

app.post('/api/logout', (req, res) => {
    req.session.destroy()

    res.send({
        status: 0,
        msg: '退出登录成功！'
    })
})

app.listen(8000, () => {
    console.log('http://localhost:8000');
})
