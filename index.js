// (function (exports, require,module,__dirname,__filename){
//     const  chalk = require('chalk')
//     const text =require('./data')
//
//     console.log(chalk.blue('Hello NodeJS'))
//     console.log(chalk.blue(text))
//
// })
//
// const  chalk = require('chalk')
// const text =require('./data')
// console.log(chalk.blue('Hello NodeJS'))
// console.log(chalk.blue(text))
// console.log(__dirname)//путь папки
// console.log(__filename)//путь файла

const http=require('http')
const fs = require('fs')
const path = require('path')

const server =http.createServer((req,res)=>{

    // console.log(req.url)
    // if(req.url ==='/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),((err, data) => {
    //         if(err){
    //             throw err
    //         }
    //         res.writeHead(200,{
    //             'Content-Type' :'text/html' //'Content-Type' :'text/plain'
    //         })
    //         res.end(data)
    //     }))
    //
    // }else if(req.url ==='/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), ((err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html' //'Content-Type' :'text/plain'
    //         })
    //         res.end(data)
    //     }))
    // }


    // res.end('<h1>Hello NodeJS!!!</h1>') //1
    //Оптимизатции
    let filePAth = path.join(__dirname,'public',req.url==='/' ? 'index.html':req.url)
    // console.log(filePAth)
    const ext = path.extname(filePAth)
    let contentType = 'text/html'
    switch (ext){
        case '.css':
            contentType='text/css'
            break
        case '.js':
            contentType ='text/javascript'
            break
        default:
            contentType = 'text/html'
    }
    if (!ext){
        filePAth+='.html' //html ---> error
    }
    fs.readFile(filePAth,((err, content) => {
        if(err){
            fs.readFile(path.join(__dirname,'public','error.html'),((err, data) =>{
                if (err){
                    res.writeHead(500)
                    res.end()
                }else {
                    res.writeHead(200,{
                        'Content-Type':contentType
                    })
                    res.end(data)
                }
            } ))
        }else {
            res.writeHead(200,{
                'Content-Type':contentType
            })
            res.end(content)
        }
    }))

})
const PORT = process.env.PORT || 3000
server.listen(PORT,()=>{
    console.log(`Server has been started on ${PORT}`)
})