const express = require('express')
const apiRouter = require('./apiRouter')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/api/jsonp', (req, res) => {
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
