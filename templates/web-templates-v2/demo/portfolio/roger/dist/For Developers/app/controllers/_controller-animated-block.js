/***********************************************
 * SITE: ANIMATED BLOCK
 ***********************************************/
(function ($) {

	'use strict';

	PTFJS.animatedBlock = {
		init: function () {

			var animatedBlock = $('.ptf-animate-element'),
				prefix = 'animate__';

			if ($('.ptf-fullpage-slider').length) {

				PTFJS.window.on('ptf.change-slide', function () {
					animatedBlock.each(function () {
						var $this = $(this);
						var animationName = $this.data('animation-name');
						$this.removeClass(prefix + 'animated').removeClass(prefix + animationName);
						if ($this.parents('.ptf-section').hasClass('active')) {
							$this.addClass(prefix + 'animated').addClass(prefix + animationName);
						}
					});
				});

			} else {
				animatedBlock.each(function () {
					var $this = $(this);
					$this.one('inview', function () {
						var animationName = $this.data('animation-name');
						$this.addClass(prefix + 'animated').addClass(prefix + animationName);
					});
				});
			}
		}
	};

	PTFJS.animatedBlock.init();

	// var path = $('.lol svg path').get(0);
	// gsap.from(path, {duration: 5, drawSVG:0, repeat:-1, yoyo:true});
	// 	gsap.to('path', 6, {strokeDashoffset:0});
	// console.log(path.getTotalLength());
	// var path = $('.lol svg path').get(0);
	// var l = path.getTotalLength();

	// gsap.to(path, 3, {
	// 	strokeDashoffset: l,
	// 	autoRound: false
	// });

	// gsap.set(path, {strokeDasharray:l});
	// gsap.to(path, 3, {
	// 	attr: {
	// 		"stroke-dashoffset": 0
	// 	}
	// });

})(jQuery);