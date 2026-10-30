;(function ($, window, document, undefined) {
    'use strict';

    // CHANGE COLOR FOR PAGINATION

    $('.btn-scroll-down').on('click', function () {

        var offset = $(this).closest('.banner-slider-wrap').offset();

        $('html, body').animate({
            scrollTop: offset.top + $(window).height()
        }, 600);
        return false;
    });


})(jQuery, window, document);