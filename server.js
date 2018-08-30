//Required node modules
var bodyParser = require('body-parser'); //middleware to parse incoming bodies
var express = require('express'); //web framework to allow for routing on webpage
var ejsLayouts = require('express-ejs-layouts'); //Allows use of ejs format with express
var flash = require('connect-flash'); //Allows for any error messages I may need
var passport = require('./config/passportConfig'); //******* MAY NEED TO CHANGE THIS, DON'T FORGET ****** //A method of authentication
var session = require('express-session'); //Used to create sessions
var geocoder = require('geocoder');

//Create express app
var app = express();

//Set view engine
app.set('view engine', 'ejs');

//Set middlewares using app.use
app.use(express.static(__dirname + '/public')); //allows use of static files like HTML or css
app.use(ejsLayouts); //specifies use of ejs for front end views
app.use(bodyParser.urlencoded({extended: false})); //Parses url encoded data
app.use(flash()); //Uses the connect flash module for alerts
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true
}))
app.use(passport.initialize()); //specifies use of passport to authenticate 
app.use(passport.session()); //specifies use of a passport session

//custom middleware
app.use(function(req, res, next){
	res.locals.currentUser = req.user; //****Not sure what this does, but I think it allows me to refer to a currentUser on profile pages
	res.locals.alerts = req.flash(); //I think this allows for flash messages when called
	next();
});

//Layout initial routes
app.get('/', function(req, res){ //renders the home page when going to local host 3000
	res.render('home')
})


//add controllers
app.use('/auth', require('./controllers/auth')); //Allows access to the auth js in the controller folder
app.use('/profile', require('./controllers/profile')) //Allows access to the profile js in the controller folder



//Listen
app.listen(3000, function(){ //Allows me to listen to the smooth sound of port 3000
	console.log("You are now listening to the smooth sounds of Port 3000 in morning")
})



//Also to do:
//set up databases (user, user wildlife inputs)
//connet databases