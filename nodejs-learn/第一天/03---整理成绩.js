const fs = require('fs')

fs.readFile('./files/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取失败！' + err.message);
    }
    const oldArr = dataStr.split(' ')
    let newArr = oldArr.map((item) => item.replace('=', '：'))
    const newStr = newArr.join('\n')
    fs.writeFile('./files/成绩-ok.txt', newStr, 'utf-8', (err) => {
        if (err) {
            console.log('写入失败！' + err.message);
        }
        console.log('写入成功！');
    })
})
