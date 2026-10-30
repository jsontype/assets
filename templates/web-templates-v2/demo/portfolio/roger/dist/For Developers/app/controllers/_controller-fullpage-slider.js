/***********************************************
 * PAGE: FULLPAGE SLIDER
 ***********************************************/
(function ($) {

	'use strict';

	if (typeof $.fn.pagepiling == 'undefined') {
		return;
	}

	if (!$('.ptf-fullpage-slider').length) {
		return;
	}

	PTFJS.fullpageSlider = {
		init: function () {

			var slider = $('.ptf-fullpage-slider'),
				progress_bar = slider.find('.ptf-fullpage-slider-nav'),
				loop_top = slider.data('loop-top') ? true : false,
				loop_bottom = slider.data('loop-bottom') ? true : false,
				speed = slider.data('speed') || 800,
				anchors = [];

			PTFJS.body.css('overflow', 'hidden');
			PTFJS.html.css('overflow', 'hidden');

			slider.find('[data-anchor]').each(function () {
				anchors.push($(this).data('anchor'));
			});

			function paul_tf_navbar_solid() {
				if (slider.find('.pp-section.active').scrollTop() > 0) {
					$('.ptf-navbar').addClass('ptf-navbar--solid');
				} else {
					$('.ptf-navbar').removeClass('ptf-navbar--solid');
				}
			}
			paul_tf_navbar_solid();

			function paul_tf_show_navigation() {
				progress_bar.find('li:nth-child(2) > a').addClass('active');
				$('.ptf-offcanvas-menu ul.sf-menu > li:first-child, .ptf-default-menu__navigation ul.sf-menu > li:first-child').addClass('active');
			}

			progress_bar.on('click', '.prev', function (e) {
				e.preventDefault();
				$.fn.pagepiling.moveSectionUp();
			});

			progress_bar.on('click', '.next', function (e) {
				e.preventDefault();
				$.fn.pagepiling.moveSectionDown();
			});

			slider.pagepiling({
				menu: '.ptf-offcanvas-menu ul.sf-menu, .ptf-default-menu__navigation ul.sf-menu, .ptf-fullpage-slider-nav',
				scrollingSpeed: speed,
				loopTop: loop_top,
				loopBottom: loop_bottom,
				anchors: anchors,
				sectionSelector: '.ptf-section',
				navigation: false,
				afterRender: function () {
					paul_tf_show_navigation();
					PTFJS.window.trigger('ptf.change-slide');
				},
				onLeave: function (index, nextIndex, direction) {
					PTFJS.window.trigger('ptf.change-slide');
				},
				afterLoad: function (anchorLink, index) {
					paul_tf_navbar_solid();
				}
			});

			slider.find('.pp-scrollable').on('scroll', function () {
				var scrollTop = $(this).scrollTop();
				if (scrollTop > 0) {
					$('.ptf-navbar').addClass('ptf-navbar--solid');
				} else {
					$('.ptf-navbar').removeClass('ptf-navbar--solid');
				}
			});

		}
	};

	PTFJS.fullpageSlider.init();

})(jQuery);