const http=require('http')
const server=http.createServer((request,response)=>{
    response.statusCode=200,
    response.end('hello word')
})

server.listen(3000,()=>{
    console.log('服务器启动成功！http://localhost:3000')
})