
const express = require("express");
const server = express();
const port = 3000
server.get('/hello', function (request, response) {
    const name = request.query.name
    response.send('hello name is :' + name)
})
server.get('/', function (request, response) {
  
    response.send('starts here')
})
server.get('/add', function (request, response) {
    const n1 = parseInt(request.query.numberOne)
    const n2= parseInt(request.query.numberTow)
    console.log(request.query);
    let sum = n1 + n2
    response.send(n1 + ' + '+  n2 + ' = ' + sum)
})
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