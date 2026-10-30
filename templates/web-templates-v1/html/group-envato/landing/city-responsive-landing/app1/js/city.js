(function($) {
	
	
    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {
        "use strict";
		
        // flexSlider
        $('.flexslider').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 4800,
            animationSpeed: 800
        });
		
        // navigation.LOAD FUNCTION
        screen_height();
	
    });
    // WINDOW.LOAD FUNCTION end
	
	
    // DOCUMENT.READY FUNCTION start
    $(document).ready(function() {
        "use strict";
		
		// kenburnsy
        $("#kenburnsy-bg").kenburnsy({
            fullscreen: true
        });
		
        // magnificPopup
        $('.popup-photo').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                tPrev: '',
                tNext: '',
                tCounter: '%curr% / %total%'
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
		
        // countdown
        $('#countdown').countdown({
            until: new Date(Date.parse(setting.counter.lastDate)),
            layout: $('#countdown').html(),
            timezone: setting.counter.timeZone
        });
		
		// snow
		$(function() {
            $("#snow").each(function() {
                snowBind();
            });
        });
		
        // fire
        // fire home
        $("#fire-home").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#home").fadeIn(2200);
                $(".current").removeClass("current");
                $("#home").addClass("current");
            });
        });
        // fire about
        $("#fire-about").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#about").fadeIn(2200);
                $(".current").removeClass("current");
                $("#about").addClass("current");
            });
        });
        // fire services
        $("#fire-services").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#services").fadeIn(2200);
                $(".current").removeClass("current");
                $("#services").addClass("current");
            });
        });
        // fire photos
        $("#fire-photos").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#photos").fadeIn(2200);
                $(".current").removeClass("current");
                $("#photos").addClass("current");
            });
        });
        // fire contact
        $("#fire-contact").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#contact").fadeIn(2200);
                $(".current").removeClass("current");
                $("#contact").addClass("current");
            });
        });
		
        // menu active state
        $('a.menu-state').on("click", function() {
            $('a.menu-state').removeClass("active");
            $(this).addClass("active");
        });
		
        // owlCarousel
        $(".services-gallery-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
		
        // navigation icon
        $('#navigation-icon, #navigation-icon-mobile').on("click", function() {});
		
		// YTPlayer
        $(function() {
            $(".player").mb_YTPlayer();
        });
	
    });
    // DOCUMENT.READY FUNCTION end
	
	
    // navigation.HEIGHT start
    function screen_height() {
        height = $(window).height();
        $('.main-nav').css('padding-top', height / 2.8);
    }
    // navigation.HEIGHT end
    // navigation.RESIZE FUNCTION start
    $(window).resize(function() {
        screen_height();
    });
    // navigation.RESIZE FUNCTION end
    // navigation.EXECUTION start
    $('.navigation-fire, .navigation-fire-mobile').on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('nav').toggleClass('show');
    });
    $('.main-nav a').on("click", function(e) {
        var hash = $(this.hash);
        $('nav').removeClass('show');
        $('.navigation-fire, .navigation-fire-mobile').removeClass('open');
        e.preventDefault();
    });
    // navigation.EXECUTION end
	
	
	// countdown SETUP start
    var setting = {
        counter: {
            lastDate: '9/18/2016 12:00:00', // target date settings, 'MM/DD/YYYY HH:MM:SS'
            timeZone: null,
        }
    };
	// countdown SETUP end
	
	
    // MOBILE DETECT start
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // MOBILE DETECT end
	
	
})(jQuery);