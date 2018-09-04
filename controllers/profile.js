//Requires
var express = require('express');
var db = require('../models')

//Declare Router
var router = express.Router();

var loggedIn = require('../middleware/prevent');

//Define GET routes

router.get('/newsight', loggedIn, function(req, res){ //Adding the loggedIn middleware checks if they are logged before passing to profile page
	res.render('profile/newSight')
});

router.get('/pastsight', loggedIn, function(req, res){
	db.user.findOne({
		where: {id: req.user.id},
		include: [db.wildlife]
	}).then(function(userSightings){
		res.render('profile/pastSight', {user: userSightings})
	}).catch(function(err){
		console.log('ERROR WILL ROBINSON!')
	})
	
})

router.get('/edit/:id', loggedIn, function(req, res){
	db.wildlife.findById(req.params.id).then(function(editSight){
		res.render('profile/editSightings', { edit: editSight })
	}).catch(function(err){
		console.log('DANGER! DANGER!')
	})
})

//Define POST routes
router.post('/newsight', loggedIn, function(req, res){
	req.body.userId = req.user.id
	db.wildlife.create(req.body).then(function(newest){
		res.send('success')
		console.log('SUCCESS!')
	}).catch(function(err){
		console.log(err);
	})
})

//Define PUT route for edit page
router.put('/edit/:id', loggedIn, function(req, res){
	db.wildlife.update(req.body, {
		where: {id: req.params.id}
	}).then(function(update){
		res.send('SUCCESSFUL')
	}).catch(function(err){
		console.log('WELL THAT DID NOT WORK!')
	});
})

//Define DELETE route
router.delete('/:id', loggedIn, function(req, res){
	res.send(req.params.id)
	db.wildlife.findOne({
		where: {id: req.params.id}
	}).then(function(deleteVictim){
		db.wildlife.destroy({
			where: {id: deleteVictim.id}
		}).then(function(deleted){
			res.send('YOU DELETED SOMETHING')
		}).catch(function(err){
			res.send('YOU FAILED TO DELETE')
		})
	}).catch(function(err){
		res.send('THAT IS A NO GO')
	})
})




module.exports = router;