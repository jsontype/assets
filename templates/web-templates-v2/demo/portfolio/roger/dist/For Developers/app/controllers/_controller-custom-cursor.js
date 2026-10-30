/***********************************************
 * SITE: CUSTOM CURSOR
 ***********************************************/
(function ($) {

	'use strict';

	if (!$('[data-cursor]').length) {
		return;
	}

	PTFJS.customCursor = {
		init: function () {

			PTFJS.body.append(`<div class="ptf-custom-cursor"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24"><path fill="currentColor" d="M5 0v2.4h15.737L0 22.308 1.762 24 22.5 4.092V19.2H25V0H5Z"/></svg></span></div>`);

			var customCursor = $('.ptf-custom-cursor');

			PTFJS.document.on('mousemove pointermove', function (e) {
				customCursor.get(0).style.setProperty('--ptf-custom-cursor__x', `${e.clientX}px`);
				customCursor.get(0).style.setProperty('--ptf-custom-cursor__y', `${e.clientY}px`);
			});

			PTFJS.document.on('mouseenter', '[data-cursor]', function () {
				customCursor.addClass($(this).data('cursor'));
				customCursor.addClass('is-visible');
			}).on('mouseleave', '[data-cursor]', function () {
				customCursor.removeClass($(this).data('cursor'));
				customCursor.removeClass('is-visible');
			});

		}
	};

	if (!PTFJS.isMobile.any()) {
		PTFJS.customCursor.init();
	}

})(jQuery);