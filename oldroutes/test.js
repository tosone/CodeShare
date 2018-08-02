var express = require('express');
var router = express.Router();

router.get('/menu', function(req, res) {
  res.render('test/menu', {
    user: null
  });
});

router.get('/footer', function(req, res) {
  res.render('test/footer', {
    user: null
  });
});

router.get('/scroll', function(req, res) {
  res.render('test/scroll', {
    user: null
  });
});

router.get('/tablist', function(req, res) {
  res.render('test/tablist', {
    user: null
  });
});

router.get('/formgroup', function(req, res) {
  res.render('test/formgroup', {
    user: null
  });
});

router.get('/modal', function(req, res) {
  res.render('test/modal', {
    user: null
  });
});

module.exports = router;
