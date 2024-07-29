const express = require('express')
const router = require('./Router')

const app = express()

app.use('/api', router)

app.listen(8000, () =>{
    console.log('http://localhost:8000');
})