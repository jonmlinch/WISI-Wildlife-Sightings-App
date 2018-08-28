//Required node modules
var bodyParser = require('body-parser'); //middleware to parse incoming bodies
var express = require('express'); //web framework to allow for routing on webpage
var ejsLayouts = require('express-ejs-layouts'); //Allows use of ejs format with express
var flash = require('connect-flash'); //Allows for any error messages I may need
//var passport = require('./config/passportConfig'); //******* MAY NEED TO CHANGE THIS, DON'T FORGET ****** //A method of authentication
var session = require('express-session'); //Used to create sessions, 

//Create express app
var app = express();

//Set view engine
app.set('view engine', 'ejs');

//Set middlewares using app.use
app.use(express.static(__dirname + '/public')); //allows use of static files like HTML or css
app.use(ejsLayouts); //specifies use of ejs for front end views
app.use(bodyParser.urlencoded({extended: false})); //Parses url encoded data

//Layout initial routes
app.get('/', function(req, res){
	res.render('home')
})





//Listen
app.listen(3000, function(){
	console.log("You are now listening to the smooth sounds of Port 3000 in morning")
})



//Also to do:
//set up databases (user, user wildlife inputs)
//connet databases