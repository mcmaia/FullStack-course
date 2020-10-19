const express = require('express');
const productsController = require('../controllers/productsController')

const router = express.Router();

router.get('/criar', productsController.criatingProduct);
router.get('/deletar:id', productsController.deletingProduct );


module.exports = router;