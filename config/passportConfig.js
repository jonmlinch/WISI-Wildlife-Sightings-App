//This document sets the conditions for my passport authorizations

//Require dotenv to allow use of .env files, This allows me to declare variables in a .env file which won't get passed into github
require('dotenv').config();

//Require needed modules
var passport = require('passport'); // Authenticates a request
var passportLocalStrategy = require('passport-local').Strategy; // This allows for authentication using a username and password from my database

//bring in the databases
var db = require('../models');

//serialized/deserialize functions allow passport to determine what user info to keep for each session (serialize) and what user info to authenticate during changes (deserialize)

passport.serializeUser(function(user, callback){
	callback(null, user.id); //The callback is the "done" function and tells passport that we are tracking the user based on user Id
});

passport.deserializeUser(function(id, callback){
	db.user.findById(id).then(function(user){ //This finds the user based on their Id in the user model
		callback(null, user); //If it succeeds in finding the user, is puts forth that user's information (.then function)
	}).catch(function(err){
		callback(err, null); //If is doesn't find that user or session, it puts forth an error (.catch function)
	});
});

//Now let's authenticate some stuff
passport.use(new passportLocalStrategy({ //This is using the username/password local strategy to authenticate, it takes two parameters. The first spcifies what fields in my model will be used as username/password. By default it looks for 'username' and 'password'. The second parameter says verifies username/password and dictates what to do if it matches
	usernameField: 'email', //Here I specify that the user name is the email from the user database
	passwordField: 'password' //Here I specify that the password is the password logged in the user database
}, function(username, password, callback){ //Function to verify and tell passport what do if match/no match
	db.user.findOne({ //Look for one entry in the user model that match the username based on email
		where: {email: username} //I'm looking for something in the email field that matches the 'username' field that was submitted
	}).then(function(foundUser){ //Specifies what to do if I find a matching user
		if(!foundUser || !foundUser.isValidPassword(password)){ //*** Not sure what the 'isValidPassword' comes from and couldn't find it in docs. I assume it checks the password to see if it is a match
			console.log('something does not add up')
			callback(null, null); //If no match found the run this function
		} else {
			console.log('username and password are matching')
			callback(null, foundUser); //If both username and password match then return the user's information
		}
	})
}))

//*** In order to get all of this working it needs to be called in a function passport.authenticate in the areas that it is needed like the login route


module.exports = passport;






