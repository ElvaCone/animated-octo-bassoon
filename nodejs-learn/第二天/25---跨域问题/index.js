const express = require('express')
const apiRouter = require('./apiRouter')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/api/jsonp', (req, res) => { // 必须先定义 JSONP 接口，再配置 CORS 中间件。否则，JSONP 接口会被 CORS 中间件处理，导致其行为发生变化
    const funcName = req.query.callback
    const data = { name: 'Tom', age: 18 }
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr)
})

app.use(cors({
    origin: 'http://example.com',
    credentials: true  // 允许携带 Cookies 等凭证信息，允许凭证时，origin 不能为 *，必须指定一个具体的域
}));

app.use('/api', apiRouter)

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
