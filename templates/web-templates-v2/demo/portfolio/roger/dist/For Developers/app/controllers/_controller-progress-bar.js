/***********************************************
 * WIDGET: PROGRESS BAR
 ***********************************************/
(function ($) {

	'use strict';

	// check if plugin defined
	if (typeof gsap == 'undefined') {
		return;
	}

	PTFJS.progressBar = {
		init: function () {

			var progressBar = $('.ptf-progress-bar');

			progressBar.each(function () {
				var $this = $(this),
					final_value = $this.data('final-value') || 0,
					animation_duration = $this.data('animation-speed') || 0,
					delay = 500,
					obj = {
						count: 0
					};

				PTFJS.window.on('ptf.change-slide', function () {
					if ($this.parents('.ptf-section').hasClass('active')) {

						obj.count = 0;
						$this.find('.ptf-progress-bar__title > .counter').text(Math.round(obj.count));
						gsap.set($this.find('.ptf-progress-bar__bar > span'), {
							width: 0
						});

						gsap.to(obj, (animation_duration / 1000) / 2, {
							count: final_value,
							delay: delay / 1000,
							onUpdate: function () {
								$this.find('.ptf-progress-bar__title > .counter').text(Math.round(obj.count));
							}
						});

						gsap.to($this.find('.ptf-progress-bar__bar > span'), animation_duration / 1000, {
							width: final_value + '%',
							delay: delay / 1000
						});

					}
				});

			});
		}
	}

	PTFJS.progressBar.init();

})(jQuery);