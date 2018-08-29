module.exports = function(req, res, next){
	if(!req.user){ //Check if they are not a ligged in user
		req.flash('Please login to access your profile!')
		res.redirect('/auth/login')
	} else {
		next()
	}
}