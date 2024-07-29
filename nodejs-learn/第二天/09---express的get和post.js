const express = require('express')

const app = express()

app.get('/user', (req, res) => {
    res.send({ name: 'Tom', age: 18, gender: '男' })
})

app.post('/user', (req, res) => {
    res.send('post请求成功！')
})

app.listen(8000, () => {
    console.log('express server running at http://localhost:8000');
})

