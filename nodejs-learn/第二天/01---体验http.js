const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    console.log('Someone visited!');
})

server.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000 !');
})