//import a native module from node.js -> FileSystem (fs)
const fs = require('fs'); 
const moment = require('moment');

const superHeros = require('./superHeros'); 

// const moduloNativo = require('http'); 

// const moduloInstalado = require('axios'); 

const cachorro = require('./cachorro');

//readFileSync opens an folder and returns its content
//__dirname helps to get all the way through the folder
//utf8 is the chain characters it is going to use
let data = fs.readFileSync(__dirname + '/data.txt', 'utf8') 
let date = moment().format('MMMM Do YYYY, h:mm:ss a')
let dateTwo = moment().format('MMM Do YY')
let dateBr = moment().format('DD/MM/YYYY')


console.log(date);
console.log(data);
console.log(dateTwo);
console.log(dateBr);

console.log(superHeros);

let nomeCachorro = cachorro.nome;
let idadeCachorro = cachorro.idade;


console.log('O cachorro se chama ' +  nomeCachorro +   ' e tem ' +  idadeCachorro + ' anos');
