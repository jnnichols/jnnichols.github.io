// Make it rain!
$(window).on('scroll', function () {

	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

//if user srolls >300, fadeIn images
  if (distanceScrolled > 800) {
		$('#projects').fadeIn('slow');
	} else {
		$('#projects').fadeOut('slow');
	}

//if user scrolls >400, addClass scrolled
  if (distanceScrolled > 400) {
  	$('.bio').addClass('scrolled');
  } else {
  	$('.bio').removeClass('scrolled');
	}

});
