const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let userJson = path.join("users.json")
let userController = {
    registroForm: (req, res) =>{
        res.render('registroUsuario')
    }, 
    salvarForm: (req, res) =>{
        let {nome, email, senha} = req.body;
        let senhaCript = bcrypt.hashSync(senha, 10);
        let user = JSON.stringify({nome, email, senha:senhaCript});

        fs.writeFileSync(userJson, user);
        res.send('Usuário criado com sucesso!');

    },

    loginForm: (req, res) =>{
        res.render('login')
    }, 
    logarUsuario: (req, res) =>{

    }
}

module.exports = userController;

