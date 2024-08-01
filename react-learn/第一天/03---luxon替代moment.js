import moment from 'moment'// 已经不再积极维护，大，性能差
const now = moment();
console.log(now.format('YYYY-MM-DD HH:mm:ss'));


import { DateTime } from 'luxon' // moment的后继者，新，现代化
const now2 = DateTime.now();
console.log(now2.toFormat('yyyy-MM-dd HH:mm:ss'));
