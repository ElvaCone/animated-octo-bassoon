const fs = require('fs')
const path = require('path')

fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) { // __dirname表示文件所处的目录的绝对路径
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr);
    console.log('-------------')
})

const pathStr = path.join(__dirname, '/a', '/b/c', '../', './d', 'e') // 以后凡是路径拼接都用path.join，不要再用加号拼接字符串
console.log(pathStr);
console.log('-------------')
