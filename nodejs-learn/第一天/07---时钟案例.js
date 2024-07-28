const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/ // 正则表达式中的斜杠需要转义
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './files/clock/index-素材.html'), 'utf-8', (err, dataStr) => {
    if (err) return console.log('读取素材失败！' + err.message);

})

function resolveCSS(dataStr) {
    const arr = regStyle.exec(dataStr)
    const newCSS = arr[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './files/clock/index.css'), newCSS, 'utf-8', (err) => {
        if (err) return console.log('写入CSS失败！' + err.message);
        console.log('写入CSS成功！');
    })
}
