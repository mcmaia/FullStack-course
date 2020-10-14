//Creating a server with HTTP

// const http = require('http');

// http.createServer((req, res) => {

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('servidor rodando');

// }).listen(3000, () => {
//   console.log("The server is running - localhost:3000")
// });


//Creating a server with EXPRESS

const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send('testando')
});

// criar rota home, onde quando acessada terá que retornar Olá, você está na rota home
app.get('/home', (req, res) => {
  res.send('Olá, você está na página home')
});

// criar rota users, onde quando acessada terá que retornar Olá, você está na lista de usuários
app.get('/users', (req, res) => {
  res.send('Olá, você está na lista de usuários')
});

app.listen(3000, () => {
  console.log('servidor rodando')
});


