//Requires
var express = require('express');
var passport = require('../config/passportConfig');

//Include models
var db = require('../models')

//Declaring router
var router = express.Router();

//create GET routes
router.get('/login', function(req, res){
	res.render('auth/login') //Tells what to show when someone goes to login page
});

router.get('/signup', function(req, res){
	res.render('auth/signup') //Tells what to show when someone goes to signup page
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
	req.body.admin = false; //For now all accounts will be set to false until I can differentiate abilities and create an avenue to become an admin ---> maybe special password for admin?
	db.user.findOrCreate({ //Tells post route to create an account if it doesn't already exist
		where: { email: req.body.email }, //This is what is searched to see if it exists, req.body.email = the email address enterd by user
		defaults: req.body //inputs anything from req.body that needs to be filled in in my model
		}).spread(function(user, newUser){ //First argument is the user info, second is a boolean telling whether a new entry was created
			if(newUser){ //This if statement tells what to do if a new user is created
				passport.authenticate('local', { //On the login post, I want to authenticate using the local authentication
					successRedirect: '/profile/pastsight', //This is where I want to go if successful
					successFlash: 'Welcome back, ' + db.user.firstname, //Display this message upon login
					failureRedirect: '/auth/login', //This where I want to go if login fails
					failureFlash: 'email or password incorrect, please try again!' //Display this message if failed login
				})(req, res, next);
			} else{
				console.log('NEW USER NOT LOGGED IN')
				req.flash('Email already in use. Please login to see your profile.')
				res.redirect('/auth/login') //Redirect to login page if account already exists
			}
		}).catch(function(err){
		console.log('Error', err)
	})
});

router.post('/login', passport.authenticate('local', { //On the login post, I want to authenticate using the local authentication
	successRedirect: '/profile/pastsight', //This is where I want to go if successful
	successFlash: 'Welcome back, ' + db.user.firstname, //Display this message upon login
	failureRedirect: '/auth/login', //This where I want to go if login fails
	failureFlash: 'email or password incorrect, please try again!' //Display this message if failed login
}))






module.exports = router;