/***************************************************
==================== JS INDEX ======================
****************************************************
01. data-background
02. back-to-top
03. search form
04. magnificPopup video view
05. td-hrader-lang
06. td-side-panel
07. Counter Js
08. mobile-menu-active
09. Sidebar Js
10. progress-data-woidth
11. Wow Js
12. Parallax Js
13. button hover animation
14. magnific-Popup-image-active
15. Nice Select Js
16. Jquery Appear raidal
17. about-navebar-start
18. sticky js
19. preloader Js
 ****************************************************/

(function ($) {
	"use strict";
	var windowOn = $(window);

	////////////////////////////////////////////////////
	// 01. data-background
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	////////////////////////////////////////////////////
	// 02. back-to-top
	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');

	windowOn.scroll(function() {
		if (windowOn.scrollTop() > 300) {
			btn_wrapper.addClass('back-to-top-btn-show');
		} else {
			btn_wrapper.removeClass('back-to-top-btn-show');
		}
	});
	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

	if ($('.td-header-height').length > 0) {
		var headerHeight = document.querySelector(".td-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		$(".td-header-height").each(function () {
			$(this).css({
				'height' : $(this).height()
			});
		});
	}

	////////////////////////////////////////////////////
	// 03. search form
	$(".td-search-click").on("click", function () {
		$(".td-header-input-toggle,.input-body-overlay").addClass("active");
	});

	$(".input-body-overlay").on("click", function () {
		$(".td-header-input-toggle,.input-body-overlay").removeClass("active");
	});

	$('.td-faq-wrapper .accordion-item').on("click", function(){
		$(this).addClass('td-faq-active').siblings().removeClass('td-faq-active');
	});  

	////////////////////////////////////////////////////
	// 04. magnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 05. td-hrader-lang
	if ($("#td-header-lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
	
			if (document.getElementById('td-header-lang-toggle').contains(e.target)){
				$(".td-lang-list").toggleClass("td-lang-list-open");
			}
			else{
				$(".td-lang-list").removeClass("td-lang-list-open");
			}
		});
	}

	////////////////////////////////////////////////////
	// 06. td-side-panel
	function mediaSize() { 
		if (window.matchMedia('(min-width: 768px)').matches) {
			const panels = document.querySelectorAll('.col-custom')
			panels.forEach(panel => {
				panel.addEventListener('click', () => {
					removeActiveClasses()
					panel.classList.add('active')
				})
			})
			function removeActiveClasses() {
				panels.forEach(panel => {
					panel.classList.remove('active')
				})
			}
		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
			$(".col-custom ").addClass("active");
		}
	};
	mediaSize();
	window.addEventListener('resize', mediaSize, false); 


	$('.service__item-8').on("mouseenter", function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#service-bg-img').removeClass().addClass($(this).attr('rel'));
	});   

	////////////////////////////////////////////////////
	// 07. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	////////////////////////////////////////////////////
	// 08. mobile-menu-active

	if($('.td-main-menu-content').length && $('.td-main-menu-mobile').length){
		let navContent = document.querySelector(".td-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".td-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;


		let arrow = $(".td-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

			self.append(function () {
			return arrowBtn;
			});

			self.find("button").on("click", function (e) {
			e.preventDefault();
			let self = $(this);
			self.toggleClass("dropdown-opened");
			self.parent().toggleClass("expanded");
			self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			self.parent().parent().children(".td-submenu").slideToggle();
			});

		});
	}

	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".td-menu-bar").on("click", function () {
		$(".tdoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tdoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tdoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	////////////////////////////////////////////////////
	// 10. progress-data-woidth
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	////////////////////////////////////////////////////
	// 11. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 12. Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	};
	
	if ($('.scene-2').length > 0) {
		$('.scene-2').parallax({
			scalarX: 15.0,
			scalarY: 15.0,
		});
	};

	////////////////////////////////////////////////////
	// 13. button hover animation
	$('.td-btn-rounded').on('mouseenter', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('.td-btn-circle-dot').css({
			top: y,
			left: x
		});
	});

	////////////////////////////////////////////////////
	// 14. magnific-Popup-image-active
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		removalDelay: 500,
	});

	////////////////////////////////////////////////////
	// 15. Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
	// 16. Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		var $this = $(this),
		knobVal = $this.attr('data-rel');
		$this.knob({
		'draw': function () {
			$(this.i).val(this.cv + '%')
		}
		});

		$this.appear(function () {
		$({
			value: 0
		}).animate({
			value: knobVal
		}, {
			duration: 2000,
			easing: 'swing',
			step: function () {
			$this.val(Math.ceil(this.value)).trigger('change');
			}
		});
		}, {
		accX: 0,
		accY: -150,
		});
	});
	}
	
	////////////////////////////////////////////////////
	// 17. about-navebar-start
	$('#section-time').onePageNav({
		currentClass: 'current',
		scrollSpeed: 950,
	});

	////////////////////////////////////////////////////
	// 18. sticky js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("td-header-sticky");
		} else {
			$("#header-sticky").addClass("td-header-sticky");
		}
	});
	
	////////////////////////////////////////////////////
	// 19. preloader Js
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
      loader.style.display = "none";
    });

})(jQuery);
