
require('dotenv').config();

//Require needed modules
var passport = require('passport'); 
var passportLocalStrategy = require('passport-local').Strategy;

//bring in the databases
var db = require('../models');


passport.serializeUser(function(user, callback){
	callback(null, user.id); 
});

passport.deserializeUser(function(id, callback){
	db.user.findById(id).then(function(user){ 
		callback(null, user);
	}).catch(function(err){
		callback(err, null);
	});
});

//Now let's authenticate some stuff
passport.use(new passportLocalStrategy({ 
	usernameField: 'email', 
	passwordField: 'password'
}, function(username, password, callback){ 
	db.user.findOne({
		where: {email: username}
	}).then(function(foundUser){ 
		if(!foundUser || !foundUser.isValidPassword(password)){ 
			console.log('something does not add up')
			callback(null, null);
		} else {
			console.log('THE FOUND USER IS:', foundUser)
			callback(null, foundUser); 
		}
	}).catch(function(err){
		callback(err, null);
	})
}))

module.exports = passport;






