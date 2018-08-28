//Required node modules
var bodyParser = require('body-parser'); //middleware to parse incoming bodies
var express = require('express'); //web framework to allow for routing on webpage
var ejsLayouts = require('express-ejs-layouts'); //Allows use of ejs format with express
var flash = require('connect-flash'); //Allows for any error messages I may need
var passport = require('./config/passportConfig'); //******* MAY NEED TO CHANGE THIS, DON'T FORGET ****** //A method of authentication
var session = require('express-session'); //Used to create sessions, 

//Create express app
var app = express();

//Set view engine


//Set middlewares using app.use


//Layout initial routes





//Listen



//Also to do:
//set up databases (user, user wildlife inputs)
//connet databases