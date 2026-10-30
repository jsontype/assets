/***********************************************
 * SITE: PRELOADER
 ***********************************************/
(function ($) {
	'use strict';

	// check if plugin defined
	if (typeof $.fn.animsition == 'undefined') {
		return;
	}

	var preloader = $('.animsition');

	if (!preloader.length) {
		return;
	}

	preloader.animsition({
		inDuration: 500,
		outDuration: 500,
		linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([rel="nofollow"]):not([href~="#"]):not([href^=mailto]):not([href^=tel]):not(.sf-with-ul):not([data-fancybox])',
		loadingClass: 'animsition-loading-2',
		loadingInner: '<div class="spinner"><span class="double-bounce-one"></span><span class="double-bounce-two"></span></div>',
	});

	preloader.on('animsition.inEnd', function () {
		PTFJS.window.trigger('ptf.preloader_done');
		PTFJS.html.addClass('ptf-is-page-loaded');
	});

})(jQuery);