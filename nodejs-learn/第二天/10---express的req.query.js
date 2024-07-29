const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(req.query) // 获取到url中字符串形式的查询参数，没有就是空对象
})

app.listen(8000, () => {
    console.log('express server running at http://localhost:8000');
})

