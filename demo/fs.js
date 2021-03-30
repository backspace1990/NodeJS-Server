//file system
const fs = require('fs');
const path=require('path')
// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Папка создана')
// })
const filePath = path.join(__dirname,'test','text.txt')

// fs.writeFile(filePath,'Hello NodeJs',err => {
//     if (err){
//         throw err
//     }
//     console.log('файл создан')
// })
// fs.writeFile(filePath,'\nHello again',err => {
//     if (err){
//         throw err
//     }
//     console.log('файл создан')
// })
// fs.writeFile(filePath,'Hello NodeJs',err => {
//     if (err){
//         throw err
//     }
//     console.log('файл создан')
// })
// fs.appendFile(filePath,'\nHello again',err => {
//     if (err){
//         throw err
//     }
//     console.log('файл создан')
// })
// fs.readFile(filePath,((err, content) =>{
//     if(err){
//         throw err
//     }
//     const data = Buffer.from(content)
//     console.log('Content : ',content)
//     console.log('Content : ',data.toString())
// } ))
fs.readFile(filePath,'utf-8',((err, content) =>{
    if(err){
        throw err
    }
    console.log(content)
} ))






