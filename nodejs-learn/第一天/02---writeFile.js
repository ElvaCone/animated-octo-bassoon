const fs = require('fs')

fs.writeFile('./files/2.txt', 'abcd', 'utf-8', function (err) { // 编码类型是可选参数可以不写
    console.log(err); // 写入成功则为null
    console.log('-------------')
})

fs.writeFile('f:/xxxx', 'abcd', 'utf-8', function (err) { // 编码类型是可选参数可以不写
    console.log(err); // 写入失败则为错误对象
    console.log('-------------')
})

fs.writeFile('./files/2.txt', 'abcd', 'utf-8', function (err) {
    if (err) {
        return console.log('写入文件失败！' + err.message)
    }
    console.log('写入文件成功！');
    console.log('-------------')
})

fs.writeFile('f:/xxxx', 'abcd', 'utf-8', function (err) {
    if (err) {
        return console.log('写入文件失败！' + err.message)
    }
    console.log('写入文件成功！');
    console.log('-------------')
})
