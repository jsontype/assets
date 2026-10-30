// © Copyright 2024 - Baresto by Designesia 

(function($) {
    'use strict'; // use strict mode

    // editable value
    var logo_pos = 1; // logo position; 1 - center, 2 - left
    var logo_center_top_margin = '-15px'; // define margin top for 'center' logo image
    var logo_left_top_margin = '30px'; // define margin top for 'left' logo image
    var header_sticky = 1; // 1 - yes, 0 - no
    var header_color_on_scroll = 1; // 1- dark, 2 - light

    // read only
    var logo_dir_1 = jQuery('.logo_dark_bg').attr('src');
    var logo_dir_2 = jQuery('.logo_light_bg').attr('src');
    var tmp_lltm = logo_left_top_margin;
    var mobile_menu_show = 0;

    if (header_sticky == 0) {
        $('header').addClass('header_scroll');
    }
    $('header').addClass('transparent');
    if (header_color_on_scroll == 2) {
        $('header').addClass('header_light');
    }


    /* --------------------------------------------------
     * plugin | magnificPopup
     * --------------------------------------------------*/
    function load_magnificPopup() {
        jQuery('.simple-ajax-popup-align-top').magnificPopup({
            type: 'ajax',
            alignTop: true,
            overflowY: 'scroll'
        });
        jQuery('.simple-ajax-popup').magnificPopup({
            type: 'ajax'
        });
        // zoom gallery
        jQuery('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title');
                    //return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: false,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
        });
        // popup youtube, video, gmaps
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        // Initialize popup as usual
        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }

        });
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });
        $('.image-popup-fit-width').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            image: {
                verticalFit: false
            }
        });
        $('.image-popup-no-margins').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });
        $('.image-popup-gallery').magnificPopup({
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title');
                    //return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                }
            },
            gallery: {
                enabled: true
            }
        });
        $('.images-group').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });

        $('.image-popup').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
            // other options
        });
    }


    // --------------------------------------------------
    // init
    // --------------------------------------------------
    function init_de() {

        var $masonry = jQuery('.masonry');
        $masonry.isotope({
            itemSelector: '.item',
            filter: '*'
        });
    }

    /* --------------------------------------------------
     * custom background
     * --------------------------------------------------*/
    function custom_bg() {
        $("div,section").css('background-color', function() {
            return jQuery(this).data('bgcolor');
        });
        $("div,section").css('background-image', function() {
            return jQuery(this).data('bgimage');
        });
        $("div,section").css('background-size', function() {
            return 'cover';
        });
    }

    custom_bg();
    init_de();


    // --------------------------------------------------
    // function
    // --------------------------------------------------

    function video_autosize() {
        jQuery('.de-video-container').each(function() {
            var height_1 = jQuery(this).css("height");
            var height_2 = jQuery(this).find(".de-video-content").css("height");
            var newheight = (height_1.substring(0, height_1.length - 2) - height_2.substring(0, height_2.length - 2)) / 2;
            jQuery(this).find('.de-video-overlay').css("height", height_1);
            jQuery(this).find(".de-video-content").animate({
                'margin-top': newheight
            }, 'fast');
        });
    }


    // --------------------------------------------------
    // sticky header
    // --------------------------------------------------

    jQuery(window).on("scroll", function() {
        jQuery("header").addClass("clone", 1000, "easeOutBounce");

        var $document = $(document);
        var vscroll = 0;

        if ($document.scrollTop() >= 50 && vscroll == 0) {
            jQuery("header.autoshow").removeClass("scrollOff");
            jQuery("header.autoshow").addClass("scrollOn");
            vscroll = 1;
        } else {
            jQuery("header.autoshow").removeClass("scrollOn");
            jQuery("header.autoshow").addClass("scrollOff");
            vscroll = 0;
        }



    });


    // logo center

    function h_center_logo() {
        var position = jQuery(".header_center ul#mainmenu > li").length;

        var i = 0;
        jQuery('.header_center ul#mainmenu > li').each(function() {
            if (i == Math.floor(position / 2) - 1) {
                jQuery(this).after('<li class="logo_pos"><img class="c_logo_light" src="' + logo_dir_1 + '"/><img class="c_logo_dark" src="' + logo_dir_2 + '"/></li>');
            }
            i++;
        });

        // settings

        jQuery('header.header_center .logo_pos img').css('margin-top', logo_center_top_margin);

    }

    // mainmenu create span
    jQuery('#mainmenu > li > a').each(function() {
        if ($(this).next("ul").length > 0) {
            $("<span></span>").insertAfter($(this));
        }
    });

    jQuery('#mainmenu > li > ul > li > a').each(function() {
        if ($(this).next("ul").length > 0) {
            $("<span></span>").insertAfter($(this));
        }
    });


    // mainmenu arrow click
    jQuery("#mainmenu > li > span, #mainmenu > li > ul > li > span").on("click", function() {
        $('header').css("height", "auto");
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $(this).next("ul").css("height", "auto");
                var curHeight = $(this).next("ul").height();
                $(this).next("ul").css("height", "0");
                $(this).next("ul").animate({
                    'height': curHeight
                }, 300, 'easeOutCubic');

                break;

            case 2:
                $(this).next("ul").animate({
                    'height': "0"
                }, 300, 'easeOutCubic');
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });


    if (logo_pos == 1) {
        h_center_logo();
    } else {
        jQuery('header').removeClass("header_center");
        jQuery('header').addClass("header_left");
        jQuery('header.header_left #logo img').css('margin-top', logo_left_top_margin);
    }

    jQuery(window).resize(function() {
        enquire.register("screen and (min-width: 993px)", {
            match: function() {
                jQuery('header.header_left #logo img').css('margin-top', tmp_lltm);
                if (header_color_on_scroll == 2) {
                    jQuery('header').addClass("header_light");
                }
            },
            unmatch: function() {
                jQuery('header.header_left #logo img').css('margin-top', "0px");
                if (header_color_on_scroll == 2) {
                    jQuery('header').removeClass("header_light");
                }
            }
        });


        init_de();
        video_autosize();

        jQuery('.de-preview').each(function() {
            var w = parseInt(jQuery(this).css("width"));
            jQuery(this).css("height",w);
            var h = parseInt(jQuery(this).find("img").css("height"))-w;
            jQuery(this).find("img").css('bottom',-h);
        });


        $('header').removeClass('smaller');
        $('header').removeClass('clone');

        jQuery('header').removeClass("bg-dark");
        jQuery('header').css("height", "70px");
        mobile_menu_show = 0;


    });


    function init() {

        window.addEventListener('scroll', function(e) {

            var mq = window.matchMedia("(min-width: 993px)");
            var ms = window.matchMedia("(min-width: 768px)");
            if (mq.matches) {
                var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    shrinkOn = 0,
                    header = jQuery("header");
                if (distanceY > shrinkOn) {
                    header.addClass("smaller");
                } else {
                    if (header.hasClass('smaller')) {
                        header.removeClass('smaller');
                    }
                }
            }
            if (mq.matches) {
                if (jQuery("header").hasClass("side-header")) {
                    if (jQuery(document).scrollTop() >= h) {
                        jQuery('#de-sidebar').css("position", "fixed");
                        if (parseInt(sh, 10) > parseInt(dh, 10)) {
                            jQuery('#de-sidebar').css("top", -h);
                        }
                        jQuery('#main').addClass("col-md-offset-3");
                        jQuery('h1#logo img').css("padding-left", "7px");
                        jQuery('header .h-content').css("padding-left", "7px");
                        jQuery('#mainmenu li').css("width", "103%");
                    } else {
                        jQuery('#de-sidebar').css("position", "relative");
                        if (parseInt(sh, 10) > parseInt(dh, 10)) {
                            jQuery('#de-sidebar').css("top", 0);
                        }
                        jQuery('#main').removeClass("col-md-offset-3");
                        jQuery('h1#logo img').css("padding-left", "0px");
                        jQuery('header .h-content').css("padding-left", "0px");
                        jQuery('#mainmenu li').css("width", "100%");
                    }
                }

            }


        });
    }
    window.onload = init();


    // --------------------------------------------------
    // owlCarousel
    // --------------------------------------------------

    jQuery("#gallery-carousel").owlCarousel({
        items: 4,
        navigation: false,
        pagination: false
    });

    jQuery("#timeline-carousel").owlCarousel({
        items: 4,
        navigation: false,
        pagination: true
    });

    jQuery(".carousel-gallery").owlCarousel({
        items: 4,
        navigation: false,
        pagination: false
    });

    jQuery("#blog-carousel").owlCarousel({
        items: 2,
        navigation: false,
        pagination: true
    });



    jQuery("#testimonial-carousel").owlCarousel({
        items: 2,
        navigation: false
    });

    jQuery("#logo-carousel").owlCarousel({
        items: 6,
        navigation: false,
        pagination: false,
        autoPlay: true
    });

    jQuery("#contact-carousel").owlCarousel({
        items: 1,
        singleItem: true,
        navigation: false,
        pagination: false,
        autoPlay: true
    });


    jQuery(".carousel-single-loop").owlCarousel({
        items: 1,
        singleItem: true,
        navigation: false,
        pagination: false,
        autoPlay: true,
        mouseDrag: false,
        touchDrag: false,
        transitionStyle: "fade"
    });


    jQuery(".text-slider").owlCarousel({
        items: 1,
        singleItem: true,
        navigation: false,
        pagination: false,
        mouseDrag: false,
        touchDrag: false,
        autoPlay: 4000,
        transitionStyle: "fade"
    });

    jQuery(".fluid-carousel").owlCarousel({
        items: 6,
        singleItem: false,
        navigation: false,
        pagination: false,
        mouseDrag: false,
        touchDrag: false,
        autoPlay: 4000,
        transitionStyle: "fade"
    });




    jQuery(".blog-slide").owlCarousel({
        items: 1,
        singleItem: true,
        navigation: false,
        pagination: false,
        autoPlay: false
    });

    jQuery(".testimonial-list").owlCarousel({
        items: 1,
        singleItem: true,
        navigation: false,
        pagination: true,
        autoPlay: false
    });


    // Custom Navigation owlCarousel
    $(".next").on("click", function() {
        $(this).parent().parent().find('.blog-slide').trigger('owl.next');
    });
    $(".prev").on("click", function() {
        $(this).parent().parent().find('.blog-slide').trigger('owl.prev');
    });

    // --------------------------------------------------
    // custom positiion
    // --------------------------------------------------
    var $doc_height = jQuery(window).innerHeight();
    jQuery('#homepage #content.content-overlay').css("margin-top", $doc_height);
    var picheight = jQuery('.center-y').css("height");
    picheight = parseInt(picheight, 10);
    jQuery('.center-y').css('margin-top', (($doc_height - picheight) / 2) - 90);
    jQuery('.full-height').css("height", $doc_height);
    jQuery('.full-height .de-video-container').css("height", $doc_height);



    // --------------------------------------------------
    // blog list hover
    // --------------------------------------------------
    jQuery(".blog-list").on("mouseenter", function() {
        var v_height = jQuery(this).find(".blog-slide").css("height");
        var v_width = jQuery(this).find(".blog-slide").css("width");
        var newheight = (v_height.substring(0, v_height.length - 2) / 2) - 40;
        jQuery(this).find(".owl-arrow").css("margin-top", newheight);
        jQuery(this).find(".owl-arrow").css("width", v_width);
        jQuery(this).find(".owl-arrow").fadeTo(150, 1);
        //alert(v_height);
    }).on("mouseleave", function() {
        jQuery(this).find(".owl-arrow").fadeTo(150, 0);

    })

    //  logo carousel hover
    jQuery("#logo-carousel img").on("mouseenter", function() {
        jQuery(this).fadeTo(150, .5);
    }).on("mouseleave", function() {
        jQuery(this).fadeTo(150, 1);
    })


    // scroll
    jQuery.scrollSpeed = function(step, speed, easing) {

        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;

        if (window.navigator.msPointerEnabled)

            return false;

        $window.on('mousewheel DOMMouseScroll', function(e) {

            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scrollX = $document.width() > $window.width();
            scroll = true;

            if (scrollY) {

                view = $window.height();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.height() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;

                $body.stop().animate({

                    scrollTop: root

                }, speed, option, function() {

                    scroll = false;

                });
            }

            if (scrollX) {

                view = $window.width();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.width() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;

                $body.stop().animate({

                    scrollLeft: root

                }, speed, option, function() {

                    scroll = false;

                });
            }

            return false;

        }).on('scroll', function() {

            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();

        }).on('resize', function() {

            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();

        });
    };


    // scroll
    jQuery.easing.default = function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };


    $(window).on('load', function() {

        video_autosize();

        // --------------------------------------------------
        // filtering gallery
        // --------------------------------------------------
        var $container = jQuery('#gallery');
        $container.isotope({
            itemSelector: '.item',
            filter: '*'
        });
        jQuery('#filters a').on("click", function() {
            var $this = jQuery(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents();
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');

            var selector = jQuery(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });


        jQuery('.de-preview').each(function() {
            var w = parseInt(jQuery(this).css("width"));
            jQuery(this).css("height",w);
            var h = parseInt(jQuery(this).find("img").css("height"))-w;
            jQuery(this).find("img").css('bottom',-h);
        });

        jQuery('.de-preview').on("mouseenter", function() {
            jQuery(this).find("img").animate({
                        'bottom': '0'
                    }, 10);
        }).on("mouseleave", function() {
            var w = parseInt(jQuery(this).css("width"));
            var h = parseInt(jQuery(this).find("img").css("height"))-w;
            jQuery(this).find("img").animate({
                        'bottom': -h
                    }, 10);
        })

        // --------------------------------------------------
        // tabs
        // --------------------------------------------------
        jQuery('.de_tab').find('.de_tab_content .tab_single_content').hide();
        jQuery('.de_tab').find('.de_tab_content .tab_single_content:first').show();
        jQuery('li').find('.v-border').fadeTo(150, 0);
        jQuery('li.active').find('.v-border').fadeTo(150, 1);

        jQuery('.de_nav li').click(function() {
            jQuery(this).parent().find('li').removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).parent().parent().find('.v-border').fadeTo(150, 0);
            jQuery(this).parent().parent().find('.de_tab_content .tab_single_content').hide();

            var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
            jQuery(this).parent().parent().find('.de_tab_content .tab_single_content:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
            jQuery(this).find('.v-border').fadeTo(150, 1);
        });


        // --------------------------------------------------
        // tabs
        // --------------------------------------------------
        jQuery('.de_review').find('.de_tab_content .tab_single_content').hide();
        jQuery('.de_review').find('.de_tab_content .tab_single_content:first').show();
        //jQuery('.de_review').find('.de_nav li').fadeTo(150,.5);
        jQuery('.de_review').find('.de_nav li:first').fadeTo(150, 1);

        jQuery('.de_nav li').click(function() {
            jQuery(this).parent().find('li').removeClass("active");
            //jQuery(this).parent().find('li').fadeTo(150,.5);
            jQuery(this).addClass("active");
            jQuery(this).fadeTo(150, 1);
            jQuery(this).parent().parent().find('.de_tab_content .tab_single_content').hide();

            var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
            jQuery(this).parent().parent().find('.de_tab_content .tab_single_content:eq(' + indexer + ')').show(); //uses whatever index the link has to open the corresponding box 
        });


        // --------------------------------------------------
        // toggle
        // --------------------------------------------------
        jQuery(".toggle-list h2").addClass("acc_active");
        jQuery(".toggle-list h2").toggle(
            function() {
                jQuery(this).addClass("acc_noactive");
                jQuery(this).next(".ac-content").slideToggle(200);
            },
            function() {
                jQuery(this).removeClass("acc_noactive").addClass("acc_active");
                jQuery(this).next(".ac-content").slideToggle(200);
            })

        var mb;

        // --------------------------------------------------
        // navigation for mobile
        // --------------------------------------------------



        jQuery('#menu-btn').on("click", function() {
            if (mobile_menu_show == 0) {
                jQuery('header').addClass("bg-dark");
                jQuery(this).addClass("click");
                var mm_height = parseInt(jQuery('#mainmenu').css("height")) + 100;
                jQuery('header').stop(true).animate({
                    height: mm_height
                }, 300);
                mobile_menu_show = 1;
            } else {
                jQuery('header').removeClass("bg-dark");
                jQuery(this).removeClass("click");
                jQuery('header').stop(true).animate({
                    height: "70px"
                }, 200);
                mobile_menu_show = 0;
            }
        })

        // one page navigation
        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */

        jQuery("#homepage nav a, .scroll-to").click(function(evn) {

            if (this.href.indexOf('#') != -1) {
                evn.preventDefault();
                jQuery('html,body').scrollTo(this.hash, this.hash);
            }
        });

        jQuery(".scrollTo .de_nav li").click(function(evn) {

            var $link = jQuery(this).attr('data-link');
            if ($link.indexOf('#') != -1) {
                evn.preventDefault();
                jQuery('html,body').scrollTo($link, $link);
            }
        });

        jQuery("a.btn").click(function(evn) {

            if (this.href.indexOf('#') != -1) {
                evn.preventDefault();
                jQuery('html,body').scrollTo(this.hash, this.hash);
            }
        });

        jQuery('.item .icon-info').on("click", function() {
            jQuery('.page-overlay').show();
            url = jQuery(this).attr("data-value");

            jQuery("#loader-area .project-load").load(url, function() {
                jQuery("#loader-area").slideDown(500, function() {
                    jQuery('.page-overlay').hide();
                    jQuery('html, body').animate({
                        scrollTop: jQuery('#loader-area').offset().top - 70
                    }, 500, 'easeOutCubic');

                    //

                    jQuery(".image-slider").owlCarousel({
                        items: 1,
                        singleItem: true,
                        navigation: false,
                        pagination: true,
                        autoPlay: false
                    });

                    jQuery(".container").fitVids();

                    jQuery('#btn-close-x').on("click", function() {
                        jQuery("#loader-area").slideUp(500, function() {
                            jQuery('html, body').animate({
                                scrollTop: jQuery('#section-gallery').offset().top - 70
                            }, 500, 'easeOutCirc');
                        });

                        return false;

                    });

                });
            });
        });

        jQuery('.item').on("click", function() {
            $('#navigation').show();
        });

        // --------------------------------------------------
        // custom page with background on side
        // --------------------------------------------------

        var target = $('.center-y,#subheader .s1,#subheader .s2');
        var targetHeight = target.outerHeight();

        $(document).scroll(function(e) {
            var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
            if (scrollPercent >= 0) {
                target.css('opacity', scrollPercent);
            }

            var $maxScroll = 300;
            var $maxScale = 1.3;
            var $x = $(window).scrollTop() / 1000 + 1;
            if ($(window).scrollTop() > $maxScroll) $x = $maxScale;
            $('.bg-scale').css({
                transform: 'scale(' + $x + ',' + $x + ')'
            });
        });


    });


    // --------------------------------------------------
    // css animation
    // --------------------------------------------------
    var v_count = '0';

    $(window).on('load', function() {

        // btn arrow up
        jQuery(".arrow-up").on("click", function() {
            jQuery(".coming-soon .coming-soon-content").fadeOut("medium", function() {
                jQuery("#hide-content").fadeIn(600, function() {
                    jQuery(".arrow-up").fadeTo(300, 0);
                    jQuery('.arrow-down').fadeTo(300, 1);
                });
            });
        });

        // btn arrow down
        jQuery(".arrow-down").on("click", function() {
            jQuery("#hide-content").fadeOut("slow", function() {
                jQuery(".coming-soon .coming-soon-content").fadeIn(800, function() {
                    jQuery(".arrow-up").fadeTo(300, 1);
                    jQuery('.arrow-down').fadeTo(300, 0);
                });
            });
        });

        // isotope
        new WOW().init();
        load_magnificPopup();
        $(".jarallax").jarallax();
        jQuery('#preloader').fadeOut(500);
    });

    var lastScrollTop = 0;

    jQuery(window).scroll(function() {

        var st = $(this).scrollTop();
        if (st < lastScrollTop) {
            jQuery('header').removeClass('scroll-down').addClass('scroll-up');
        } else {
            jQuery('header').removeClass('scroll-up').addClass('scroll-down');
        }
        lastScrollTop = st;
        // --------------------------------------------------
        // counter
        // --------------------------------------------------

        jQuery('.timer').each(function() {
            var imagePos = jQuery(this).offset().top;

            var topOfWindow = jQuery(window).scrollTop();
            if (imagePos < topOfWindow + 500 && v_count == '0') {

                jQuery(function($) {

                    // start all the timers
                    jQuery('.timer').each(count);


                    function count(options) {
                        v_count = '1';
                        var $this = jQuery(this);
                        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                        $this.countTo(options);
                    }
                });

            }
        });

        // --------------------------------------------------
        // progress bar
        // --------------------------------------------------
        jQuery('.de-progress').each(function() {
            var pos_y = jQuery(this).offset().top;
            var value = jQuery(this).find(".progress-bar").attr('data-value');

            var topOfWindow = jQuery(window).scrollTop();
            if (pos_y < topOfWindow + 500) {
                jQuery(this).find(".progress-bar").css('width', value);
            }
        });

        jQuery('.animated').each(function() {
            var imagePos = jQuery(this).offset().top;
            var timedelay = jQuery(this).attr('data-delay');

            var topOfWindow = jQuery(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                jQuery(this).delay(timedelay).queue(function() {
                    jQuery(this).fadeTo(1, 500);
                    var $anim = jQuery(this).attr('data-animation');
                    jQuery(this).addClass($anim).clearQueue();
                });

            }
        });

        jQuery(".nav-exit").on("click", function() {
            $.magnificPopup.close();
        });

    });

})(jQuery);