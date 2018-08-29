//This document sets the conditions for my passport authorizations

//Require dotenv to allow use of .env files, This allows me to declare variables in a .env file which won't get passed into github
require('dotenv').config();

//Require needed modules
var passport = require('passport'); // Authenticates a request
var passportLocalStrategy = require('passport-local').Strategy; // This allows for authentication using a username and password from my database