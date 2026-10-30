/***************************************************
==================== JS INDEX ======================
****************************************************
01. td-text-slider-slider
02. td-portfolio-slider-active
03. td-brand-slide
04. td-testimonial-2-slide-active
05. td-blog-slider-active
06. td-testimonial-3-slider-active
07. td-testimonial-profile-slide
08. td-hero-4-slider-active
09. td-testimonial-4-slider-active
10. td-portfolio-4-slider-active
11. td-contact-4-slider-active
12. td-testimonial-5-slider-active
13. td-postbox-slider
****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. td-text-slider-slider
	var text_slider_option = document.querySelector(".td-hero-text-slider-active");

	if (text_slider_option) {

		var text_slider_speed = 2000000
		var text_slider_autoplay = true
		var loop_value = true
		var data_itemshow = "auto"

		if (text_slider_option.getAttribute("data-sliderSpeed")) {
			text_slider_speed = parseInt(text_slider_option.getAttribute("data-sliderSpeed"));
		}
		if (text_slider_option.getAttribute("data-autoPlay")) {
			text_slider_autoplay = text_slider_option.getAttribute("data-autoPlay")
		}

		if (text_slider_option.getAttribute("data-loop")) {
			loop_value = text_slider_option.getAttribute("data-loop")
		}
		if (text_slider_option.getAttribute("data-itemShow")) {
			data_itemshow = text_slider_option.getAttribute("data-itemShow")
		}


		if (text_slider_autoplay == 'true') {
			var text_slider = new Swiper(".td-hero-text-slider-active", {
				loop: loop_value,
				speed: text_slider_speed,
				allowTouchMove: false,
				slidesPerView: data_itemshow,
				slidesPerGroup: 10,
				spaceBetween: 50,
				autoplay: {
					delay: 0,
					disableOnInteraction: true,
				}
			});
		}
		else {
			var text_slider = new Swiper(".td-hero-text-slider-active", {
				loop: loop_value,
				speed: text_slider_speed,
				allowTouchMove: false,
				slidesPerView: data_itemshow,
				slidesPerGroup: 10,
				spaceBetween: 20,
				autoplay: false,
			});

		}
	};

	////////////////////////////////////////////////////
	// 02. td-portfolio-slider-active
	var swiper = new Swiper(".td-portfolio-slider-active", {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 60,
		loop: true,
		freeMode: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			'768': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'576': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
	});

	////////////////////////////////////////////////////
	// 03. td-brand-slide
	var slider = new Swiper('.td-brand-slide', {
		spaceBetween: 60,
		loop: true,
		freeMode: true,
		slidesPerView: 'auto',
		autoplay: {
		delay: 4000,
		},
		breakpoints: {
			'768': {
				spaceBetween: 30,
			},
			'576': {
				spaceBetween: 20,
			},
			'0': {
				spaceBetween: 20,
			},
		},
	});

	////////////////////////////////////////////////////
	// 04. td-testimonial-2-slide-active
	var slider = new Swiper('.td-testimonial-2-slide-active', {
		spaceBetween: 60,
		loop: true,
		slidesPerView: 'auto',
		autoplay: {
		delay: 4000,
		},
	});

	////////////////////////////////////////////////////
	// 05. td-blog-slider-active
	var swiper = new Swiper(".td-blog-slider-active", {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 60,
		loop: true,
		freeMode: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			'768': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'576': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
	});

	if ($(".testimonial__slider-active-9").length > 0) {
		$('.testimonial__slider-active-9').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			centerMode: false,
			cssEase: 'linear',
			asNavFor: '.testimonial__slider-nav-9',
		});
	}

	if ($(".testimonial__slider-nav-9").length > 0) {
		$('.testimonial__slider-nav-9').slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			asNavFor: '.testimonial__slider-active-9',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			autoplay: false,
			speed: 100,
			autoplaySpeed: 8000,
			cssEase: 'linear',
			loop: true,
			appendArrows: false,
			responsive: [
				{
					breakpoint: 1400,
					settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 1200,
					settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 992,
					settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 576,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					},
				},
				{
					breakpoint: 0,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					},
				},
			],
		});

	}

	////////////////////////////////////////////////////
	// 06. td-testimonial-3-slider-active
	var swiper = new Swiper(".td-testimonial-3-slider-active", {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 20,
		loop: true,
		effect: 'fade',
		a11y: false,
		navigation: {
			prevEl: '.td-testimonial-prev',
			nextEl: '.td-testimonial-next',
		},
	});

	////////////////////////////////////////////////////
	// 07. td-testimonial-profile-slide
	var slider = new Swiper('.td-testimonial-profile-slide', {
		spaceBetween: 100,
		loop: true,
		freeMode: true,
		slidesPerView: 'auto',
		autoplay: {
		delay: 4000,
		},
		breakpoints: {
			'768': {
				spaceBetween: 70,
			},
			'576': {
				spaceBetween: 20,
			},
			'0': {
				spaceBetween: 20,
			},
		},
	});

	////////////////////////////////////////////////////
	// 08. td-hero-4-slider-active
	if ($(".td-hero-4-nav-active").length > 0) {
		var slidernav = new Swiper(".td-hero-4-nav-active", {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			freeMode: false,
			watchSlidesProgress: true,
			effect: 'fade',
			allowTouchMove: false,
			navigation: {
				nextEl: ".slider-8-button-next",
				prevEl: ".slider-8-button-prev",
			},
			breakpoints: {
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	if ($(".td-hero-4-slider-active").length > 0) {
		let sliderActive1 = ".td-hero-4-slider-active";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: 'fade',

			// If we need pagination
			pagination: {
				el: ".main-slider-dot, .td-hero-4-dot",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + '<button>'+ '0' +(  index + 1)+'</button>' + "</span>";
				},
			},

			// Navigation arrows
			navigation: {
				prevEl: ".td-hero-4-navigation-next, .slider-button-8-next",
				nextEl: ".td-hero-4-navigation-prev, .slider-button-8-prev",
			},

			a11y: false,
			thumbs: {
				swiper: slidernav,
			},
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	////////////////////////////////////////////////////
	// 09. td-testimonial-4-slider-active
	var swiper = new Swiper(".td-testimonial-4-slider-active", {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 20,
		loop: true,
		a11y: false,
		navigation: {
			prevEl: '.td-testimonial-4-prev',
			nextEl: '.td-testimonial-4-next',
		},
	});

	////////////////////////////////////////////////////
	// 10. td-portfolio-4-slider-active
	var slider = new Swiper('.td-portfolio-4-slider-active', {
		slidesPerView: 1,
		spaceBetween: 80,
		loop: true,
		speed: 3000,
		autoplay: {
		  delay: 3000, 
		},
		breakpoints: {
			'992': {
				spaceBetween: 60,
			},
			'768': {
				spaceBetween: 40,
			},
			'576': {
				spaceBetween: 30,
			},
			'0': {
				spaceBetween: 20,
			},
		},
	});

	////////////////////////////////////////////////////
	// 11. td-contact-4-slider-active
	var slider = new Swiper('.td-contact-4-slider-active', {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 20,
		loop: true,
		a11y: false,
		pagination: {
			el: ".td-contact-4-pagenation",
			clickable: true,
		  },
	});


	// 12. td-testimonial-5-slider-active
	var slider = new Swiper('.td-testimonial-5-slider-active', {
		spaceBetween: 30,
		loop: true,
		speed: 3000,
		autoplay: {
		  delay: 3000, 
		},
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 13. td-postbox-slider
	var slider = new Swiper('.td-postbox-slider', {
		slidesPerView: 1,
        spaceBetween: 0,
		loop: true,
		autoplay: {
		  delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".td-postbox-slider-button-next",
			prevEl: ".td-postbox-slider-button-prev",
		},
		breakpoints: {  
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

		////////////////////////////////////////////////////
	// 02. td-portfolio-slider-active
	var swiper = new Swiper(".td-about-slider-active", {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 80,
		loop: true,
		freeMode: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			'768': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'576': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
	});

})(jQuery);