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

app.use(cors())

app.use('/api', apiRouter)

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
