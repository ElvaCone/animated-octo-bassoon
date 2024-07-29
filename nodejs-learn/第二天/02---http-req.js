const http = require('http')

const server = http.createServer()

server.on('request', (req) => {
    const url = req.url // 从斜杠根目录开始，不包含前面的域名
    const method = req.method
    console.log(url);
    console.log(method);
})

server.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000 !');
})
