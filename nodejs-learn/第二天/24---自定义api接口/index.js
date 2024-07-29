const express = require('express')
const apiRouter = require('./apiRouter')

const app = express()

app.use('/api', apiRouter)

app.listen(8000, () => {
    console.log('express server running at http://127.0.0.1:8000');
})
