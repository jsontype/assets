;(function ($, window, document, undefined) {
  'use strict';

  function initSplitSlider() {
    if($('.js-split-slider').length) {
      $('.js-split-slider').each(function () {
        $(this).closest('.wpb_column').css('overflow', 'hidden');
        var nav = parseInt($(this).attr('data-nav'), 10);
        var nav_pos = $(this).attr('data-nav-pos');
        $(this).multiscroll({
          scrollingSpeed: 1500,
          easing: 'easeInOutQuart',
          useAnchorsOnLoad: false,
          sectionSelector: '.split-ms-section',
          leftSelector: '.split-ms-left',
          rightSelector: '.split-ms-right',
          navigation: nav,
          navigationPosition: nav_pos,
          normalScrollElements: '#topmenu, .right-menu',
          scrollOverflow: false,
          onLeave: function(index, nextIndex, direction){
            changePagintionColor(nextIndex);
            setTimeout( function() {
              changeMenuColor(nextIndex)
            }, (direction == 'up') ? 500 : 1000);

            var target_left = $('.ms-left .ms-section').eq(index).find('.skills');
            var target_right = $('.ms-right .ms-section').eq($('.ms-right .ms-section').length - index - 1).find('.skills');

            setTimeout( function() {
              skillForSplitSlider(target_left)
            }, 800);
            setTimeout( function() {
              skillForSplitSlider(target_right)
            }, 800);
          }
        });
        $('html, body').addClass('split-slider-init');

        if ( $(window).width() < 992 ){
            $(this).multiscroll.destroy();
        }

      });
    }
  }

  function skillForSplitSlider(parent) {
    $(parent).find('.skill').not('.active').each(function () {
      $(this).addClass('active');
      $(this).each(function () {
        var procent = $(this).attr('data-value');
        $(this).find('.active-line').css('width', procent + '%');
        $(this).find('.counter').countTo();
      });
    });
  }

  function changePagintionColor(index) {
    if ($('.js-split-slider').attr('data-nav')) {
      var color_pass = $('.js-split-slider').attr('data-pagination-color');
      color_pass = color_pass.split(",");
      var color_act = $('.js-split-slider').attr('data-pagination-color-active');
      color_act = color_act.split(",");

      $('#multiscroll-nav ul a').css('background-color', color_pass[index - 1]);
      $('#multiscroll-nav ul li').eq(index - 1).find('a').css('background-color', color_act[index - 1]);
    }
  }
    
  function changeMenuColor(nextIndex) {
    if($('.js-split-slider').length) {
	    if ($('.js-split-slider').css('display') != 'none') {
		    var menu_light = $('.js-split-slider').attr('data-style-header');
		    menu_light = menu_light.split(",");
		    if (menu_light[nextIndex - 1] == '1') {
			    $('.header_top_bg').addClass('menu_light_text');
			    $('.logo-hover').show();
			    $('.main-logo').hide();
		    } else {
			    $('.header_top_bg').removeClass('menu_light_text');
			    $('.logo-hover').hide();
			    $('.main-logo').show();
		    }
	    }
    }
  }

  
  $(window).on('load', function () {
    initSplitSlider();
    $(window).trigger('resize');
    changePagintionColor(1);
    changeMenuColor(1);
  });

	$(window).on('scroll', function () {
		if($('.split-slider ').length && $(window).width() < 992 ) {
			$('.split-slider ').each(function () {
				$(this).find('.skill').not('.active').each(function () {

					if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
						$(this).addClass('active');
						$(this).each(function () {
							var procent = $(this).attr('data-value');
							$(this).find('.active-line').css('width', procent + '%');
							$(this).find('.counter').countTo();
						});
					}
				});
			});
		}
	});

})(jQuery, window, document);