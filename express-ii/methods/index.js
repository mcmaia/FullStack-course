const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

let hash = bcrypt.hashSync('1234', 10);

console.log(hash);

// let usuariosArquivos = path.join("data", "usuarios","usuarios.json");
// let extensions = path.extname(usuariosArquivos);
// let directory = path.dirname(usuariosArquivos);

let caminhoArquivo = path.join("prova.txt");

let conteudo = fs.readFileSync(caminhoArquivo, {encoding: "utf-8"});

// console.log(conteudo);

// fs.writeFileSync(caminhoArquivo, ' prova 2');
// fs.appendFileSync(caminhoArquivo, ' Prova Final');





