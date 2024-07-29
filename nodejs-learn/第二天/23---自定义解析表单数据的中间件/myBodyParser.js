const queryString = require('querystring')
const myBodyParser = (req, res, next) => {
    let str = ''
    req.on('data', (chunk) => { // 有数据发送过来
        str += chunk
    })
    req.on('end', () => { // 数据发送结束了
        req.body = queryString.parse(str)
        next()
    })
}

module.exports = myBodyParser
