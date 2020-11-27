const fs = require('fs')
const path = require('path')

const produtosJson = path.join("produtos.json");

const ProdutoController = {
    viewForm: (req, res) => {
        return res.render('produto');
    },
    saveForm: (req, res) => {
        let {nomeProduto, precoProduto} = req.body;

        // salvar no BD
        let dadosJson = JSON.stringify([{nome: nomeProduto, preco: precoProduto}]);
        fs.writeFileSync(produtosJson, dadosJson);  
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res) => {
        return res.render('sucesso');
    },
    viewAttForm: (req, res) => {
        let { id } = req.params;
        let produtos = [
            {id:1, nome: "Produto X", preco: 10},
            {id:2, nome: "Produto Y", preco: 20}

        ];
        res.render('editarProduto', { produto: produtos[id] });
    }, 
    editForm: (req, res) => {
        let {nomeProduto, precoProduto} = req.body;
        res.send('Produto ' + nomeProduto + ' editado com sucesso')
    },
    listarProdutos: (req, res) => {
        let produtos = fs.readFileSync(produtosJson, {encoding: 'utf-8'});
        produtos = JSON.parse(produtos);
        // [
        //     {id:1, nome: "Produto X", preco: 10},
        //     {id:2, nome: "Produto Y", preco: 20}
        // ]

        res.render('listarProdutos', {listaProdutos:produtos});

    },
    deletarProdutos: (req, res) => {
        let {id} = req.params;

        res.send("O produto " + id + " foi deletado com sucesso");
    }

};

module.exports = ProdutoController;

