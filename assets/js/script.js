$(document).ready(function () {
	
	$(".spelogos").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
	$(".sponsorsLogo").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
});

$(document).on('click', '.navigationButton', function (e) {
	e.preventDefault();
	var selected = $(this).attr('href');
	var id = selected.substring(1);

	// animate to the top of the element with the id id
	$('html, body').animate({
		scrollTop: $("#" + id).offset().top
	}, 1000);
});