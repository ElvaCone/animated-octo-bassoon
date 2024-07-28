const path = require('path')

const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath) // 获取完整文件名
console.log(fullName);

const nameWithoutExt = path.basename(fpath, '.html') // 获取去掉扩展名的文件名
console.log(nameWithoutExt);
