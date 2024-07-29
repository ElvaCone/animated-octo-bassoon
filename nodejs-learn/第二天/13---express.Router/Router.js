const express = require('express')

const router = express.Router()

router.get('/user/list', (req, res) => {
    res.send('/user/list')
})

router.post('/user/add', (req, res) => {
    res.send('/user/add')
})

module.exports = router
