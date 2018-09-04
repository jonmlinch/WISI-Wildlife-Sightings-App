module.exports = function(req, res, next){
	if(!req.user){ //Check if they are not a logged in user
		console.log('You are not logged in')
		req.flash('Please login to access your profile!')
		res.redirect('/auth/login')
	}
	
	next();
	
}