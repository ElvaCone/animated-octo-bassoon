const express = require('express')
const jwt = require('jsonwebtoken')
const { expressjwt: expressJwt } = require('express-jwt') // 注意用解构（expressjwt不能改成其它名字），否则报错
const cors = require('cors')

const app = express()

const secretKey = 'xxxxxxxxxxx' // 任意字符串

app.use(cors()) // CORS
app.use(express.urlencoded({ extended: false })) // 解析post表单数据

app.use(expressJwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] })) // 配置成功了就有req.auth

app.post('/api/login', (req, res) => {
    const user = req.body

    if (user.username !== 'admin' || user.password !== '00000000') {
        return res.send({
            status: 1,
            msg: '登录失败！'
        })
    }

    const tokenStr = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' }) // 生成JWT

    res.send({
        status: 200,
        msg: '登录成功！',
        token: tokenStr
    })
})

app.get('/admin/getinfo', (req, res) => { //客户端每次在访问需要权限的接口时都需要主动通过请求头中的Authorization字段将Token字符串发送到服务器进行身份认证，Authorization的值不仅是JWT而是JWT前面加Bearer和一个空格
    console.log(req.auth);
    res.send({
        status: 200,
        msg: '获取用户信息成功！',
        data: req.auth
    })
})

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') { // JWT 令牌无效或缺失
        res.send({
            status: 401,
            msg: '无效的token！'
        })
    }
    res.send({
        status: 500,
        msg: '未知错误！'
    })
})

app.listen(8000, () => {
    console.log('http://localhost:8000');
})
