var express = require('express');
var router = express.Router();

const userController =require('../controllers/UserController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/criar', userController.registroForm);
router.post('/criar', userController.salvarForm);

router.get('/login', userController.loginForm);
router.post('/login', userController.logarUsuario);



module.exports = router;
