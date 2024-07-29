const express = require('express')

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body); // 不配置express.json的话req.body就为undefined
    res.send('Home page')
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
