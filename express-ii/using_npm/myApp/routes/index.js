var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/HomeController');
var contatoController = require('../controllers/ContatoController');
var estudantesController = require('../controllers/EstudantesController');



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', HomeController.index);
router.get('/contato', contatoController.index);
router.get('/estudantes', estudantesController.index);

module.exports = router;
