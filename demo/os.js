const os=require('os')
console.log('Операцилнная система : ',os.platform())

console.log('Архитектура процессора : ',os.arch())
console.log('Инфа по процессора : ',os.cpus())
console.log('Свободная память : ', os.freemem())
console.log('Всего  памяти : ', os.totalmem())

console.log('Домашняя директория : ',os.homedir())

console.log('включен : ',os.uptime())






