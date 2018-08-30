//Requires
var express = require('express');

//Declare Router
var router = express.Router();

var loggedIn = require('../middleware/prevent');

//Define GET routes
router.get('/', loggedIn, function(req, res){ //Adding the loggedIn middleware checks if they are logged before passing to profile page
	res.render('profile/profile');
});

router.get('/newsight', loggedIn, function(req, res){
	res.render('profile/newSight')
});

router.get('/pastsight', loggedIn, function(req, res){
	res.render('profile/pastSight')
})

//Define POST routes

module.exports = router;