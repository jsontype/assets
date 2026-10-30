/* SCRIPT.JS */
/* ------------------------------------------------------------------------------------------------------- */
/* This is main JS file that contains custom rules used in this template */
/* ------------------------------------------------------------------------------------------------------- */
/* Template Name: PRAGUE */
/* Version: 1.1.0 Initial Release */
/* Build Date: */
/* Author:  */
/* Website: */
/* Copyright: (C) */
/* ------------------------------------------------------------------------------------------------------ */

/* -------------------------------------------------------- */
/* TABLE OF CONTENTS: */
/* -------------------------------------------------------- */
/*
1. INIT
2. WINDOW LOAD
3. WINDOW RESIZE
4. WINDOW SCROLL
5. MENU
6. BACKGROUND
7. PAGE HEIGHT CALCULATE
8. TOP BANNER HEIGHT AND CURSOR
9. FULL VIDEO WIDTH
10. BUTTON CREATIVE ANIMATE
11. FIGURES ANIMATE & WIDTH
12. SWIPER SLIDER
14. TESTEMONIALS
15. COMING SOON
16. INIT VIVUS FOR SVG
17. FILMSTRIP SLIDER HEIGHT
18. FILMSTRIP FILTER
19. TOP FILTER
20. TIMELINE SORTING
21. TIMELINE IMAGE HEIGHT & SCROLL
22. TIMELINE EXHIBITION
23. SLICK SLIDER
24. PROJECT LIST SLIDER
25. PROJECT CATEGORIES
26. PORTFOLIO
27. PROJECT DETAIL PARALLAX
28. PROJECT DETAIL BEFORE AFTER
29. LOAD MORE
*/
/* -------------------------------------------------------- */

;(function($, window, document, underfined) {
    'use strict';


    /***********************************/
    /* INIT */
    /**********************************/
    var swipers = [],
        vivus = [],
        slicks = [],
        winScr,
        isotopeGridVar,
        isotopeMasonryVar,
        _isresponsive,
        smPoint = 768,
        mdPoint = 992,
        lgPoint = 1200,
        addPoint = 1600,
        _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

    /**
     *
     * PageCalculations function
     * @since 1.0.0
     * @version 1.0.1
     * @var winW
     * @var winH
     * @var winS
     * @var pageCalculations
     * @var onEvent
     **/

    if (typeof pageCalculations !== 'function') {

        var winW, winH, winS, pageCalculations, documentHeight, $html, latestKnownScrollY, lastKnownScrollY, onEvent = window.addEventListener;

        pageCalculations = function (func) {

            winW = window.innerWidth;
            winH = window.innerHeight;
            winS = $(window).scrollTop();
            documentHeight = $(document).height(),
                $html = $('html');
            latestKnownScrollY = $(window).scrollTop(),
                lastKnownScrollY = latestKnownScrollY;

            if (!func) return;

            onEvent('load', func, true); // window onload
            onEvent('resize', func, true); // window resize
            //onEvent("orientationchange", func, false); // window orientationchange

        } // end pageCalculations

        pageCalculations(function () {
            pageCalculations();
        });

    }

    pageCalculations(function () {
        parallaxDetailHeigth();
    });

    wpc_add_img_bg('.s-loader-switch');

    /***********************************/
    /* WINDOW LOAD */
    /**********************************/

    $(window).on('load', function () {
        $('body').addClass('loaded').find('.prague-loader').addClass('is-loaded');
        startBtnAnimate();
        fixShowcase();
        startFigureAnimate();
        testimonialsSliderHeight();
        initSwiper();
        pragueGrid();
        pragueMasonry();
        pragueTimelineList();
        initVivus();
        initProjectDetailSlider();
        initProjectDetailFullScreen();
        beforeAfter();
        initSlick();
        topBannerHeight();
        showcaseSlider();
        // $('. -item-paralax').foxParalax();
    });

    // LAZYLOAD
    $(window).on("load", function () {
        $("img[data-lazy-src]").foxlazy();
    });

    /***********************************/
    /* WINDOW RESIZE */
    /**********************************/
    $(window).on('resize', function () {
        $('.filmstrip-slider').each(function (index) {
            var that = $(this);
            setTimeout(function () {
                that[index].slick.refresh();
            }, 0);
        });
        testimonialsSliderHeight();
        topBannerHeight();
    });


    /***********************************/
    /* WINDOW SCROLL */
    /**********************************/
    $(window).on('scroll', function () {
        winS = $(window).scrollTop();
        latestKnownScrollY = $(window).scrollTop();
        lastKnownScrollY = latestKnownScrollY;
        Parallax.update();
        startBtnAnimate();
        startFigureAnimate();

        if ($(this).scrollTop() >= 50) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }

    });


    /***********************************/
    /* MENU */
    /**********************************/
    // social icons
    $('.prague-social-nav > a').on('click', function (e) {
        var thisItem = $(this);
        var thisParent = $(this).parent('.prague-social-nav');
        var siblings = $(thisParent).find('.social-content');
        if ($(siblings).length > 0 && $(siblings).css('display') === 'none') {
            $(siblings).show(300);
        } else {
            $(siblings).hide(300);
        }
        e.preventDefault();
    });

    // menu
    function openSimpleMenu() {
        $('.prague-nav-menu-icon').toggleClass('active');
        $('.prague-navigation').slideToggle();
        $('.prague-header').toggleClass('open-menu');
        $('body, html').toggleClass('no-scroll');

        if (window.enable_foxlazy) {
            $(window).trigger("load");
        }
    }

    $('.prague-nav-menu-icon a').on('click', function (e) {
        openSimpleMenu();
        e.preventDefault();
    });




    // menu clone link
    $('.prague-header.full .menu-item-has-children').each(function () {
        var $this = $(this),
            $sub_menu = $this.find('> .sub-menu');

        if (!/#/.test($this.find('> a')[0].href)) {
            $sub_menu.prepend($this.find('> a').clone().addClass('clone-menu-item'));
        }

        $this.find('> a').on('click', function () {
            return false;
        });

    });

    // full menu navigation
    var show_level = 0;

    function moveMenu(direction) {

        var submenu_count = $('.sub-menu.active').length;

        if (direction == 'toRight') {
            show_level--;
        } else {
            show_level++;
        }

        if (show_level < 0) show_level = 0;
        if (show_level >= submenu_count) show_level = submenu_count;

        $('.prague-header.full nav').css('transform', 'translateX(-' + (show_level * 100) + '%)');

        if (show_level > 0) {
            $('.prague-header-form').addClass('hidyy');
        } else {
            $('.prague-header-form').removeClass('hidyy');
        }

    }

    $('.prague-header.full .main-menu a').on('click', function (e) {

        if ($(this).hasClass('clone-menu-item')) return true;

        $('.sub-menu').removeClass('active');
        $(this).closest('.sub-menu').addClass('active');
        $(this).next('ul').addClass('active');

        // swipe menu
        moveMenu();

    });

    if ($('.prague-navigation').length) {
        // swipe menu events
        var hammertime = new Hammer($('.prague-navigation-inner')[0], {});
        hammertime.on('swipeleft', function (_this) {
            moveMenu();
        });
        hammertime.on('swiperight', function (_this) {
            moveMenu('toRight');
        });
    }


    /***********************************/
    /* BACKGROUND */
    /**********************************/
    //sets child image as a background
    function wpc_add_img_bg(img_sel, parent_sel) {

        if (!img_sel) {
            return false;
        }

        var $parent, $neighbor, $imgDataHidden, $imgDataSibling, _this;

        $(img_sel).each(function () {
            _this = $(this);
            $imgDataHidden = _this.data('s-hidden');
            $imgDataSibling = _this.data('s-sibling');
            $parent = _this.closest(parent_sel);
            $parent = $parent.length ? $parent : _this.parent();

            if ($imgDataSibling) {
                $parent.addClass('s-back-sibling-switch');
                $neighbor = _this.next();
                $neighbor = $neighbor.length ? $neighbor : _this.next();
                $neighbor.css('background-image', 'url(' + this.src + ')').addClass('s-sibling-switch');
            } else {
                $parent.css('background-image', 'url(' + this.src + ')').addClass('s-back-switch');
            }

            if ($imgDataHidden) {
                _this.css('visibility', 'hidden');
            } else {
                _this.hide();
            }
        });
    }


    /***********************************/
    /* PAGE HEIGHT CALCULATE */
    /**********************************/
    function pageHeightCalculate() {
        if ($('.page-calculate.fullheight').length) {

            var pageCalculate = $('.page-calculate.fullheight'),
                pageCalculateContentHeight = $('.page-calculate.fullheight .page-calculate-content').outerHeight(true);

            if (winH < pageCalculateContentHeight) {
                pageCalculate.css('height', pageCalculateContentHeight);
            } else {
                pageCalculate.css('height', winH);
            }
        }
    }

    function pageOnlyFullHeight(wrapper) {
        var $wrapperHeight = $(wrapper);
        $wrapperHeight.outerHeight(winH);
    }


    /***********************************/
    /* FULL HEIGHT BANNER */
    /**********************************/

    function topBannerHeight() {
        var headerH = $('.prague-header').outerHeight() || 0;
        var footerH = $('.prague-footer').not('.prague-footer.modern').outerHeight() || 0;
        var windowH = $(window).height(); //it's fixed white space on mobile scroll and good works :)
        var offsetTop;
        if ($('#wpadminbar').length) {
            offsetTop = headerH + $('#wpadminbar').outerHeight();
        } else {
            offsetTop = headerH;
        }


        $('.full-height-window').css('height', (windowH) + 'px');
        $('.full-height-window-min-hard').css('min-height', (windowH - offsetTop) + 'px');
        $('.full-height-window-hard').css('height', (windowH - offsetTop) + 'px');
        $('.full-height-window-head-foot').css('height', (windowH - offsetTop - footerH) + 'px');
        $('.middle-height-window-hard').css('height', (windowH - offsetTop) * 0.8 + 'px');
    }


    /***********************************/
    /* TOP BANNER HEIGHT AND CURSOR */
    /**********************************/

    function topFullBannerHeight() {

        var bannerFullWrapper = $('.top-banner.fullheight'),
            bannerFullContent = $('.top-banner.fullheight .content'),
            bannerFullContentHeight = $('.top-banner.fullheight .content').outerHeight(true);

        var heigh = '100vh';
        if (heigh < bannerFullContentHeight) {
            bannerFullWrapper.css('min-height', bannerFullContentHeight);
        } else {
            bannerFullWrapper.css('min-height', heigh);

        }
    }

    $('.top-banner .top-banner-cursor').on('click', function (e) {

        $('html, body').animate({
            scrollTop: $('.top-banner').height() + $('.top-banner').offset().top
        }, 600);

    })


    /***********************************/
    /* FULL VIDEO WIDTH */
    /**********************************/


    /* Set height iframe */
    function setHeightAllIframe() {
        // $('.prague-iframe-wrapper').each(function(){
        //     var $iframe_wrap = $(this),
        //         $iframe = $iframe_wrap.find('iframe');
        //         $iframe.height($iframe.width() * 0.7);
        // });
    }

    function upFullWidthVideo() {

        function is_touch_device() {
            return 'ontouchstart' in window
                // works on most browsers
                ||
                navigator.maxTouchPoints; // works on IE10/11 and Surface
        };

        // for video uploaded
        $('.js-video-wrapper').each(function () {
            var $video = $(this).find('video,iframe'),
                w = $video.width(),
                h = $video.outerHeight(),
                videoRatio = (w / h).toFixed(2),
                minW = parseInt($(this).width()),
                minH = parseInt($(this).outerHeight()),
                widthRatio = minW / w,
                heightRatio = minH / h,
                newWidth, newHeight;

            $video.removeAttr('height').removeAttr('width');

            if (widthRatio > heightRatio) {
                newWidth = minW;
                newHeight = Math.ceil(newWidth / videoRatio);
            } else {
                newHeight = minH;
                newWidth = Math.ceil(newHeight * videoRatio);
            }

            if (minW < newWidth) {
                newWidth = minW;
            }

            $video.width(newWidth + 'px').height(newHeight + 'px');

            // if (is_touch_device() && winW >= '768') {
            // 	$video.hide();
            // } else {
            // 	$video.show();
            // }
            if (newHeight > minH) {
                $video.css('top', -(newHeight - minH) / 2);
            } else {
                $video.css('top', '0');
            }

            if (newWidth >= minW) {
                $video.css('left', -(newWidth - minW) / 2);
            } else {
                $video.css('left', '0');
            }
        });
    }

    window.onYouTubeIframeAPIReady = function () {

        var player = [],
            $iframe_parent = [],
            $this;

        // each all iframe
        $('iframe').each(function (i) {
            // get parent element
            $this = $(this);
            $iframe_parent = $this.closest('.js-video-wrapper');

            // init video player
            player[i] = new YT.Player(this, {
                // callbacks
                events: {
                    'onReady': function (event) {

                        // mute on/off
                        if ($this.data('mute') == 'on') {
                            event.target.mute();
                        }
                    }
                }
            });

            $iframe_parent.find('.js-play-button').on('click', function () {
                event.preventDefault();
                var $this = $(this);
                if ($this.hasClass('start')) {
                    player[i].pauseVideo();
                    $this.removeClass('start');
                } else {
                    player[i].playVideo();
                    $this.addClass('start').closest('.js-video-wrapper').addClass('play');
                }
            });

            $iframe_parent.find('.js-video-close').on('click', function () {
                event.preventDefault();
                var $this = $(this);
                player[i].stopVideo();
                $this.closest('.js-video-wrapper').removeClass('play').find('.js-play-button').removeClass('start');
            });
        });
    }

    // Target your .container, .wrapper, .post, etc.
    // $(".js_wrapper_el_video").fitVids();

    /***********************************/
    /* BUTTON CREATIVE ANIMATE */
    /**********************************/
    function startBtnAnimate() {

        var btnCreative = $('.a-btn.creative, .a-btn-2.creative').not('.anima');

        if (btnCreative.length) {
            for (var i = 0; i < btnCreative.length; i++) {
                if ($(window).scrollTop() >= $(btnCreative[i]).offset().top - $(window).height() * 1.4) {
                    $(btnCreative[i]).addClass('anima');
                }
            }
        }
    }




    /***********************************/
    /* FIGURES ANIMATE & WIDTH */
    /**********************************/
    function startFigureAnimate() {

        var figureCreative = $('.trans_figures.enable_anima').not('.animation');

        if (figureCreative.length) {
            for (var i = 0; i < figureCreative.length; i++) {
                if ($(window).scrollTop() >= $(figureCreative[i]).offset().top - $(window).height() * 0.9) {
                    $(figureCreative[i]).addClass('animation');
                }
            }
        }
    }

    function cirleFigure() {

        var circleFigure = $('.team-wrapper.circle');

        if (circleFigure.length) {
            for (var i = 0; i < circleFigure.length; i++) {
                var circle = $(circleFigure[i]).find('.team-outer');
                var circleHeight = circle.height();
                circle.css('width', circleHeight);
            }
        }
    }


    /* ADD ZERO FUNCTION */
    var currentSwiper, totalSwiper;

    function ifZero(current, total) {
        currentSwiper = current + 1 < 10 ? '0' + (current + 1) : current + 1;
        totalSwiper = total < 10 ? '0' + total : total;
    }

    /*---------------*/
    /* SWIPER SLIDER */
    /*---------------*/
    function initSwiper() {
        if ($('.full_showcase_slider').length) {
            var attrsToSize = {
                'data-lg-slides': '1600',
                'data-md-slides': '1300',
                'data-sm-slides': '992',
                'data-xs-slides': '768'
            };
        } else {
            var attrsToSize = {
                'data-lg-slides': '1200',
                'data-md-slides': '992',
                'data-sm-slides': '768',
                'data-xs-slides': '599'
            };
        }

        function parseSlidesAttrValue(value) {
            var parts = value.split(',');
            return {
                slidesPerView: parseInt(parts[0], 10),
                spaceBetween: parseInt(parts[1], 10)
            }
        }

        function createBreakpoints(container, attrsToSize) {
            var breakpointsObj = {};
            $.each(attrsToSize, function (key, value) {
                if (container.attr(key)) {
                    breakpointsObj[value] = parseSlidesAttrValue(container.attr(key));
                }
            });
            return breakpointsObj;
        }

        function setMousewheel(activeIndex, slidesNum, container) {
            if (activeIndex == slidesNum - 1) {
                $(window).bind('mousewheel', function (event) {
                    if (event.originalEvent.wheelDelta >= 0) {
                        container.enableMousewheelControl();
                    } else {
                        container.disableMousewheelControl();
                    }
                });
            } else if (activeIndex == 0) {
                $(window).bind('mousewheel', function (event) {
                    if (event.originalEvent.wheelDelta >= 0) {
                        container.disableMousewheelControl();
                    } else {
                        container.enableMousewheelControl();
                    }
                });
            }
        }

        $('.swiper-container').each(function (index) {

            var that = $(this);

            var sliderIndex = 'swiper-unique-id-' + index;

            that.addClass(sliderIndex + ' initialized').attr('id', sliderIndex);
            that.find('.swiper-pagination').addClass('pagination-' + sliderIndex);

            if (that.find('.swiper-slide').length <= 1) {
                $('.slider-click[data-pagination-rel="' + that.data('pagination-rel') + '"]').addClass('disabled');
            }

            var setThumb = function (activeIndex, slidesNum) {
                var
                    customSliderCurrent = that.find('.swiper-pagination-current'),
                    customSliderTotal = that.find('.swiper-pagination-total');

                ifZero(activeIndex, slidesNum);

                customSliderCurrent.text(currentSwiper);
                customSliderTotal.text(totalSwiper);
            };

            var speedVar = parseInt(that.attr('data-speed'), 10);
            var loopVar = parseInt(that.attr('data-loop'), 10);
            var paginationType = that.attr('data-pagination-type') ? that.attr('data-pagination-type') : 'bullets';
            var autoPlayVar = parseInt(that.attr('data-autoplay'), 10);
            var autoHeightVar = parseInt(that.attr('data-autoheight'), 10);
            var centerVar = $.isNumeric(that.attr('data-center')) ? parseInt(that.attr('data-center'), 10) : true;
            var effectVar = that.attr('data-effect');
            var mode = that.attr('data-mode');
            var slidesPerViewVar = parseInt(that.attr('data-slides-per-view'), 10);
            var spaceBetweenVar = parseInt(that.attr('data-space-between'), 10);
            var mouseVar = $.isNumeric(that.attr('data-mouse')) ? parseInt(that.attr('data-mouse'), 10) : true;

            if (isNaN(slidesPerViewVar)) {
                slidesPerViewVar = 'auto';
            }
            swipers[sliderIndex] = new Swiper('.' + sliderIndex, {
                pagination: '.pagination-' + sliderIndex,
                paginationType: paginationType,
                paginationClickable: true,
                keyboardControl: true, // Set to true to enable navigation through slides using keyboard right and left (for horizontal mode), top and borrom (for vertical mode) keyboard arrows
                simulateTouch: true, //If true, Swiper will accept mouse events like touch events (click and drag to change slides)
                roundLengths: true, //Set to true to round values of slides widt h and height to prevent blurry texts on usual resolution screens (if you have such)
                autoplayDisableOnInteraction: false,
                grabCursor: false,
                watchSlidesProgress: true,
                speed: speedVar,
                loop: loopVar,
                noSwiping: mouseVar,
                autoplay: autoPlayVar,
                autoHeight: autoHeightVar, // Set to true and slider wrapper will adopt its height to the height of the currently active slide
                centeredSlides: centerVar,
                mousewheelControl: true,
                effect: effectVar || 'slide',
                direction: mode || 'horizontal',
                slidesPerView: slidesPerViewVar,
                spaceBetween: spaceBetweenVar || 0,
                paginationCurrentClass: 'swiper-pagination-current',
                paginationTotalClass: 'swiper-pagination-total',

                // Navigation arrows
                nextButton: '.swiper-button-next', //CSS selector or HTML element of the element that will work like "next" button
                prevButton: '.swiper-button-prev', //CSS selector or HTML element of the element that will work like "prev" button

                breakpoints: createBreakpoints(that, attrsToSize),

                onInit: function (swiper) {
                    var totalSlides = $('.swiper-slide:not(.swiper-slide-duplicate)').length;
                    if ($('.banner-slider-wrap.andra').length) {
                        if (totalSlides < 10) {
                            $('.banner-slider-wrap.andra').find('.pag-wrapper').addClass('total-less10 current-less10');
                        }
                    }
                },
                onSlideChangeEnd: function (swiper) {
                    var totalSlides = that.find($('.swiper-slide:not(.swiper-slide-duplicate)')).length;
                    if ($('.projects-list-slider').length) {
                        setMousewheel(activeIndex, swiper.slides.length, swiper);
                    }
                },
                onSlideChangeStart: function (swiper) {
                    var activeIndex = (loopVar == 1) ? swiper.realIndex : swiper.activeIndex;

                    if (that.parent().find('.swiper-pagination-bullet').length) {
                        that.parent().find('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active').eq(activeIndex).addClass('swiper-pagination-bullet-active');
                    }
                },
                onSlideClick: function (swiper) {},
                paginationBulletRender: function (swiper, index, className) {
                    if ($('.testimonials-swiper').length) {
                        var newIndex = swiper.activeIndex + index;
                        var newIndexAuthor = $(swiper.slides[newIndex]).find('.testimonials-author').html() || 'Guest';
                        return '<span class="' + className + '">' + newIndexAuthor + '</span>';
                    }

                },
            });
            swipers[sliderIndex].update();
        });
    }

    /***********************************/
    /* TESTIMONIALS */
    /**********************************/
    function testimonialsSliderHeight() {
        var testimonialsWrapp = $('.testimonials-wrapper'),
            testimonialsSlider = testimonialsWrapp.find('.testimonials-swiper'),
            testimonialsItemHeight = testimonialsWrapp.find('.testimonials-item'),
            maxHeight = 0;

        testimonialsItemHeight.each(function () {
            testimonialsItemHeight = parseInt($(this).innerHeight());
            if (testimonialsItemHeight > maxHeight) {
                maxHeight = testimonialsItemHeight;
            };
        });

        testimonialsSlider.css('height', maxHeight);
    }

    /***********************************/
    /* COMING SOON */
    /**********************************/
    function comingSoonValue() {
        if ($('.prague-coming-time-wrapper .coming-time-item').length) {

            var comingSoonElements = $('.prague-coming-time-wrapper .coming-time-item');

            comingSoonElements.each(function () {
                var thisElement = $(this),
                    comingSoonElementsItem = thisElement.find('.name'),
                    text = comingSoonElementsItem.data('desktop'),
                    mobileText = comingSoonElementsItem.data('mobile');

                if (winW < 768) {
                    comingSoonElementsItem.text(mobileText);
                } else {
                    comingSoonElementsItem.text(text);
                }
            })
        }
    }

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    var prague_timeinterval;

    function updateClock($clock, endTime, updateDays) {

        var t = getTimeRemaining(endTime);
        if (updateDays) {
            t.days = t.days < 0 ? 0 : t.days;
            $clock.find('.count-days').text(t.days);
        }
        if (updateDays || t.minutes === 59) {
            t.hours = t.hours < 0 ? 0 : t.hours;
            $clock.find('.count-hours').text(('0' + t.hours).slice(-2));
        }
        if (updateDays || t.seconds === 59) {
            t.minutes = t.minutes < 0 ? 0 : t.minutes;
            $clock.find('.count-mins').text(('0' + t.minutes).slice(-2));
        }
        t.seconds = t.seconds < 0 ? 0 : t.seconds;
        $clock.find('.count-secs').text(('0' + t.seconds).slice(-2));

        if (t.total <= 0) {
            clearInterval(prague_timeinterval);
        }
    }

    if ($('.prague-coming-time-wrapper').length) {
        var comingTimeWrapper = $('.prague-coming-time-wrapper');

        comingTimeWrapper.each(function () {

            var self = $(this),
                endTime = self.attr('data-end'),
                $mask_clock = self.find('.coming-time-item');

            updateClock($mask_clock, endTime, true);

            prague_timeinterval = setInterval(function () {
                updateClock($mask_clock, endTime);
            }, 1000);

        });
    }

    /***********************************/
    /* INIT VIVUS FOR SVG */
    /**********************************/
    function initVivus() {

        $('.prague-svg').each(function (index) {

            var that = $(this);
            var svgIndex = 'my-svg' + index;

            that.addClass(svgIndex).attr('id', svgIndex);

            vivus[svgIndex] = new Vivus(svgIndex, {
                duration: 300,
            })
        })
    }


    /***********************************/
    /* FILMSTRIP SLIDER HEIGHT */
    /**********************************/
    function filmstripSliderHeight() {
        if ($('.prague_filmstrip').not('no-footer-content')) {
            var filmstripWrapperHeight = $('.prague_filmstrip').height(),
                filmstripSlider = $('.filmstrip-slider'),
                filmstripFooterHeight = $('.filmstrip-footer').innerHeight();

            filmstripSlider.height(filmstripWrapperHeight - filmstripFooterHeight);
        }
    }


    /***********************************/
    /* FILMSTRIP FILTER */
    /**********************************/
    // DROPDOWN MENU
    var dropdown = document.querySelectorAll('.prague-dropdown');
    var dropdownArray = Array.prototype.slice.call(dropdown, 0);
    dropdownArray.forEach(function (el) {
        var button = el.querySelector('a[data-toggle="dropdown"]'),
            menu = el.querySelector('.prague-dropdown-menu'),
            arrow = button.querySelector('i.icon-arrow');

        button.onclick = function (event) {
            if (!menu.hasClass('showee')) {
                $(this).addClass('active');
                menu.classList.add('showee');
                menu.classList.remove('hidee');
                arrow.classList.add('openee');
                arrow.classList.remove('closee');
                event.preventDefault();
            } else {
                $(this).removeClass('active');
                menu.classList.remove('showee');
                menu.classList.add('hidee');
                arrow.classList.remove('openee');
                arrow.classList.add('closee');
                event.preventDefault();
            }
        };
    })

    Element.prototype.hasClass = function (className) {
        return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
    };

    // FILTER
    $('.filmstrip-filter .prague-dropdown-menu li').on('click', function (e) {
        var filterValue = '.' + $(this).attr('data-filter');
        $('.filmstrip-slider').slick('slickUnfilter');
        $('.filmstrip-slider').slick('slickFilter', filterValue);

        $('.prague-dropdown a[data-toggle="dropdown"]').removeClass('active');
        $('.prague-dropdown-menu').removeClass('showee');
        $('.prague-dropdown-menu').addClass('hidee');
        $('.prague-dropdown i.icon-arrow').removeClass('openee');
        $('.prague-dropdown i.icon-arrow').addClass('closee');

        e.preventDefault();
    });


    /***********************************/
    /* TOP FILTER */
    /**********************************/
    function openTopFilter() {
        $(this).toggleClass('active');
        $('.filter-nav').find('i').toggleClass('fa-filter fa-times');
        $('.prague_filter_projects').slideToggle();
        $('.prague-header').toggleClass('open-filter');
        $('body, html').toggleClass('no-scroll');
    }

    $('.filter-nav').on('click', function (e) {
        openTopFilter();
        e.preventDefault();
    });

    $('.prague_filter_projects .prague_filter_item li').on('click', function (e) {
        $(this).toggleClass('active');
        e.preventDefault();
    });

    $('.prague_filter_link_wrapper .filter-btn').on('click', function (e) {

        var filterValue = [];
        $('.prague_filter_projects [data-filter].active').each(function (i) {
            filterValue[i] = '.' + $(this).attr('data-filter');
        });

        var separator = ',';
        if ($(this).attr('data-filtering-type') == 'all_criteria') {
            separator = '';
        }

        $('.prague_services, .prague_books, .prague_exhibition_grid, .prague_grid, .prague_masonry').isotope({
            filter: filterValue.join(separator)
        });

        setTimeout(function () {
            openTopFilter();
        }, 100);

        e.preventDefault();
    });

    $('.filter-clear-all').on('click', function (e) {
        $('.prague_filter_projects .prague_filter_item li').removeClass('active');
        e.preventDefault();
    });


    /***********************************/
    /* TIMELINE SORTING */
    /**********************************/
    $('.project-time-list-header .time-list-header-col span').on('click', function (e) {
        $(this).parent('.time-list-header-col').addClass('active').siblings().removeClass('active');
        var sortingValue = $(this).parent('.time-list-header-col').attr('data-sort');

        $('.prague_timeline_list').isotope({
            sortBy: sortingValue
        });

        e.preventDefault();
    });


    /***********************************/
    /* TIMELINE IMAGE HEIGHT & SCROLL */
    /**********************************/

    function timelineImageHeight() {

        setTimeout(function () {

            var timelineWrapper = $('.prague_timeline'),
                timelineContentWrapperHeight = $('.project-timeline-content-wrapper').height();

            if (winH < timelineContentWrapperHeight + 78) {
                timelineWrapper.css('height', timelineContentWrapperHeight + 78);
            } else {
                timelineWrapper.css('height', winH);
            }

        }, 20);
    }

    $('.prague_timeline .project-timeline-item').on('click', function (e) {

        e.preventDefault();

        var $this = $(this),
            this_position_top = $this.position().top,
            $gallery_row = $('.timeline-img-item[data-unique-key=' + $this.data('post-key') + ']'),
            item_height = $gallery_row.height(),
            $gallery_wrapper = $('.project-timeline-img-wrapper'),
            gallery_wrapper_height = $gallery_wrapper.height();

        var scroll_to = $gallery_wrapper.scrollTop() + $gallery_row.position().top;



        var this_offset_bottom = gallery_wrapper_height - this_position_top;

        if (this_offset_bottom < item_height) {
            scroll_to = scroll_to - gallery_wrapper_height + item_height - 45;
        } else {
            scroll_to = scroll_to - this_position_top + 15;
        }

        $gallery_wrapper.animate({
            scrollTop: scroll_to
        }, 500);

        $('.timeline-img-item').removeClass('active');
        $('.project-timeline-item').removeClass('active');

        $this.addClass('active');
        $gallery_row.addClass('active');


    });

    $('.prague_timeline .project-timeline-item .time-item-link').on('click', function (e) {
        $('.prague_timeline .project-timeline-item').off('click');
    });


    $('.timeline-img-item').on('mouseenter', function () {
        var data_unique_key = $(this).attr('data-unique-key');
        $('.project-timeline-item').removeClass('active_hover');
        $('.project-timeline-item[data-post-key=' + data_unique_key + ']').addClass('active_hover');
    });

    $('.timeline-img-item').on('mouseleave', function () {
        $('.project-timeline-item').removeClass('active_hover');
    });

    /***********************************/
    /* TIMELINE EXHIBITION */
    /**********************************/
    var scrollSelector = '.timeline-exh-nav-list li a', // selector menu link
        active_class = 'active',
        time = 1000,
        contentTop = {},
        contentOffset = 0,
        currentAnchor = window.location.hash,
        scrollFlag = 0;

    // Fill object with scroll blocks data (offset and height)
    window.setContentTopObject = function () {
        contentTop = {};
        $(scrollSelector).each(function () {
            if (this.hash && $(this.hash).length) {
                $(this).attr('data-id', this.hash);
                var $this = $(this.hash);
                var offset_top = $this.offset().top;
                contentTop[this.hash] = {
                    'top': Math.round(offset_top - contentOffset),
                    'bottom': Math.round(offset_top - contentOffset + $this.outerHeight())
                };
            }
        });
    }

    /* $(window).on('load', function(){
        setContentTopObject();
    });

    $(window).on('resize', function(){
        setContentTopObject();
    });
 */


    function setImmediateAnchor(anchor, time) {

        if (anchor && $(anchor.hash).length) {
            scrollFlag = 1;
            var link_hash = anchor.hash;

            link_hash = $('[data-id="' + link_hash + '"]').position().top;

            $('html, body').stop().animate({
                'scrollTop': link_hash
            }, time, function () {

                if (history.pushState) {
                    history.pushState(null, null, link_hash);
                } else {
                    location.hash = link_hash;
                }

                currentAnchor = link_hash;
                scrollFlag = 0;
                $(scrollSelector).removeClass(active_class);
                $(scrollSelector + '[data-id="' + currentAnchor + '"]').addClass(active_class);
            });

        }
    }

    /*$(window).on('load', function(){
        if ( $(window).scrollTop() > 0 && location.hash ) {
            setImmediateAnchor(location,1000);
        };
    });*/

    //setImmediateAnchor($(scrollSelector+'[href="'+location.href.split('#')[0]+currentAnchor+'"]')[0], 1);

    function stickyTimeline() {

        // current distance top
        var stickyTop = $('.prague_exhibition_timeline').offset().top,
            scrollTop = $(window).scrollTop();

        // if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
        if (scrollTop > stickyTop) {
            $('.project-timeline-exh-nav').css({
                'position': 'fixed',
                'top': 0
            }).addClass('fxd');

            // add padding to the body to make up for the loss in heigt when the menu goes to a fixed position.
            // When an item is fixed, its removed from the flow so its height doesnt impact the other items on the page
        } else {
            $('.project-timeline-exh-nav').css('position', 'absolute').removeClass('fxd');
            //remove the padding we added.
        }

    };

    // Animate scroll after clicking menu link
    $(scrollSelector).on('click', function (e) {

        e.preventDefault();

        //check dom element
        if (!this.hash && !$(this.hash).length) {
            return true;
        }

        stickyTimeline();

        setImmediateAnchor(this, 1000);


    });

    function setScrollAnchor() {
        if (!scrollFlag) {
            var scrollPositionTop = $(window).scrollTop();
            for (var p in contentTop) {
                if (contentTop[p].top <= scrollPositionTop && contentTop[p].bottom > scrollPositionTop && currentAnchor != p) {

                    $(scrollSelector).removeClass(active_class);
                    if (history.pushState) {
                        history.pushState(null, null, p);
                    } else {
                        location.hash = p;
                    }
                    $(scrollSelector).parent().removeClass(active_class);
                    $(scrollSelector + '[data-id="' + p + '"]').addClass(active_class);
                    currentAnchor = p;
                    break;
                }
            }
        }
    }


    /*$('html, body').on('wheel',  function(e){
        stickyTimeline();
    });
    $('html, body').on('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){

            if ( (e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel') && scrollFlag ){
                $('html,body').stop();
                scrollFlag = 0;
                setScrollAnchor();
            } else {
                if (!scrollFlag) {
                    scrollFlag = 0;
                    setScrollAnchor();
                };
            }
    });*/


    /***********************************/
    /* SLICK SLIDER*/
    /**********************************/
    function initSlick() {

        $('.filmstrip-slider').each(function (index) {

            var that = $(this);

            var sliderIndex = 'slick-unique-id-' + index;

            that.addClass(sliderIndex + ' initialized').attr('id', sliderIndex);

            var accessibilityVar = parseInt(that.attr('data-key'), 10);
            var arrowsVar = parseInt(that.attr('data-arrows'), 10);
            var autoPlayVar = parseInt(that.attr('data-autoplay'), 10);
            var autoPlaySpeedVar = parseInt(that.attr('data-autoplay-speed'), 10);
            var speedVar = parseInt(that.attr('data-speed'), 10);

            that.slick({
                dots: false,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: false,
                centerMode: false,
                prevArrow: '<a href="#" class="slick-prev"></a>',
                nextArrow: '<a href="#" class="slick-next"></a>',

                accessibility: !!accessibilityVar,
                arrows: !!arrowsVar,
                autoplay: !!autoPlayVar,
                autoplaySpeed: autoPlaySpeedVar,
                speed: speedVar,
            });

            setTimeout(function () {
                that[index].slick.refresh();
            }, 0);
        });

    }


    function initProjectDetailSlider() {

        var main = $('.project-detail-main-slider');
        var thumb = $('.project-detail-thumb-slider');

        if (main.length) {
            var accessibilityVar = parseInt(main.attr('data-key'), 10);
            var arrowsVar = parseInt(main.attr('data-arrows'), 10);
            var autoPlayVar = parseInt(main.attr('data-autoplay'), 10);
            var autoPlaySpeedVar = parseInt(main.attr('data-autoplay-speed'), 10);
            var speedVar = parseInt(main.attr('data-speed'), 10);
            var variableWidthVar = parseInt(main.attr('data-width'), 10);
            var fadeVar = parseInt(main.attr('data-fade'), 10);
            var asNavForVar = main.attr('data-for');
            var focusOnSelectVar = parseInt(main.attr('data-focus'), 10);
            var slidesToShowVar = parseInt(main.attr('data-slides'), 10);
            var verticalVar = parseInt(main.attr('data-vertical'), 10);
            var verticalSwipingVar = parseInt(main.attr('data-vertical-swiping'), 10);

            main.slick({
                dots: false,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                prevArrow: '<a href="#" class="slick-prev"></a>',
                nextArrow: '<a href="#" class="slick-next"></a>',
                cssEase: 'linear',

                slidesToShow: slidesToShowVar,
                accessibility: !!accessibilityVar,
                arrows: !!arrowsVar,
                autoplay: !!autoPlayVar,
                autoplaySpeed: autoPlaySpeedVar,
                speed: speedVar,
                variableWidth: !!variableWidthVar,
                fade: !!fadeVar,
                asNavFor: asNavForVar,
                focusOnSelect: !!focusOnSelectVar,
                vertical: !!verticalVar,
                verticalSwiping: !!verticalSwipingVar

            });
        }

        if (thumb.length) {
            var accessibilityVar = parseInt(thumb.attr('data-key'), 10);
            var arrowsVar = parseInt(thumb.attr('data-arrows'), 10);
            var autoPlayVar = parseInt(thumb.attr('data-autoplay'), 10);
            var autoPlaySpeedVar = parseInt(thumb.attr('data-autoplay-speed'), 10);
            var speedVar = parseInt(thumb.attr('data-speed'), 10);
            var variableWidthVar = parseInt(thumb.attr('data-width'), 10);
            var fadeVar = parseInt(thumb.attr('data-fade'), 10);
            var asNavForVar = thumb.attr('data-for');
            var focusOnSelectVar = parseInt(thumb.attr('data-focus'), 10);
            var slidesToShowVar = parseInt(thumb.attr('data-slides'), 10);
            var verticalVar = parseInt(thumb.attr('data-vertical'), 10);
            var verticalSwipingVar = parseInt(thumb.attr('data-vertical-swiping'), 10);


            thumb.slick({
                dots: false,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                prevArrow: '<a href="#" class="slick-prev"></a>',
                nextArrow: '<a href="#" class="slick-next"></a>',
                cssEase: 'linear',

                slidesToShow: slidesToShowVar,
                accessibility: !!accessibilityVar,
                arrows: !!arrowsVar,
                autoplay: !!autoPlayVar,
                autoplaySpeed: autoPlaySpeedVar,
                speed: speedVar,
                variableWidth: !!variableWidthVar,
                fade: !!fadeVar,
                asNavFor: asNavForVar,
                focusOnSelect: !!focusOnSelectVar,
                vertical: !!verticalVar,
                verticalSwiping: !!verticalSwipingVar,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        vertical: false,
                        verticalSwiping: false
                    }
                }]
            });
        }
    }


    function initProjectDetailFullScreen() {

        var main = $('.project-detail-full-main');
        var thumb = $('.project-detail-full-thumb');

        if (main.length) {
            var accessibilityVar = parseInt(main.attr('data-key'), 10);
            var arrowsVar = parseInt(main.attr('data-arrows'), 10);
            var autoPlayVar = parseInt(main.attr('data-autoplay'), 10);
            var autoPlaySpeedVar = parseInt(main.attr('data-autoplay-speed'), 10);
            var speedVar = parseInt(main.attr('data-speed'), 10);
            var variableWidthVar = parseInt(main.attr('data-width'), 10);
            var fadeVar = parseInt(main.attr('data-fade'), 10);
            var asNavForVar = main.attr('data-for');
            var focusOnSelectVar = parseInt(main.attr('data-focus'), 10);
            var slidesToShowVar = parseInt(main.attr('data-slides'), 10);
            var verticalVar = parseInt(main.attr('data-vertical'), 10);
            var verticalSwipingVar = parseInt(main.attr('data-vertical-swiping'), 10);

            main.slick({
                dots: false,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                prevArrow: '<a href="#" class="slick-prev"></a>',
                nextArrow: '<a href="#" class="slick-next"></a>',
                cssEase: 'linear',

                slidesToShow: slidesToShowVar,
                accessibility: !!accessibilityVar,
                arrows: !!arrowsVar,
                autoplay: !!autoPlayVar,
                autoplaySpeed: autoPlaySpeedVar,
                speed: speedVar,
                variableWidth: !!variableWidthVar,
                fade: !!fadeVar,
                asNavFor: asNavForVar,
                focusOnSelect: !!focusOnSelectVar,
                vertical: !!verticalVar,
                verticalSwiping: !!verticalSwipingVar

            });
        }

        if (thumb.length) {
            var accessibilityVar = parseInt(thumb.attr('data-key'), 10);
            var arrowsVar = parseInt(thumb.attr('data-arrows'), 10);
            var autoPlayVar = parseInt(thumb.attr('data-autoplay'), 10);
            var autoPlaySpeedVar = parseInt(thumb.attr('data-autoplay-speed'), 10);
            var speedVar = parseInt(thumb.attr('data-speed'), 10);
            var variableWidthVar = parseInt(thumb.attr('data-width'), 10);
            var fadeVar = parseInt(thumb.attr('data-fade'), 10);
            var asNavForVar = thumb.attr('data-for');
            var focusOnSelectVar = parseInt(thumb.attr('data-focus'), 10);
            var slidesToShowVar = parseInt(thumb.attr('data-slides'), 10);
            var verticalVar = parseInt(thumb.attr('data-vertical'), 10);
            var verticalSwipingVar = parseInt(thumb.attr('data-vertical-swiping'), 10);


            thumb.slick({
                dots: false,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                prevArrow: '<a href="#" class="slick-prev"></a>',
                nextArrow: '<a href="#" class="slick-next"></a>',
                cssEase: 'linear',

                slidesToShow: slidesToShowVar,
                accessibility: !!accessibilityVar,
                arrows: !!arrowsVar,
                autoplay: !!autoPlayVar,
                autoplaySpeed: autoPlaySpeedVar,
                speed: speedVar,
                variableWidth: !!variableWidthVar,
                fade: !!fadeVar,
                asNavFor: asNavForVar,
                focusOnSelect: !!focusOnSelectVar,
                vertical: !!verticalVar,
                verticalSwiping: !!verticalSwipingVar,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        vertical: false,
                        verticalSwiping: false
                    }
                }]

            });
        }
    }

    $('.project-detail-full-overlay .icon').on('click', function () {
        $('.project-detail-full-overlay').toggleClass('open');
        $('.project-detail-full-thumb').toggleClass('open');
        $('.project-detail-fullscreen-content').toggleClass('open');
        $('.prague-header').toggleClass('open-detail');
    })

    /***********************************/
    /* PROJECT LIST SLIDER */
    /**********************************/
    function scrollCenterProjectList() {

        var projectList = $('.prague_list');

        if (projectList.length) {
            for (var i = 0; i < projectList.length; i++) {
                if ($(window).scrollTop() >= $(projectList[i]).offset().top - $(window).height() * 0.5) {
                    $('html, body').animate({
                        scrollTop: $(projectList[i]).offset().top
                    }, 1000);
                }
            }
        }
    }


    /***********************************/
    /* PROJECT CATEGORIES */
    /**********************************/
    if ($('.prague-categories-outer').length) {

        var categoriesOuter = $('.prague-categories-outer');

        $(categoriesOuter).each(function () {
            var _this = $(this);
            if (!($(_this).prev('.prague-categories-outer').length)) {
                $(_this).find('.categories_btn_up').addClass('hide')
            }
            if (!($(_this).next('.prague-categories-outer').length)) {
                $(_this).find('.categories_btn_down').addClass('hide')
            }
        })
    }

    $('.prague_categories_btn .categories_btn_up').on('click', function () {

        var prevCategory = $(this).closest('.prague-categories-outer').prev('.prague-categories-outer').offset().top;

        $('html, body').animate({
            scrollTop: prevCategory
        }, 1000);
    })

    $('.prague_categories_btn .categories_btn_down').on('click', function () {

        var nextCategory = $(this).closest('.prague-categories-outer').next('.prague-categories-outer').offset().top;

        $('html, body').animate({
            scrollTop: nextCategory
        }, 1000);
    })


    /***********************************/
    /* PORTFOLIO */
    /**********************************/

    function pragueGrid() {
        var block = '.prague_services, .prague_books, .prague_media, .prague_exhibition_grid, .prague_grid';

        if ($(block).length) {

            var $portfolioGrid = $(block),
                $portfolioItemWrapp = $portfolioGrid.find('.portfolio-item-wrapp');


            isotopeGridVar = $portfolioGrid.isotope({
                itemSelector: '.portfolio-item-wrapp',
                layoutMode: 'fitRows',
            });
        }
    }

    function pragueMasonry() {
        var block = '.prague_masonry';
        if ($(block).length) {
            var $portfolioMasonry = $(block),
                $portfolioItemWrapp = $portfolioMasonry.find('.portfolio-item-wrapp');

            isotopeMasonryVar = $portfolioMasonry.isotope({
                itemSelector: '.portfolio-item-wrapp',
                percentPosition: true,
            });
        }
    }

    function pragueTimelineList() {
        var block = '.prague_timeline_list';
        if ($(block).length) {
            var $portfolioTimeline = $(block);

            $portfolioTimeline.isotope({
                getSortData: {
                    first: '.cat1',
                    title: '.time-list-item-title a',
                    third: '.cat3',
                    fourth: '.cat4'
                }
            });
        }
    }


    /***********************************/
    /* PROJECT DETAIL PARALLAX */
    /**********************************/

    function parallaxDetailHeigth() {

        if ($('.project-detail-parallax').length) {
            $('html').css({
                // 'height': '100%',
                // 'overflow-x': 'visible'
            });
            $('body').css({
                // 'overflow-x': 'visible'
            });
        }
    }

    var Parallax = {
        selector: '.js-detail-parallax-item-bg',
        covers: $([]),
        amount: 0,
        initialized: false,
        start: 0,
        stop: 0,

        initialize: function () {
            var that = this;

            $('.project-detail-parallax-item').each(function (i, hero) {



                var $hero = $(hero),
                    $cover = $hero.children('.detail-parallax-item-bg'),
                    $image = $cover.find('img');

                $hero.find('.detail-parallax-item-bg').show();

                if (!$image.length) {
                    $image = $cover.children('picture').children('img');
                }

                if ($image.length) {

                    var scaleY,
                        scale,
                        newWidth,
                        imageWidth = $image.css('width', 'auto').outerWidth(),
                        imageHeight = $image.outerHeight(),
                        // heroHeight = $hero.outerHeight(),
                        heroHeight = winH,
                        scaleX = winW / imageWidth;
                    scaleY = winH / imageHeight;
                    scale = Math.max(scaleX, scaleY);
                    newWidth = parseInt(imageWidth * scale);

                    $image.css({
                        top: (heroHeight - imageHeight * scale) / 2,
                        width: newWidth
                    });

                    $hero.css({
                        height: heroHeight
                    })
                }

            });

            // if this is a touch device initialize simple image
            if (_ismobile) {
                $('.project-detail-parallax').addClass('touch');
                return;
            }

            documentHeight = $(document).height();
            // documentHeight = $('.js-detail-parallax-item-bg').length * winH;

            // this.stop = documentHeight - winH;
            // this.stop = $('.project-detail-parallax').height();
            this.amount = $('.project-detail-parallax').data('parallax-speed');
            this.initialized = true;

            // clean up
            $('.project-detail-parallax-cover').empty();

            $('.js-detail-parallax-item-bg').each(function (i, cover) {

                // grab all the variables we need
                var $cover = $(cover),
                    opacity = $cover.css('opacity'),
                    $target = $cover.children().not('span'),
                    $image = $target.filter('img'),
                    $slider = $target.not('img'),
                    $clone = $cover.clone(),
                    $cloneTarget = $clone.children().not('span'),
                    $cloneImage = $cloneTarget.filter('img'),
                    $cloneSlider = $cloneTarget.not('img'),
                    imageWidth = $image.outerWidth(),
                    imageHeight = $image.outerHeight(),
                    $hero = $cover.parent(),
                    // heroHeight = $hero.outerHeight(),
                    heroHeight = winH,
                    heroOffset = $hero.offset(),
                    adminBar = parseInt($html.css('marginTop')),
                    amount = that.amount,

                    // we may need to scale the image up or down
                    // so we need to find the max scale of both X and Y axis
                    scaleX,
                    scaleY,
                    scale,
                    newWidth,
                    distance,
                    speeds = {
                        static: 0,
                        slow: 0.25,
                        medium: 0.5,
                        fast: 0.75,
                        fixed: 1
                    };

                $cover.removeAttr('style');
                $clone.data('source', $cover).appendTo('.project-detail-parallax-cover').show();

                $clone.css('height', heroHeight);

                // let's see if the user wants different speed for different whateva'
                if (typeof parallax_speeds !== "undefined") {
                    $.each(speeds, function (speed, value) {
                        if (typeof parallax_speeds[speed] !== "undefined") {
                            if ($hero.is(parallax_speeds[speed])) {
                                amount = value;
                            }
                        }
                    });
                }

                scaleX = winW / imageWidth;
                scaleY = (heroHeight + (winH - heroHeight) * amount) / imageHeight;
                scale = Math.max(scaleX, scaleY);
                newWidth = parseInt(imageWidth * scale);
                distance = (winH - heroHeight) * amount;

                // set the new width, the image should have height: auto to scale properly
                $cloneImage.css({
                    width: newWidth,
                    top: (heroHeight - imageHeight * scale) / 2,
                });

                // if there's a slider we are working with we may have to set the height
                // $cloneSlider.css('height', heroHeight + distance);

                // align the clone to its surrogate
                // we use TweenMax cause it'll take care of the vendor prefixes
                TweenMax.to($clone, 0, {
                    y: heroOffset.top - adminBar
                });

                // prepare image / slider timeline
                var parallax = {
                        start: heroOffset.top - winH,
                        // end: heroOffset.top + heroHeight,
                        end: heroOffset.top + winH,

                        timeline: new TimelineMax({
                            paused: true
                        })
                    },
                    // the container timeline
                    parallax2 = {
                        start: 0,
                        end: documentHeight,
                        // end: winH,
                        timeline: new TimelineMax({
                            paused: true
                        })
                    };

                // move the image for a parallax effect
                parallax.timeline.fromTo($cloneTarget, 1, {
                    y: '-=' + (winH + heroHeight) * amount / 2
                }, {
                    y: '+=' + (winH + heroHeight) * amount,
                    ease: Linear.easeNone,
                    force3D: true
                });

                // parallax.timeline.fromTo($cloneSlider.find('.hero__content, .hero__caption'), 1, {
                //     y: '+=' + winH * amount
                // }, {
                //     y: '-=' + winH * amount * 2,
                //     ease: Linear.easeNone,
                //     force3D: true
                // }, '-=1');

                // move the container to match scrolling
                parallax2.timeline.fromTo($clone, 1, {
                    y: heroOffset.top
                }, {
                    y: heroOffset.top - documentHeight,
                    // y: heroOffset.top - winH,
                    // y: heroOffset.top - $html.height(),
                    ease: Linear.easeNone,
                    force3D: true
                });

                // set the parallax info as data attributes on the clone to be used on update
                $clone
                    .data('parallax', parallax)
                    .data('parallax2', parallax2);

                // update progress on the timelines to match current scroll position
                that.update();

            });

        },

        update: function () {

            if (_ismobile) {
                return;
            }

            $('.project-detail-parallax-cover .detail-parallax-item-bg').each(function (i, cover) {
                var $cover = $(cover),
                    parallax = $cover.data('parallax'),
                    parallax2 = $cover.data('parallax2'),
                    progress = (latestKnownScrollY - parallax.start) / (parallax.end - parallax.start),
                    progress2 = (latestKnownScrollY - parallax2.start) / (parallax2.end - parallax2.start);

                if (0 <= progress && 1 >= progress) {
                    parallax.timeline.progress(progress);
                }

                if (0 <= progress2 && 1 >= progress2) {
                    parallax2.timeline.progress(progress2);
                }
            });
        }
    };

    /***********************************/
    /* PROJECT DETAIL BEFORE AFTER */
    /**********************************/

    function beforeAfter() {
        if ($('.ba-slider').length) {
            $('.ba-slider').beforeAfter();
        }
    }

    /* Share popup */
    $('[data-share]').on('click', function () {

        var w = window,
            url = this.getAttribute('data-share'),
            title = '',
            w_pop = 600,
            h_pop = 600,
            scren_left = w.screenLeft ? w.screenLeft : screen.left,
            scren_top = w.screenTop ? w.screenTop : screen.top,
            width = w.innerWidth,
            height = w.innerHeight,
            left = ((width / 2) - (w_pop / 2)) + scren_left,
            top = ((height / 2) - (h_pop / 2)) + scren_top,
            newWindow = w.open(url, title, 'scrollbars=yes, width=' + w_pop + ', height=' + h_pop + ', top=' + top + ', left=' + left);

        if (w.focus) {
            newWindow.focus();
        }

        return false;
    });

    // (function ( $ ) {

    //     $.fn.foxParalax = function(a) {

    //         var is_on_screen = function(el){
    //             var scrolled = $(window).scrollTop();

    //             var win = $(window);
    //             var viewport = {
    //                 top : win.scrollTop(),
    //                 left : win.scrollLeft()
    //             };
    //             //viewport.right = viewport.left + win.width();
    //             viewport.bottom = viewport.top + win.height();

    //             var bounds = $(el).offset();
    //             //bounds.right = bounds.left + el.outerWidth();
    //             bounds.bottom = bounds.top + $(el).outerHeight();

    //             return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    //         }



    //         return this.each(function() {

    //             var offsetEl = $(this).position().top,
    //                 el = this;
    //             $(window).scroll(function(e){

    //                 if (is_on_screen(el)) {

    //                     var scrolled = $(window).scrollTop(),
    //                         moveTop = scrolled * 0.15; //speed;

    //                     if ( $(el).hasClass('column_paralax') ) {

    //                           $(el).css({
    //                             "transform":"translateY(-" + moveTop+"px)"
    //                           });

    //                     } else {
    //                          $(el).find('.project-grid-item-img').css({
    //                             "background-position" : "0 -" + (moveTop/2)+"px"
    //                           });
    //                     }
    //                 }

    //             });

    //         });

    //     }


    // }( jQuery ));


    /***********************************/
    /* LOAD MORE */
    /**********************************/
    $('.load').on('click', function (e) {
        $('.button-hide').addClass('button-show');
        pragueGrid();
        $('.load-btn').fadeOut(500);
    });

    /***********************************/
    /* PROTECTED PAGE */
    /**********************************/

    $('.protect-page').on('submit', function (e) {
        e.preventDefault();
        if ($('#pwbox-1234').val() == "enter") {
            $('.protect-main-content').fadeOut(1000);
            $('.gallery-hidden').fadeIn(2000);
            pragueGrid();
        } else if ($('#pwbox-1234').val() == "") {
            $('.prague-protected-content p').html('<p>(Please, add the password)</p>');
        } else {
            $('.prague-protected-content p').html('<p>(You entered the wrong password)</p>');
        }

    });



    $('.js-load-more-btn').on('click', function (e) {

        var $btn = $(this),
            $btnText = $btn.html();
        $btn.html('LOADING...');

        var $wrapper = $btn.closest('[data-unique-key]'),
            uniqueKey = $wrapper.data('unique-key'),
            $container = $wrapper.find('.js-load-more-block');

        var pageNum = parseInt($wrapper.attr('data-start-page'));
        var max = parseInt($wrapper.attr('data-max-page'));
        var nextLink = $wrapper.attr('data-next-link');

        if (pageNum <= max) {
            $.ajax({
                url: nextLink,
                type: 'POST',
                success: function (data) {
                    var html = $(data).find('[data-unique-key="' + uniqueKey + '"]').find('.js-load-more-block').children('.js-filter-simple-block');
                    var $items = $(html);

                    if (window.enable_foxlazy) {
                        setTimeout(function () {
                            $('img').foxlazy();
                            $(window).trigger("load.foxlazy");
                        }, 500);
                    }

                    if ($container.hasClass('prague-blog-grif-outer') || $container.hasClass('prague_blog')) {
                        // console.log('second');
                        $container.append($items);
                        wpc_add_img_bg('.s-img-switch');
                    } else {
                        console.log('here');
                        setTimeout(function () {
                            $container.append($items);
                            $container.isotope('appended', $items);
                            wpc_add_img_bg('.s-img-switch');
                        }, 500);
                    }

                    $btn.html($btnText);

                    $wrapper.attr('data-start-page', ++pageNum);
                    nextLink = nextLink.replace(/\/$/, '');
                    //   console.log(nextLink);
                    var newLink = createNewLink(nextLink);
                    nextLink = newLink + (pageNum + 1);

                    //   nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ (pageNum + 1));
                    $wrapper.attr('data-next-link', nextLink);

                    if (pageNum == max) {
                        $btn.hide('fast');
                    }
                    //              if (isotopeMasonryVar) {
                    //                 setTimeout(function(){
                    //                     isotopeMasonryVar.isotope('layout');
                    //                 },0);
                    //              } else if (isotopeGridVar) {
                    //                 setTimeout(function(){
                    //                     isotopeGridVar.isotope('layout');
                    //                 },0);
                    //              }
                }
            });
        }
        return false;
    });

    function createNewLink(link) {
        var numberLength = 0;
        var oldString = link;
        var newReverseStr = link.split("").reverse().join("");
        newReverseStr = newReverseStr.split("");
        for (var i = 0; i < newReverseStr.length; i++) {
            if (isNaN(newReverseStr[i])) {
                break;
            } else {
                numberLength++;
            }
        }
        oldString = oldString.slice(0, -numberLength);

        return oldString;
    }

    function imgWooHeight() {
        $('.flex-viewport').css('height', $('.flex-active-slide img').height());
    }
    $('.flex-control-thumbs li').on('click', function () {
        setTimeout(function () {
            $('.flex-viewport').css('height', $('.flex-active-slide img').height());
        }, 100);
    });


    pageCalculations(function () {
        wpc_add_img_bg('.s-img-switch');
        pageHeightCalculate();
        pageOnlyFullHeight('.prague_filmstrip');
        pageOnlyFullHeight('.projects-detail-before-banner.fullheight');
        pageOnlyFullHeight('.project-detail-fullscreen');
        topFullBannerHeight();
        upFullWidthVideo();
        cirleFigure();
        comingSoonValue();
        filmstripSliderHeight();
        timelineImageHeight();
        Parallax.initialize();
        setHeightAllIframe();
        imgWooHeight();
    });


    /* Lazy load */
    if (window.enable_foxlazy) {
        // for all image
        $('img').foxlazy('', function () {
            if (isotopeMasonryVar) {
                setTimeout(function () {
                    isotopeMasonryVar.isotope('layout');
                }, 1000);
            }
            if (isotopeGridVar) {
                isotopeGridVar.isotope('layout');
            }
        });
    }

    /***********************************/
    /* ACCORDIONS */
    /**********************************/

    $('.woocommerce-tabs').on('click', '.tabs-title', function () {
        var thisItem = this;
        var thisParent = $(thisItem).parent('.tabs-item-wrapp');
        var siblings = $(thisItem).siblings('.panel');

        if ($(thisItem).siblings('.panel').length > 0 && $(thisItem).siblings('.panel').css('display') === 'none') {
            $(siblings).slideDown(400, function () {});
            $(thisParent).addClass('active').siblings('.tabs-item-wrapp').removeClass('active').children('.panel').slideUp(400, function () {});
        } else {
            $(siblings).slideUp(400, function () {});
            $(thisParent).removeClass('active');
        }
        return false;
    });

    /**********************************/
    /* WOOCOMMERCE INPUT QUANTITY     */
    /**********************************/
    var wrapper = $('.custom-product-quantity');

    if (wrapper.length) {
        $('body').on('click', '.custom-product-quantity .q_inc, .custom-product-quantity .q_dec', function (e) {
            e.preventDefault();

            var input = $(this).parent('.custom-product-quantity').find('.qty');
            var qty = Number(input.val());

            (this.className === 'q_inc') ? qty-- : qty++;
            qty = (qty > 1) ? qty : 1;
            input.val(qty).change();
        });
    }

    /***********************************/
    /* POP UP */
    /**********************************/
    $(document).ready(function () {
        $('.js-popup').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    });

    function showcaseSlider() {
        $(window).trigger('resize', function () {
            $(window);
        });
    }

    /***********************************/
    /* SERVICES */
    /**********************************/

    $('.services.accordion .toggle').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.next().hasClass('is-show')) {
            $this.next().removeClass('is-show');
            $this.next().slideUp(350);
            $this.find('i').removeClass('ion-minus').addClass('ion-plus');
        } else {
            $this.parent().parent().find('li .list-drop').removeClass('is-show');
            $this.parent().parent().find('li .list-drop').slideUp(350);
            $this.next().toggleClass('is-show');
            $this.next().slideToggle(350);
            $this.closest('.services.accordion').find('.toggle i').removeClass('ion-minus').addClass('ion-plus');
            $this.find('.ion-plus').addClass('ion-minus').removeClass('ion-plus');
        }
    });

    function calcServicesHeight() {
        if ($('.services.tile').length) {
            $('.services.tile .item-first').each(function () {
                var elementFirstH = $(this).height();
                var element = $(this).next('.item-second');
                var textHeight = element.find('.text-wrap').outerHeight();
                if ($(window).width() > 991) {
                    element.find('.img-wrap').css('height', elementFirstH - textHeight - 30 + 'px');
                } else {
                    element.find('.img-wrap').css('height', 'auto');
                }
            });
        }
    }


    $(window).on('load resize', function () {
        calcServicesHeight();
        topBannerHeight();
    });


    window.addEventListener("orientationchange", function () {
        calcServicesHeight();
        topBannerHeight();
    });


    function fixShowcase() {
        if ($('.modern-slider-wrap').length) {
            setTimeout(function () {
                $(document).trigger('resize');
            }, 0);
        }
    }


    /***********************************/
    /* SHOP SLIDER */
    /**********************************/

    $('.clicked2').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/soft-chair/shop-img-3-gallery-2.jpg');
        $('figure a').attr('href', 'img/soft-chair/shop-img-3-gallery-2.jpg');
    });

    $('.clicked1').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/soft-chair/shop-img-3-768x946.jpg');
        $('figure a').attr('href', 'img/soft-chair/shop-img-3-768x946.jpg');
    });

    $('.clicked3').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/soft-chair/shop-img-3-gallery-1.jpg');
        $('figure a').attr('href', 'img/soft-chair/shop-img-3-gallery-1.jpg');
    });

    //side-table page//

    $('.clicked21').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/side-table/shop-img-5-gallery-2.jpg');
        $('figure a').attr('href', 'img/side-table/shop-img-5-gallery-2.jpg');
    });

    $('.clicked11').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/side-table/shop-img-5-768x989.jpg');
        $('figure a').attr('href', 'img/side-table/shop-img-5-768x989.jpg');
    });

    $('.clicked31').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/side-table/shop-img-5-gallery-1.jpg');
        $('figure a').attr('href', 'img/side-table/shop-img-5-gallery-1.jpg');
    });

    //modern-end-table page//


    $('.clicked22').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/modern-end-table/shop-img-8-gallery-2.jpg');
        $('figure a').attr('href', 'img/modern-end-table/shop-img-8-gallery-2.jpg');
    });

    $('.clicked12').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/modern-end-table/shop-img-8-768x946.jpg');
        $('figure a').attr('href', 'img/modern-end-table/shop-img-8-768x946.jpg');
    });

    $('.clicked32').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/modern-end-table/shop-img-8-gallery-1.jpg');
        $('figure a').attr('href', 'img/modern-end-table/shop-img-8-gallery-1.jpg');
    });

    //bertt-side-table page//

    $('.clicked23').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/bertt-side-table/shop-img-4-gallery-1.jpg');
        $('figure a').attr('href', 'img/bertt-side-table/shop-img-4-gallery-1.jpg');
    });

    $('.clicked13').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/bertt-side-table/shop-img-4-768x946.jpg');
        $('figure a').attr('href', 'img/bertt-side-table/shop-img-4-768x946.jpg');
    });

    $('.single_add_to_cart_button').on('click', function (eventObject) {
        eventObject.preventDefault();
        location.href = 'cart.html'
    });

    $('.add_to_cart_button').on('click', function (eventObject) {
        eventObject.preventDefault();
        location.href = 'cart.html'
    });

    //wooden-nightstand page //


    $('.clicked24').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/wooden-nightstand/shop-img-1-gallery-1.jpg');
        $('figure a').attr('href', 'img/wooden-nightstand/shop-img-1-gallery-1.jpg');
    });

    $('.clicked14').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/wooden-nightstand/shop-img-1-768x946.jpg');
        $('figure a').attr('href', 'img/wooden-nightstand/shop-img-1-768x946.jpg');
    });

    $('.clicked34').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/wooden-nightstand/shop-img-1-gallery-2.jpg');
        $('figure a').attr('href', 'img/wooden-nightstand/shop-img-1-gallery-2.jpg');
    });

    //modern-end-table-2 page//


    $('.clicked25').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/modern-end-table-2/shop-img-7-gallery-2.jpg');
        $('figure a').attr('href', 'img/modern-end-table-2/shop-img-7-gallery-2.jpg');
    });

    $('.clicked15').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/modern-end-table-2/shop-img-7-768x946.jpg');
        $('figure a').attr('href', 'img/modern-end-table-2/shop-img-7-768x946.jpg');
    });

    $('.clicked35').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/modern-end-table-2/shop-img-7-gallery-1.jpg');
        $('figure a').attr('href', 'img/modern-end-table-2/shop-img-7-gallery-1.jpg');
    });

    //wooden-chair page//


    $('.clicked26').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/wooden-chair/shop-img-2-gallery-3.jpg');
        $('figure a').attr('href', 'img/wooden-chair/shop-img-2-gallery-3.jpg');
    });

    $('.clicked16').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/wooden-chair/shop-img-2-768x946.jpg');
        $('figure a').attr('href', 'img/wooden-chair/shop-img-2-768x946.jpg');
    });

    $('.clicked36').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/wooden-chair/shop-img-2-gallery-2.jpg');
        $('figure a').attr('href', 'img/wooden-chair/shop-img-2-gallery-2.jpg');
    });

    //coffe-table page//

    $('.clicked27').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/coffe-table/shop-img-9-gallery-1.jpg');
        $('figure a').attr('href', 'img/coffe-table/shop-img-9-gallery-1.jpg');
    });

    $('.clicked17').on('click', function () {
        $('ol li img').removeClass('flex-active');
        $(this).addClass('flex-active');
        $('.firstImg').attr('src', 'img/coffe-table/shop-img-9-768x946.jpg');
        $('figure a').attr('href', 'img/coffe-table/shop-img-9-768x946.jpg');
    });


    $('.woocommerce-cart-form').on('submit', function (eventObject) {
        eventObject.preventDefault();
    })


    $('.placeOrder').on('click', function (eventObject) {
        eventObject.preventDefault();
    })


    $('.search-form').submit(function (eventObject) {
        eventObject.preventDefault();
    })

})(jQuery, window, document);