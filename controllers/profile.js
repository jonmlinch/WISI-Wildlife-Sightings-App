//Requires
var express = require('express');

//Declare Router
var router = express.Router();

var loggedIn = require('../middleware/prevent');

//Define routes
router.get('/', loggedIn, function(req, res){ //Adding the loggedIn middleware checks if they are logged before passing to profile page
	res.render('profile/profile');
})

module.exports = router;