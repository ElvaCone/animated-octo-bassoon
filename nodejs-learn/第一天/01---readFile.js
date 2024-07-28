const fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) { // 编码类型是可选参数可以不写
    console.log(err) // 读取成功则为null
    console.log(dataStr) // 读取成功则为文件内容
    console.log('-------------')
})

fs.readFile('./files/11.txt', 'utf8', function (err, dataStr) {
    console.log(err) // 读取失败则为错误对象
    console.log(dataStr) // 读取失败则为undefined
    console.log('-------------')
})

fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr);
    console.log('-------------')
})

fs.readFile('./files/11.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr);
    console.log('-------------')
})
