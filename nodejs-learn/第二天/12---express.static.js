const express = require('express')

const app = express()

app.use(express.static('./files/clock/')) // 托管一个静态资源目录
app.use(express.static('./')) // 查找时按顺序查找，上一个静态资源目录找不到再找这一个静态资源目录
app.use('/home', express.static('./')) // 挂载路径前缀

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
