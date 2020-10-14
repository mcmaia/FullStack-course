//Creating a server with HTTP

// const http = require('http');

// http.createServer((req, res) => {

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('servidor rodando');

// }).listen(3000, () => {
//   console.log("The server is running - localhost:3000")
// });


//Creating a server with EXPRESS
const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})