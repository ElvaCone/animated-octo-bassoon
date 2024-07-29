const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    res.setHeader('Content-Type', 'text/html; charset=utf-8') // 解决中文乱码
    res.end(`请求路径：${url} 请求类型：${method}`);
})

server.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000 !');
})
