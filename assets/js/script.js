// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';


	//  Search Form Open
	$('#searchOpen').on('click', function () {
		$('.search-wrapper').addClass('open');
		setTimeout(function () {
			$('.search-box').focus();
		}, 400);
	});
	$('#searchClose').on('click', function () {
		$('.search-wrapper').removeClass('open');
	});

})(jQuery);