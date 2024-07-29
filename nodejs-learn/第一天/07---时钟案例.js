const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/ // 正则表达式中的斜杠需要转义
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './files/clock/index-素材.html'), 'utf-8', (err, dataStr) => {
    if (err) return console.log('读取素材失败！' + err.message);
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(dataStr) {
    const arr = regStyle.exec(dataStr)
    const newCSS = arr[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './files/clock/index.css'), newCSS, 'utf-8', (err) => {
        if (err) return console.log('写入CSS失败！' + err.message);
        console.log('写入CSS成功！');
    })
}

function resolveJS(dataStr) {
    const arr = regScript.exec(dataStr)
    const newJS = arr[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './files/clock/index.js'), newJS, 'utf-8', (err) => {
        if (err) return console.log('写入JS失败！' + err.message);
        console.log('写入JS成功！');
    })
}

function resolveHTML(dataStr) {
    const newHTML = dataStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './files/clock/index.html'), newHTML, 'utf-8', (err) => {
        if (err) return console.log('写入HTML失败！' + err.message);
        console.log('写入HTML成功！');
    })
}
