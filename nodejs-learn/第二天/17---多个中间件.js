const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('调用了第1个中间件');
    next()
})

app.use((req, res, next) => {
    console.log('调用了第2个中间件');
    next()
})

app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
