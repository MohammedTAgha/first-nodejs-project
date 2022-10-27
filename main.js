
const express = require("express");
const pg=require('pg')
const server = express();

const Pool = pg.Pool
const path = require('path');
const port = 3000

const url = 'postgres://postgres:2468@localhost:5432/blog'
const connectDb = new Pool({
    connectionString:url,
    ssl:false
})

server.get('/insertUser',async function (request, response) {
    const db =await connectDb.connect()
    const userName = request.query.username
    const userFirstName = request.query.firstnamr
    const userLastName = request.query.lastname
    const userAge = request.query.age
    const userLocation = request.query.location
    const users = await db.query('select * from users where id =' + uid +';')
    response.send(users.rows)
})

server.get('/getUser',async function (request, response) {
    const db =await connectDb.connect()
    const uid = request.query.id
    const users = await db.query('select * from users where id =' + uid +';')
    response.send(users.rows)
})
server.get('/hello',async function (request, response) {
    const db =await connectDb.connect()
    const users = await db.query('select * from users where id = 1;')
    response.send(users.rows[0])
})
server.get('/', function (request, response) {
  
    response.send('starts here')
})
server.get('/add', function (request, response) {
    const n1 = parseInt(request.query.numberOne)
    const n2= parseInt(request.query.numberTow)
    
    let sum = n1 + n2
    response.send(n1 + ' + '+  n2 + ' = ' + sum)
})
server.get('/greet/:num1/:num2', function (request, response) {
    const n1 = parseInt(request.params.num1)
    const n2= parseInt(request.params.num2)
    let sum = n1 + n2
    response.send(n1 + ' + '+  n2 + ' = ' + sum)
    
})
server.get('/img', function (request, response) {
    response.sendFile(path.join(__dirname,'./image.jpg'))
})

const middleware =(request , response , next)=>{
    console.log('from middleware');
    next()
}
const controller =(request , response)=>{
    response.sendFile(path.join(__dirname,'./index.html'))
}

server.get('/homepage',middleware,controller)
server.listen(port,()=>{console.log('srver is running');})
// var http = require("http");

// http.createServer(function (request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8081);
 
 // Console will print the message
//  console.log('Server running at http://127.0.0.1:8081/');