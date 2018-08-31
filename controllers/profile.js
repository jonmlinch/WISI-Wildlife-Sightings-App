//Requires
var express = require('express');
var db = require('../models')

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
	db.user.findOne({
		where: {id: req.user.id},
		include : [db.wildlife]
	}).then(function(userSightings){
		res.render('profile/pastSight', {user: userSightings})
	}).catch(function(err){
		console.log('ERROR WILL ROBINSON!')
	})
	
})

//Define POST routes
router.post('/newsight', loggedIn, function(req, res){
	console.log(req.body)
	req.body.userId = req.user.id
	db.wildlife.create(req.body).then(function(newest){
		res.send('success')
		console.log('SUCCESS!')
	}).catch(function(err){
		console.log(err);
	})
})



module.exports = router;