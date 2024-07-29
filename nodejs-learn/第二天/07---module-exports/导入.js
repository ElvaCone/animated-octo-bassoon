const m1 = require('./被导入') // require得到的是module.exports

console.log(m1);
m1.sayHi()
