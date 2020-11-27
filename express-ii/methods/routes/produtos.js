let express = require('express');
let router = express.Router();

let ProdutoController = require('../controllers/ProdutoController');

router.get('/criar', ProdutoController.viewForm);
router.post('/criar', ProdutoController.saveForm);
router.get('/sucesso', ProdutoController.sucesso);

router.get('/:id/editar', ProdutoController.viewAttForm);
router.put('/editar', ProdutoController.editForm);
router.get('/', ProdutoController.listarProdutos);
router.delete('/deletar/:id', ProdutoController.deletarProdutos)

module.exports = router;
