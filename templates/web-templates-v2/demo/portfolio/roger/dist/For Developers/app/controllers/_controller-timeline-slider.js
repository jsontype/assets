/***********************************************
 * WIDGET: TIMELINE SLIDER
 ***********************************************/
(function ($) {

	'use strict';

	// check if plugin defined
	if (typeof Swiper == 'undefined') {
		return;
	}

	PTFJS.timelineSlider = {
		init: function () {

			var el = $('.ptf-timeline-slider');

			el.each(function () {

				var $this = $(this);
				$this.find('.swiper-wrapper > *').wrap('<div class="swiper-slide">');

				new Swiper($this.find('.swiper-container'), {
					speed: 1000,
					spaceBetween: 0,
					grabCursor: true,
					slidesPerView: 1,
					loop: true,
					navigation: {
						nextEl: $this.find('.ptf-swiper-button-next'),
						prevEl: $this.find('.ptf-swiper-button-prev'),
					},
					pagination: {
						el: $this.find('.ptf-swiper-pagination'),
						clickable: true,
						type: 'bullets'
					}
				});

			});

		}
	};

	PTFJS.timelineSlider.init()

})(jQuery);