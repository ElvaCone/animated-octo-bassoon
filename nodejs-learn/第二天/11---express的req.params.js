const express = require('express')

const app = express()

app.get('/user/:id/:name/nothing/:age/:gender', (req, res) => {
    console.log(req.params);
    res.send(req.params) // 获取到url中通过冒号匹配到的动态参数，没有就是空对象
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})

