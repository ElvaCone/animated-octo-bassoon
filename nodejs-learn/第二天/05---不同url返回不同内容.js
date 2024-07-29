const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    let content = '<h1>404 not found!</h1>'
    if (url === '/' | url === '/index.html') {
        content = '首页'
    } else if (url === '/about.html') {
        content = '关于'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8') // 解决中文乱码
    res.end(content);
})

server.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000 !');
})
