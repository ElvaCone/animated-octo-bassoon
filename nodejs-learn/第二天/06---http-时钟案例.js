const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    
    let fpath = path.join(__dirname, './files/clock', url)

    if (url === '/') {
        fpath = path.join(__dirname, './files/clock/index.html')
    }

    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        // res.setHeader('Content-Type', 'text/html; charset=utf-8') // 不能写，否则css不起效
        if (err) return res.end('404 not found!')
        res.end(dataStr);
    })
})

server.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000 !');
})
