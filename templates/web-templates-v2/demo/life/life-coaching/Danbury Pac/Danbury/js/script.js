(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 250) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			}else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	// dropdown menu

	var mobileWidth = 992;
	var navcollapse = $('.navigation li.dropdown');
	 
	$(window).on('resize', function(){
	    navcollapse.children('ul').hide();
	});

	navcollapse.hover(function() {
	if($(window).innerWidth() >= mobileWidth){
	      $(this).children('ul').stop(true, false, true).slideToggle(300);
	    }
	});

	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');		
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	//Submenu Dropdown Toggle
	if($('.main-header .main-menu').length){
		$('.main-header .main-menu .navbar-toggle').click(function(){
			$(this).prev().prev().next().next().children('li.dropdown').hide();
		});	
	}

	//services effect
	var target = $('.services-block-two');
	target.on('mouseenter', function() {
		target.children().removeClass('active');
		$(this).children().addClass('active');
	})	
	
	//Product Tabs
	if($('.project-tab').length){
		$('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}

	jQuery(document).ready(function($){
		var tabs = $('.default-tabs');
		tabs.each(function(){
			var tab = $(this),
				tabItems = tab.find('ul.default-tabs-navigation'),
				tabContentWrapper = tab.children('ul.default-tabs-content'),
				tabNavigation = tab.find('nav');
			tabItems.on('click', 'a', function(event){
				event.preventDefault();
				var selectedItem = $(this);
				if( !selectedItem.hasClass('selected') ) {
					var selectedTab = selectedItem.data('content'),
						selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
						slectedContentHeight = selectedContent.innerHeight();
					
					tabItems.find('a.selected').removeClass('selected');
					selectedItem.addClass('selected');
					selectedContent.addClass('selected').siblings('li').removeClass('selected');
					//animate tabContentWrapper height when content changes 
					tabContentWrapper.animate({
						'height': slectedContentHeight
					}, 200);
				}
			});

			//hide the .default-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
			checkScrolling(tabNavigation);
			tabNavigation.on('scroll', function(){ 
				checkScrolling($(this));
			});
		});
		
		$(window).on('resize', function(){
			tabs.each(function(){
				var tab = $(this);
				checkScrolling(tab.find('nav'));
				tab.find('.default-tabs-content').css('height', 'auto');
			});
		});

		function checkScrolling(tabs){
			var totalTabWidth = parseInt(tabs.children('.default-tabs-navigation').width()),
			 	tabsViewport = parseInt(tabs.width());
			if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
				tabs.parent('.default-tabs').addClass('is-ended');
			} else {
				tabs.parent('.default-tabs').removeClass('is-ended');
			}
		}
	});	
	
	//Product Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
				1400:{
					items:4
				},
				1600:{
					items:4
				}
			}
		});    		
	}	
	
	//Gallery With Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
		
	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
		
	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;
			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class="icon-arrows"></span>', '<span class="right_arrow icon-arrows"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});
			$sync4
				.owlCarousel({
					loop:true,
					margin:10,
					items: 1,
					nav: false,
					navText: [ '<span class="icon icon-arrows"></span>', '<span class="icon right_arrow icon-arrows"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}	
	
	//Fact Counter + Text Count
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}
			
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}	

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}	
	
	//Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});    		
	}
		
	//Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
			}
		});    		
	}		
	
	//Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}		

	//Four Item Carousel
	if ($('.four-item-fluidcarousel').length) {
		$('.four-item-fluidcarousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1500:{
					items:4
				}
			}
		});    		
	}
	
	//five Item Carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	//six Item Carousel
	if ($('.six-item-carousel').length) {
		$('.six-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				767:{
					items:3
				},
				900:{
					items:4
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});    		
	}
	
	//Gallery With Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	//Masonary
	function enableMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : 0
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();

	// isotope style
	if ($('.isotope_block').length) {
		$('.isotope_block').isotope({
			layoutMode:'masonry'
		});
	}
	
	//21 Price Ranger 
	function priceFilter() {
	    if ($('.price-ranger').length) {
	        $('.price-ranger #slider-range').slider({
	            range: true,
	            min: 120,
	            max: 500,
	            values: [120, 300],
	            slide: function(event, ui) {
	                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
	                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
	            }
	        });
	        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
	        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
	    };
	}	
	priceFilter();
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	if ($('.select-menu').length) {
		$('.select-menu').selectmenu();
	}
		
	//Contact Form Validation
	if($('#contact-form').length){
		$("#contact-form").validate({
		    submitHandler: function(form) {
		      var form_btn = $(form).find('button[type="submit"]');
		      var form_result_div = '#form-result';
		      $(form_result_div).remove();
		      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
		      var form_btn_old_msg = form_btn.html();
		      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
		      $(form).ajaxSubmit({
		        dataType:  'json',
		        success: function(data) {
		          if( data.status == 'true' ) {
		            $(form).find('.form-control').val('');
		          }
		          form_btn.prop('disabled', false).html(form_btn_old_msg);
		          $(form_result_div).html(data.message).fadeIn('slow');
		          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
		        }
		      });
		    }
		});
	}

	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date
			Self.countdown(countDate, function(event) {
	     		$(this).html('<h2>'+ event.strftime('%D : %H : %M : %S') +'</h2>');
	   		});
		});
	};

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	if ($('.our-history .bxslider').length) {
		$('.our-history .bxslider').bxSlider({
	        nextSelector: '.our-history #slider-next',
	        prevSelector: '.our-history #slider-prev',
	        nextText: '<i class="flaticon-right-arrow"></i>',
	        prevText: '<i class="flaticon-left-arrow"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '.our-history'
	    });
	};	

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is scroll, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		factCounter();
	});

/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

})(window.jQuery);