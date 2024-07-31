const argon2 = require('argon2')

const plaintextPassword = '123456'
let hashedPassword = ''

async function hashPassword(plaintextPassword) {
    try {
        hashedPassword = await argon2.hash(plaintextPassword) // 得到加密后的字符串
        console.log(hashedPassword);
    } catch (err) {
        console.log(err.message);
    }
}

async function verifyPassword(hashedPassword, plaintextPassword) {
    try {
        const match = await argon2.verify(hashedPassword, plaintextPassword) // 得到是否匹配的布尔值
        console.log(match);
    } catch (err) {
        console.log(err.message);
    }
}

async function run() {
    await hashPassword(plaintextPassword)
    await verifyPassword(hashedPassword, plaintextPassword)
}

run()
