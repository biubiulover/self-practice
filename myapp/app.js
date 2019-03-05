// to run -> node app.js
const express = require('express')
const path = require('path')
const app = express()

// 为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，
// 使用 Express 中的 express.static 内置中间件函数。
// 如果要使用多个静态资源目录，请多次调用 express.static 中间件函数
// 访问静态资源文件时，express.static 中间件函数会根据目录的添加顺序查找所需的文件
// http://localhost:3000/img/lufy.jpg
// app.use(express.static('public'))
// http://localhost:3000/static/img/lufy.jpg
// app.use('/static', express.static('public'))
// 使用绝对路径
app.use('/static', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => res.send('Hello World!')) 
// app.post('/', (req, res) => res.send('get a post request'))
// app.put('/user', function (req, res) { res.send('Got a PUT request at /user') })
// app.delete('/user', function (req, res) { res.send('Got a DELETE request at /user') })
// http://localhost:3000/users/34/books/8989
// {"userId": "34", "bookId": "8989"}

// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// })

// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
// }, function (req, res) {
//     res.send('Hello from B!')
// })

// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
// }

// var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }

// var cb2 = function (req, res, next) {
//     res.send('Hello from C!')
// }
// app.get('/example/c', [cb0, cb1, cb2])

// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
// }

// var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }

// app.get('/example/d', [cb0, cb1], function (req, res, next) {
//     console.log('the response will be sent by the next function')
//     next()
// }, function (req, res) {
//     res.send('Hello from D!')
// })

// app.route('/book')
//     .get((req, res) => {
//         res.send('get a random book')
//     })
//     .post((req, res) => {
//         res.send('add a book')
//     })
//     .put((req, res) => {
//         res.send('update the book')
//     })

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, () => console.log('app is listening on port 3000!'))
