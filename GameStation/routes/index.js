var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenidos' });
});

router.get('/conocenos', function(req, res, next) {
  res.render('conocenos', { title: 'Conocenos' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registrarse' });
});

module.exports = router;
