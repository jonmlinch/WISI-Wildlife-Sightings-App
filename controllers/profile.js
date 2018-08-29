//Requires
var express = require('express');

//Declare Router
var router = express.Router();

//Define routes
router.get('/', function(req, res){
	res.render('profile/profile');
})

module.exports = router;