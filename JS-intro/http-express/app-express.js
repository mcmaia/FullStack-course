const express = require('express');
const routesProducts = require('./routes/routesProducts');
let app = express(); //executing express 

//specifying the route
app.get('/', (req, res) => res.send('Hello World'));
app.get('/contact' , (req,res) => res.send({name: 'Marcelo', age: 32}));

//Pparameterized Routes
app.use('/products', routesProducts);

//Criating a server
app.listen(3000, ()=>{
    console.log('Server Running...PORT 3000');
});



