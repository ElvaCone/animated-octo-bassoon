const express = require('express')
const myBodyParser = require('./myBodyParser')

const app = express()

app.use(myBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
