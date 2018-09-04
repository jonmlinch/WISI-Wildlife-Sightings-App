//Requires
var express = require('express');
var passport = require('../config/passportConfig');

//Include models
var db = require('../models')

//Declaring router
var router = express.Router();

//create GET routes
router.get('/login', function(req, res){
	res.render('auth/login') 
});

router.get('/signup', function(req, res){
	res.render('auth/signup')
});

router.get('/logout', function(req, res){
	console.log('Log out successful')
	req.logout();
	req.flash('Success', 'You successfully logged out');
	res.redirect('/');
})


//create POST routes
router.post('/signup', function(req, res, next){
	console.log(req.body)
	req.body.admin = false; 
	db.user.findOrCreate({
		where: { email: req.body.email }, 
		defaults: req.body 
		}).spread(function(user, newUser){ 
			if(newUser){ 
				passport.authenticate('local', {
					successRedirect: '/profile/pastsight',
					successFlash: 'Welcome back, ' + db.user.firstname,
					failureRedirect: '/auth/login',
					failureFlash: 'email or password incorrect, please try again!'
				})(req, res, next);
			} else{
				console.log('NEW USER NOT LOGGED IN')
				req.flash('Email already in use. Please login to see your profile.')
				res.redirect('/auth/login') 
			}
		}).catch(function(err){
		console.log('Error', err)
	})
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile/pastsight',
	successFlash: 'Welcome back, ' + db.user.firstname,
	failureRedirect: '/auth/login',
	failureFlash: 'email or password incorrect, please try again!'
}))


module.exports = router;