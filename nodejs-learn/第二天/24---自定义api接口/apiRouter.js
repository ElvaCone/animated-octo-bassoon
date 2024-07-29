const express = require('express')

const apiRouter = express.Router()

apiRouter.get('/get', (req, res) => {
    const query = req.query
    res.send({
        status: 0,
        msg: 'GET请求成功！',
        data: query
    })
})

module.exports = apiRouter
