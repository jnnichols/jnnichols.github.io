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

//smooth scroll nav
// Do it when someone clicks a nav link
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});
