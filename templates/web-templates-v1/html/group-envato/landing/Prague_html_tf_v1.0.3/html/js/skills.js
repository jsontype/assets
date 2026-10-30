// SKILLS
;(function ($, window, document, undefined) {
    'use strict';

    $(window).on('scroll', function () {

        // linear style
        if ( $('.skill-wrapper.linear').length ) {
            $('.skill-wrapper.linear .skills').not('.active').each(function () {
                if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
                    $(this).addClass('active');
                    $(this).find('.skill').each(function () {
                        var procent = $(this).attr('data-value');
                        $(this).find('.active-line').css('width', procent + '%');
                        $(this).find('.counter').countTo();
                    }); // end each
                } // end if
            }); // end each
        }

	    $('.counter').not('.counter--counted').each(function () {
		    if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
			    $(this).addClass('counter--counted');
			    $(this).find('.js-counter').each(function () {
				    $(this).countTo();
			    });
		    }
	    });
    });
})(jQuery, window, document);