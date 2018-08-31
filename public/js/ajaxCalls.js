$(document).ready(function(){
	console.log('Hi from ajax')

	$('#new-sight').submit(function(e){
		e.preventDefault();
		
		var latitude = marker.getPosition().lat();
  		var longitude = marker.getPosition().lng();
		var formData = $(this).serialize() + "&latitude=" + latitude + "&longitude=" + longitude;

		$.ajax({
			url:$(this).attr('action'),
			method: 'POST',
			data: formData
		}).done(function(res){
			console.log('success', res)
			$( '#new-sight' ).each(function(){
			    this.reset();
			});
		}).fail(function(err){
			console.log('error', err)
		})
	})
})