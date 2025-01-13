var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
const express = require('express')
const router = express.router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Git!' })
});
module.example - router;