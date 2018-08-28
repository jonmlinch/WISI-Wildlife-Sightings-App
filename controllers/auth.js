//Requires
var express = require('express');
//*** make sure to require passport when getting to auth ***

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
router.post('/signup', function(res, res){
	console.log(req.body)
	req.body.admin = false; //For now all accounts will be set to false until I can differentiate abilities and create an avenue to become an admin ---> maybe special password for admin?
	res.send('Got into the post route!')
})






module.exports = router;