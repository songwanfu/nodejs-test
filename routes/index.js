var express = require('express');
var router = express.Router();


var site = require('../controllers/SiteController');
var agent = require('../controllers/AgentController');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index/index', { title: 'Express' });
// });

router.get('/', site.index);

router.get('/agent', agent.index);

module.exports = router;
