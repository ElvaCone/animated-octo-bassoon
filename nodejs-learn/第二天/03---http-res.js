const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    res.end(`${url} ${method}`); // 返回信息给客户端并结束本次请求
})

server.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000 !');
})
