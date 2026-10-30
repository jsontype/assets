/***********************************************
 * WIDGET: TESTIMONIAL SLIDER
 ***********************************************/
(function ($) {

	'use strict';

	// check if plugin defined
	if (typeof Swiper == 'undefined') {
		return;
	}

	PTFJS.testimonialSlider = {
		init: function () {

			var slider = $('.ptf-testimonial-slider');

			slider.each(function () {

				var $this = $(this);
				$this.find('.swiper-wrapper > *').wrap('<div class="swiper-slide">');

				new Swiper($this.find('.swiper-container'), {
					speed: 1000,
					spaceBetween: 30,
					grabCursor: true,
					effect: 'slide',
					slidesPerView: 1,
					navigation: {
						nextEl: $this.find('.ptf-swiper-button-next'),
						prevEl: $this.find('.ptf-swiper-button-prev'),
					}
				});
			});

		}
	};

	PTFJS.testimonialSlider.init()

})(jQuery);