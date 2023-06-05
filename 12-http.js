const http=require('http')

const server=http.createServer((req,res)=>{
 // req is request from the user and res is the response from the user
 if(req.url==='/'){
    res.end('welcome to our home page')
 }
 if(req.url==='/about'){
    res.end('here is  our history')
 }
 res.end(
   ` <h1>we dont have that</h1>`)


})


server.listen(5000)
