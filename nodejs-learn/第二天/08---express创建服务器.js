const express = require('express')

const app = express()

app.listen(8000, () => {
    console.log('express server running at http://localhost:8000');
})