var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/recebe', function(req, res, next) {
  res.send(req.files);
});

module.exports = router;
