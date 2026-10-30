/***********************************************
 * WIDGET: PORTFOLIO MARQUEE
 ***********************************************/
(function ($) {

	'use strict';

	// check if plugin defined
	if (typeof gsap == 'undefined') {
		return;
	}

	PTFJS.portfolioMarquee = {

		init: function () {

			var portfolioMarquee = $('.ptf-portfolio-marquee');

			portfolioMarquee.on('mousemove', '[data-cursor]', function (e) {

				var $this = $(this).closest('.ptf-work').find('.ptf-work-thumbnail'),
					rect = $this[0].getBoundingClientRect(),
					elLeft = rect.left,
					elTop = rect.top;

				gsap.set($this, {
					autoAlpha: 1
				});

				gsap.to($this, .3, {
					y: e.pageY - elTop - $this.innerHeight() / 2 + 40,
					x: e.pageX - elLeft - $this.innerWidth() / 2 + 40
				});

			}).on('mouseout', '[data-cursor]', function(e) {
				gsap.to($(this).closest('.ptf-work').find('.ptf-work-thumbnail'), .15, {
					autoAlpha: 0
				});
			});

		}
	}

	PTFJS.portfolioMarquee.init();

})(jQuery);