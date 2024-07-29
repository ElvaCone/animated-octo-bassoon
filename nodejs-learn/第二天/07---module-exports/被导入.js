const age = 18

const uname = 'Tom'

module.exports.sayHi = () => {
    console.log(`Hello, ${uname}!`)
    console.log(module.exports === exports); // true module.exports和exports初始指向同一个对象
}

module.exports.age = age
exports.uname = uname
