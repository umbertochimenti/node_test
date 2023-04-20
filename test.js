// const http = require('http')
// const server = http.createServer((req,res) =>{
//     console.log(req.url)
//   if (req.url === '/') {
//     res.end('<h1>welcome to home</h1>')
//   } else if (req.url === '/about') {
//     res.end('<h1>err</h1><a href="/">back to home</a>')
//   } else {
//     res.end('<h1>BAD URL!</h1>')
//   }
// })

// server.listen(5000)
// console.log("[INFO] server listen on port 5000!")



const _ = require ('lodash')
const i = [1,[2,[3,[4]]]]
const i_n = _.flattenDeep(i)
console.log(i_n);