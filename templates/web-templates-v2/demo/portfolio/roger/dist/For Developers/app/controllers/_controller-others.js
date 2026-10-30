/***********************************************
 * INIT THIRD PARTY SCRIPTS
 ***********************************************/
(function ($) {

	'use strict';

	PTFJS.document.on('scroll', function () {
		var scrollTop = $(this).scrollTop();
		if (scrollTop > 0) {
			$('.ptf-navbar').addClass('ptf-navbar--solid');
		} else {
			$('.ptf-navbar').removeClass('ptf-navbar--solid');
		}
	});

	// Fast click
	if (typeof FastClick === 'function') {
		FastClick.attach(document.body);
	}

	// Jarallax
	if (typeof $.fn.jarallax !== 'undefined') {
		$('.jarallax').jarallax({
			speed: 0.8
		});
	}

	// Material input
	if ($('.ptf-form-group').length) {

		$('.ptf-form-group .ptf-form-control').each(function () {
			if ($(this).val().length > 0 || $(this).attr('placeholder') !== undefined) {
				$(this).closest('.ptf-form-group').addClass('active');
			}
		});

		$('.ptf-form-group .ptf-form-control').focus(function () {
			$(this).closest('.ptf-form-group').addClass('active');
		});

		$('.ptf-form-group .ptf-form-control').blur(function () {
			if ($(this).val() == '' && $(this).attr('placeholder') == undefined) {
				$(this).closest('.ptf-form-group').removeClass('active');
			}
		});

		$('.ptf-form-group .ptf-form-control').change(function () {
			if ($(this).val() == '' && $(this).attr('placeholder') == undefined) {
				$(this).closest('.ptf-form-group').removeClass('active');
			} else {
				$(this).closest('.ptf-form-group').addClass('active');
			}
		});

	}

})(jQuery);