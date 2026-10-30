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
/***********************************************
 * WIDGET: CONTACT FORM
 ***********************************************/
(function ($) {

	'use strict';

	// check if plugin defined
	if (typeof $.fn.validate == 'undefined') {
		return;
	}

	PTFJS.contactForm = {
		init: function () {

			var contactForm = $('.ptf-contact-form');

			contactForm.each(function () {

				var thisForm = $(this),
					successMessage = thisForm.find('.message.success'),
					errorMessage = thisForm.find('.message.danger');

				thisForm.validate({
					errorClass: 'error',
					submitHandler: function (form) {
						$.ajax({
							type: 'POST',
							url: 'handler.php',
							data: new FormData(form),
							cache: false,
							contentType: false,
							processData: false,
							success: function () {
								successMessage.fadeIn();
								setTimeout(function () {
									successMessage.fadeOut();
								}, 5000);
							},
							error: function () {
								errorMessage.fadeIn();
								setTimeout(function () {
									errorMessage.fadeOut();
								}, 5000);
							}
						});
					}
				});

			});
		}
	}

	PTFJS.contactForm.init();

})(jQuery);
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
/***********************************************
 * MENU OFFCANVAS
 ***********************************************/
(function ($) {

	'use strict';

	var menuIsOpen = false;

	PTFJS.menuOffcanvas = {
		config: {
			easing: 'power2.out'
		},
		init: function () {
			var menu = $('.ptf-offcanvas-menu'),
				navigation = menu.find('ul.sf-menu'),
				navigationItem = navigation.find('> li'),
				header = $('.ptf-offcanvas-menu__header'),
				footer = $('.ptf-offcanvas-menu__footer > div'),
				menuOpen = $('.js-offcanvas-menu-open'),
				menuClose = $('.js-offcanvas-menu-close'),
				siteOverlay = $('.ptf-site-overlay');

			if (typeof $.fn.superclick !== 'undefined') {
				navigation.superclick({
					delay: 300,
					cssArrows: false,
					animation: {
						opacity: 'show',
						height: 'show'
					},
					animationOut: {
						opacity: 'hide',
						height: 'hide'
					},
				});
			}

			menuOpen.on('click', function (e) {
				e.preventDefault();
				if (!menuIsOpen) {
					PTFJS.menuOffcanvas.open_menu(menu, siteOverlay, navigationItem, header, footer);
				}
			});

			menuClose.on('click', function (e) {
				e.preventDefault();
				if (menuIsOpen) {
					PTFJS.menuOffcanvas.close_menu(menu, siteOverlay, navigationItem, header, footer);
				}
			});

			siteOverlay.on('click', function (e) {
				e.preventDefault();
				if (menuIsOpen) {
					PTFJS.menuOffcanvas.close_menu(menu, siteOverlay, navigationItem, header, footer);
				}
			});

			PTFJS.document.keyup(function (e) {
				if (e.keyCode === 27 && menuIsOpen) {
					e.preventDefault();
					PTFJS.menuOffcanvas.close_menu(menu, siteOverlay, navigationItem, header, footer);
				}
			});

			// Close after click to anchor.
			navigationItem.filter('[data-menuanchor]').on('click', 'a', function () {
				if (menuIsOpen) {
					PTFJS.menuOffcanvas.close_menu(menu, siteOverlay, navigationItem, header, footer);
				}
			});

		},
		open_menu: function (menu, siteOverlay, navigationItem, header, footer) {
			menuIsOpen = true;
			if (typeof gsap != 'undefined') {
				gsap.timeline({
						defaults: {
							ease: this.config.easing
						}
					})
					// set overflow for html
					.set(PTFJS.html, {
						overflow: 'hidden'
					})
					// overlay animation
					.to(siteOverlay, .3, {
						autoAlpha: 1,
					})
					// menu animation
					.fromTo(menu, .6, {
						x: '100%',
					}, {
						x: 0,
						visibility: 'visible'
					}, '-=.3')
					// header animation
					.fromTo(header, .3, {
						x: 50,
						autoAlpha: 0
					}, {
						x: 0,
						autoAlpha: 1
					}, '-=.3')
					// navigation item animation
					.fromTo(navigationItem, .3, {
						x: 50,
						autoAlpha: 0
					}, {
						x: 0,
						autoAlpha: 1,
						stagger: {
							each: .1,
							from: 'start',
						}
					}, '-=.15')
					// footer animation
					.fromTo(footer, .3, {
						x: 50,
						autoAlpha: 0
					}, {
						x: 0,
						autoAlpha: 1,
						stagger: {
							each: .1,
							from: 'start',
						}
					}, '-=.15');
			}
		},
		close_menu: function (menu, siteOverlay, navigationItem, header, footer) {
			menuIsOpen = false;
			if (typeof gsap != 'undefined') {
				gsap.timeline({
						defaults: {
							ease: this.config.easing
						}
					})
					// set overflow for html
					.set(PTFJS.html, {
						overflow: 'inherit'
					})
					// footer animation
					.to(footer, .3, {
						x: 50,
						autoAlpha: 0,
						stagger: {
							each: .1,
							from: 'end',
						}
					})
					// navigation item animation
					.to(navigationItem, .3, {
						x: 50,
						autoAlpha: 0,
						stagger: {
							each: .1,
							from: 'end',
						},
					}, '-=.15')
					// header animation
					.to(header, .3, {
						x: 50,
						autoAlpha: 0,
					}, '-=.15')
					// menu animation
					.to(menu, .6, {
						x: '100%',
					}, '-=.15')
					// set visibility menu after animation
					.set(menu, {
						visibility: 'hidden'
					})
					// overlay animation
					.to(siteOverlay, .3, {
						autoAlpha: 0
					}, '-=.6');
			}
		}
	};

	PTFJS.menuOffcanvas.init();

})(jQuery);
/***********************************************
 * INIT THIRD PARTY SCRIPTS
 ***********************************************/
(function ($) {

	'use strict';

	PTFJS.document.on('scroll', function () {
		var scrollTop = $(this).scrollTop();
		if (scrollTop > 0) {
			$('.ptf-navbar').addClass('ptf-navbar--solid');
		} else {
			$('.ptf-navbar').removeClass('ptf-navbar--solid');
		}
	});

	// Fast click
	if (typeof FastClick === 'function') {
		FastClick.attach(document.body);
	}

	// Jarallax
	if (typeof $.fn.jarallax !== 'undefined') {
		$('.jarallax').jarallax({
			speed: 0.8
		});
	}

	// Material input
	if ($('.ptf-form-group').length) {

		$('.ptf-form-group .ptf-form-control').each(function () {
			if ($(this).val().length > 0 || $(this).attr('placeholder') !== undefined) {
				$(this).closest('.ptf-form-group').addClass('active');
			}
		});

		$('.ptf-form-group .ptf-form-control').focus(function () {
			$(this).closest('.ptf-form-group').addClass('active');
		});

		$('.ptf-form-group .ptf-form-control').blur(function () {
			if ($(this).val() == '' && $(this).attr('placeholder') == undefined) {
				$(this).closest('.ptf-form-group').removeClass('active');
			}
		});

		$('.ptf-form-group .ptf-form-control').change(function () {
			if ($(this).val() == '' && $(this).attr('placeholder') == undefined) {
				$(this).closest('.ptf-form-group').removeClass('active');
			} else {
				$(this).closest('.ptf-form-group').addClass('active');
			}
		});

	}

})(jQuery);
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