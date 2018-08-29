//Requires
var express = require('express');
var passport = require('../configure/passportConfig');

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

//create POST routes
router.post('/signup', function(req, res){
	console.log(req.body)
	req.body.admin = false; //For now all accounts will be set to false until I can differentiate abilities and create an avenue to become an admin ---> maybe special password for admin?
	db.user.findOrCreate({ //Tells post route to create an account if it doesn't already exist
		where: { email: req.body.email }, //This is what is searched to see if it exists, req.body.email = the email address enterd by user
		defaults: req.body //inputs anything from req.body that needs to be filled in in my model
		}).spread(function(user, newUser){ //First argument is the user info, second is a boolean telling whether a new entry was created
			if(newUser){ //This if statement tells what to do if a new user is created
				console.log('T or F - A new user was created ', newUser)
				res.redirect('/profile') //Redirect to profile page if a new user was created
			} else{
				req.flash('Email already in use. Please login to see your profile.')
				res.redirect('/auth/login') //Redirect to login page if account already exists
			}
		}).catch(function(err){
		console.log('Error', err)
	})
});

router.post('/login', function(req, res){
	console.log(req.body);
	res.send('You logged in')
})






module.exports = router;