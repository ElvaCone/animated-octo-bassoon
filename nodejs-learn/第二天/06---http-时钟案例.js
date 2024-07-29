const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    const ext = path.extname(req.url)
    let fpath = path.join(__dirname, './files/clock', url)

    if (ext === 'html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
    } else if (ext === 'css') {
        res.setHeader('Content-Type', 'text/css; charset=utf-8')
    } else if (ext === 'javascript') {
        res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    }

    if (url === '/') {
        fpath = path.join(__dirname, './files/clock/index.html')
    }

    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) return res.end('404 not found!')
        res.end(dataStr);
    })
})

server.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000 !');
})
