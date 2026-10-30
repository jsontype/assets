(function ($) {
    "use strict";
    /*=================================
      JS Index Here
    ==================================*/
    /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu Active
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image Color & Mask
    07. Global Slider
    08. Custom Animaiton For Slider
    09. Ajax Contact Form
    10. Search Box Popup
    11. Popup Sidemenu
    12. Magnific Popup
    13. Section Position
    14. Filter
    15. Counter Up
    16. AS Tab
    17. Shape Mockup
    18. Progress Bar Animation
    19. Price Slider
    21. Indicator
    22. Circle Progress
    00. Woocommerce Toggle
    00. Right Click Disable
  */
    /*=================================
      JS Index End
  ==================================*/
    /*

  /*---------- 01. On Load Function ----------*/
    $(window).on("load", function () {
        $(".preloader").fadeOut();
    });
     
    
    // ------------ Preloader -----------
   if ($("#preloader").length) {
        $("#preloader").delay(1600).fadeOut();
        setTimeout(function () {
            $(".preloader-bg-one").css("transform", "translateY(-100%)");
            $(".preloader-bg-two").css("transform", "translateY(100%)");
            $(".loader-wrapper").css("opacity", 0);
        }, 1000);
    }
    /**
     * ======================================
     * 02. custom cursor
     * ======================================
     */
    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function (s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button:not(.not-cursor), a:not(.not-cursor), .cursor-pointer",
                            function () {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function () {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");

                    // text view cursor
                    $("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
                        "mouseenter",
                        function () {
                            $(".mouseCursor").addClass("cursor-big");
                        }
                    );

                    $("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
                        "mouseleave",
                        function () {
                            $(".mouseCursor").removeClass("cursor-big");
                        }
                    );

                    // no cursor
                    $(".not-cursor").on("mouseenter", function () {
                        $(".mouseCursor").addClass("not-cursor-outer");
                    });

                    $(".not-cursor").on("mouseleave", function () {
                        $(".mouseCursor").removeClass("not-cursor-outer");
                    });
                }
            }
        }
        itCursor();
    }


    // $('select').niceSelect(); 
    if ($('.nice-select').length) {
        $('.nice-select').niceSelect();
    }


    /*---------- 03. Mobile Menu Active ----------*/
    $.fn.thmobilemenu = function (options) {
        var opt = $.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400,
            },
            options
        );

        return this.each(function () {
            var menu = $(this); // Select menu

            // Menu Show & Hide
            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);

                // collapse submenu on menu hide or show
                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function () {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }

            // Class Set Up for every submenu
            menu.find("li").each(function () {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                submenu.parent().addClass(opt.subMenuParent);
                submenu.prev("a").append(opt.appendElement);
                submenu.next("a").append(opt.appendElement);
            });

            // Toggle Submenu
            function toggleDropDown($element) {
                if ($($element).next("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).next("ul").slideToggle(opt.toggleSpeed);
                    $($element).next("ul").toggleClass(opt.subMenuToggleClass);
                } else if ($($element).prev("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).prev("ul").slideToggle(opt.toggleSpeed);
                    $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
                }
            }

            // Submenu toggle Button
            var expandToggler = "." + opt.meanExpandClass;
            $(expandToggler).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });

            // Menu Show & Hide On Toggle Btn click
            $(opt.menuToggleBtn).each(function () {
                $(this).on("click", function () {
                    menuToggle();
                });
            });

            // Hide Menu On out side click
            menu.on("click", function (e) {
                e.stopPropagation();
                menuToggle();
            });

            // Stop Hide full menu on menu click
            menu.find("div").on("click", function (e) {
                e.stopPropagation();
            });
        });
    };

    $(".th-menu-wrapper").thmobilemenu();

    /*---------- 04. Sticky fix ----------*/
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 500) {
            $('.sticky-wrapper').addClass('sticky');
        } else {
            $('.sticky-wrapper').removeClass('sticky')
        }
    })

    /*----------- 04.1.  One Page Nav ----------*/
    function onePageNav(element) {
        if ($(element).length > 0) {
            $(element).each(function () {
                var link = $(this).find('a');
                $(this).find(link).each(function () {
                    $(this).on('click', function () {
                        var target = $(this.getAttribute('href'));
                        if (target.length) {
                            event.preventDefault();
                            $('html, body').stop().animate({
                                scrollTop: target.offset().top - 10
                            }, 1000);
                        };

                    });
                });
            })
        }
    };
    onePageNav('.onepage-nav');
    onePageNav('.scroll-down');

    /*---------- 05. Scroll To Top ----------*/
      if ($('.scroll-top')) {

        var scrollTopbtn = document.querySelector('.scroll-top');
        var progressPath = document.querySelector('.scroll-top path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 750;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(scrollTopbtn).addClass('show');
            } else {
                jQuery(scrollTopbtn).removeClass('show');
            }
        });
        jQuery(scrollTopbtn).on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })
    }



    /*---------- 06. Set Background Image Color & Mask ----------*/
    if ($("[data-bg-src]").length > 0) {
        $("[data-bg-src]").each(function () {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });
    }

    if ($('[data-bg-color]').length > 0) {
        $('[data-bg-color]').each(function () {
            var color = $(this).attr('data-bg-color');
            $(this).css('background-color', color);
            $(this).removeAttr('data-bg-color');
        });
    };

    $('[data-border]').each(function () {
        var borderColor = $(this).data('border');
        $(this).css('--th-border-color', borderColor);
    });

    if ($('[data-mask-src]').length > 0) {
        $('[data-mask-src]').each(function () {
            var mask = $(this).attr('data-mask-src');
            $(this).css({
                'mask-image': 'url(' + mask + ')',
                '-webkit-mask-image': 'url(' + mask + ')'
            });
            $(this).addClass('bg-mask');
            $(this).removeAttr('data-mask-src');
        });
    };



  /*----------- 07. Global Slider ----------*/

    $('.th-slider').each(function () {

        var thSlider = $(this);
        var settings = $(this).data('slider-options');

        // Store references to the navigation Slider
        var prevArrow = thSlider.find('.slider-prev');
        var nextArrow = thSlider.find('.slider-next');
        var paginationElN = thSlider.find('.slider-pagination.pagi-number');
        var paginationExternel = thSlider.siblings('.slider-controller').find('.slider-pagination');

        var paginationEl = paginationExternel.length ? paginationExternel.get(0) : thSlider.find('.slider-pagination').get(0);

        var paginationType = settings['paginationType'] ? settings['paginationType'] : 'bullets';

        var autoplayconditon = settings['autoplay'];

        var sliderDefault = {
            slidesPerView: 1,
            spaceBetween: settings['spaceBetween'] ? settings['spaceBetween'] : 24,
            loop: settings['loop'] == false ? false : true,
            speed: settings['speed'] ? settings['speed'] : 1000,
            autoplay: autoplayconditon ? autoplayconditon : {
                delay: 6000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: nextArrow.get(0),
                prevEl: prevArrow.get(0),
            },
            pagination: {
                el: paginationEl,
                type: paginationType,
                clickable: true,
                renderBullet: function (index, className) {
                    var number = index + 1;
                    var formattedNumber = number < 10 ? '0' + number : number;
                    if (paginationElN.length) {
                        return '<span class="' + className + ' number">' + formattedNumber + '</span>';
                    } else {
                        return '<span class="' + className + '" aria-label="Go to Slide ' + formattedNumber + '"></span>';
                    }
                },
                formatFractionCurrent: function (number) {
                    if (number < 10) {
                        return '0' + number;
                    } else {
                        return number;
                    }
                },
                formatFractionTotal: function (number) {
                    if (number < 10) {
                        return '0' + number;
                    } else {
                        return number;
                    }
                }
            },
            on: {
                slideChange: function () {
                    setTimeout(function () {
                        swiper.params.mousewheel.releaseOnEdges = false;
                    }, 500);
                },
                reachEnd: function () {
                    setTimeout(function () {
                        swiper.params.mousewheel.releaseOnEdges = true;
                    }, 750);
                }
            }
        };

        var options = JSON.parse(thSlider.attr('data-slider-options'));
        options = $.extend({}, sliderDefault, options);
        var swiper = new Swiper(thSlider.get(0), options); // Assign the swiper variable

        var swiper = new Swiper(thSlider.find('.swiper-container').get(0), options);

        if ($('.slider-area').length > 0) {
            $('.slider-area').closest(".container").parent().addClass("arrow-wrap");
        }

    });


      /* ------------------------------
       Wheel-like effect slider
    -------------------------------- */
    const multiplier = {
        translate: 0.1,
        rotate: 0.01
    };


    function calculateWheel() {
        const slides = document.querySelectorAll('.swiper .single');
        slides.forEach((slide) => {
            const rect = slide.getBoundingClientRect();
            const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
            let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

            if (ty < 0) ty = 0;

            const transformOrigin = r < 0 ? 'left top' : 'right top';
            slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
            slide.style.transformOrigin = transformOrigin;
        });
    }

    function raf() {
        requestAnimationFrame(raf);
        calculateWheel();
    }
    raf();


    function animationProperties() {
        $('[data-ani]').each(function () {
            var animationName = $(this).data('ani');
            $(this).addClass(animationName);
        });

        $('[data-ani-delay]').each(function () {
            var delayTime = $(this).data('ani-delay');
            $(this).css('animation-delay', delayTime);
        });
    }
    animationProperties();

    // Add click event handlers for external slider arrows based on data attributes
    $('[data-slider-prev], [data-slider-next]').on('click', function () {
        var sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
        var targetSlider = $(sliderSelector);

        if (targetSlider.length) {
            var swiper = targetSlider[0].swiper;

            if (swiper) {
                if ($(this).data('slider-prev')) {
                    swiper.slidePrev();
                } else {
                    swiper.slideNext();
                }
            }
        }
    });

    /*-------------- 08. Slider Tab -------------*/
    $.fn.activateSliderThumbs = function (options) {
        var opt = $.extend({
                sliderTab: false,
                tabButton: ".tab-btn",
            },
            options
        );

        return this.each(function () {
            var $container = $(this);
            var $thumbs = $container.find(opt.tabButton);
            var $line = $('<span class="indicator"></span>').appendTo($container);

            var sliderSelector = $container.data("slider-tab");
            var $slider = $(sliderSelector);

            var swiper = $slider[0].swiper;

            $thumbs.on("click", function (e) {
                e.preventDefault();
                var clickedThumb = $(this);

                clickedThumb.addClass("active").siblings().removeClass("active");
                linePos(clickedThumb, $container);

                if (opt.sliderTab) {
                    var slideIndex = clickedThumb.index();
                    swiper.slideTo(slideIndex);
                }
            });

            if (opt.sliderTab) {
                swiper.on("slideChange", function () {
                    var activeIndex = swiper.realIndex;
                    var $activeThumb = $thumbs.eq(activeIndex);

                    $activeThumb.addClass("active").siblings().removeClass("active");
                    linePos($activeThumb, $container);
                });

                var initialSlideIndex = swiper.activeIndex;
                var $initialThumb = $thumbs.eq(initialSlideIndex);
                $initialThumb.addClass("active").siblings().removeClass("active");
                linePos($initialThumb, $container);
            }

            function linePos($activeThumb) {
                var thumbOffset = $activeThumb.position();

                var marginTop = parseInt($activeThumb.css('margin-top')) || 0;
                var marginLeft = parseInt($activeThumb.css('margin-left')) || 0;

                $line.css("--height-set", $activeThumb.outerHeight() + "px");
                $line.css("--width-set", $activeThumb.outerWidth() + "px");
                $line.css("--pos-y", thumbOffset.top + marginTop + "px");
                $line.css("--pos-x", thumbOffset.left + marginLeft + "px");
            }
        });
    };

    if ($(".testi-thumb").length) {
        $(".testi-thumb").activateSliderThumbs({
            sliderTab: true,
            tabButton: ".tab-btn",
        });
    }
   

    if ($(".project-thumb").length) {
        $(".project-thumb").activateSliderThumbs({
            sliderTab: true,
            tabButton: ".tab-btn",
        });
    }


    /*----------- 09. Ajax Contact Form ----------*/
    var form = ".ajax-contact";
    var invalidCls = "is-invalid";
    var $email = '[name="email"]';
    var $validation =
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
    var formMessages = $(".form-messages");

    function sendContact() {
        var formData = $(form).serialize();
        var valid;
        valid = validateContact();
        if (valid) {
            jQuery
                .ajax({
                    url: $(form).attr("action"),
                    data: formData,
                    type: "POST",
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    formMessages.removeClass("error");
                    formMessages.addClass("success");
                    // Set the message text.
                    formMessages.text(response);
                    // Clear the form.
                    $(
                        form +
                        ' input:not([type="submit"]),' +
                        form +
                        " textarea"
                    ).val("");
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    formMessages.removeClass("success");
                    formMessages.addClass("error");
                    // Set the message text.
                    if (data.responseText !== "") {
                        formMessages.html(data.responseText);
                    } else {
                        formMessages.html(
                            "Oops! An error occured and your message could not be sent."
                        );
                    }
                });
        }
    }

    function validateContact() {
        var valid = true;
        var formInput;

        function unvalid($validation) {
            $validation = $validation.split(",");
            for (var i = 0; i < $validation.length; i++) {
                formInput = form + " " + $validation[i];
                if (!$(formInput).val()) {
                    $(formInput).addClass(invalidCls);
                    valid = false;
                } else {
                    $(formInput).removeClass(invalidCls);
                    valid = true;
                }
            }
        }
        unvalid($validation);

        if (
            !$($email).val() ||
            !$($email)
            .val()
            .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
        ) {
            $($email).addClass(invalidCls);
            valid = false;
        } else {
            $($email).removeClass(invalidCls);
            valid = true;
        }
        return valid;
    }

    $(form).on("submit", function (element) {
        element.preventDefault();
        sendContact();
    });

    /*---------- 10. Search Box Popup ----------*/
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
        $($searchOpen).on("click", function (e) {
            e.preventDefault();
            $($searchBox).addClass($toggleCls);
        });
        $($searchBox).on("click", function (e) {
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
        $($searchBox)
            .find("form")
            .on("click", function (e) {
                e.stopPropagation();
                $($searchBox).addClass($toggleCls);
            });
        $($searchCls).on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
    }
    popupSarchBox(
        ".popup-search-box",
        ".searchBoxToggler",
        ".searchClose",
        "show"
    );

    /*---------- 11. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
        // Sidebar Popup
        $($sideMunuOpen).on('click', function (e) {
            e.preventDefault();
            $($sideMenu).addClass($toggleCls);
        });
        $($sideMenu).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls)
        });
        var sideMenuChild = $sideMenu + ' > div';
        $(sideMenuChild).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu).addClass($toggleCls)
        });
        $($sideMenuCls).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls);
        });
    };
    popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');
    /*---------- 12. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu2, $sideMunuOpen2, $sideMenuCls2, $toggleCls2) {
        // Sidebar Popup
        $($sideMunuOpen2).on('click', function (e) {
            e.preventDefault();
            $($sideMenu2).addClass($toggleCls2);
        });
        $($sideMenu2).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu2).removeClass($toggleCls2)
        });
        var sideMenuChild = $sideMenu2 + ' > div';
        $(sideMenuChild).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu2).addClass($toggleCls2)
        });
        $($sideMenuCls2).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($sideMenu2).removeClass($toggleCls2);
        });
    };
    popupSideMenu('.shopping-cart', '.sideMenuToggler2', '.sideMenuCls', 'show');

    /*----------- 12. Magnific Popup ----------*/
    /* magnificPopup img view */
    $(".th-popup-image").magnificPopup({
        type: "image",
        mainClass: 'mfp-zoom-in',
        removalDelay: 260,
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: 'mfp-zoom-in',
        removalDelay: 260,
    });

    /* magnificPopup video view */
    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true,
    });


    if ($('[data-theme-color]').length > 0) {
        $('[data-theme-color]').each(function () {
            var $color = $(this).attr('data-theme-color');
            $(this).get(0).style.setProperty('--theme-color', $color);
            $(this).removeAttr('data-theme-color');
        });
    };


    /************lettering js***********/
    function injector(t, splitter, klass, after) {
        var a = t.text().split(splitter),
            inject = '';
        if (a.length) {
            $(a).each(function (i, item) {
                inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
            });
            t.empty().append(inject);
        }
    }

    var methods = {
        init: function () {

            return this.each(function () {
                injector($(this), '', 'char', '');
            });

        },

        words: function () {

            return this.each(function () {
                injector($(this), ' ', 'word', ' ');
            });

        },

        lines: function () {

            return this.each(function () {
                var r = "eefec303079ad17405c889e092e105b0";
                // Because it's hard to split a <br/> tag consistently across browsers,
                // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
                // (of the word "split").  If you're trying to use this plugin on that 
                // md5 hash string, it will fail because you're being ridiculous.
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });

        }
    };

    $.fn.lettering = function (method) {
        // Method calling logic
        if (method && methods[method]) {
            return methods[method].apply(this, [].slice.call(arguments, 1));
        } else if (method === 'letters' || !method) {
            return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
        }
        $.error('Method ' + method + ' does not exist on jQuery.lettering');
        return this;
    };

    $(".discount-anime").lettering();


    /*---------- 13. Section Position ----------*/
    // Interger Converter
    function convertInteger(str) {
        return parseInt(str, 10);
    }

    $.fn.sectionPosition = function (mainAttr, posAttr) {
        $(this).each(function () {
            var section = $(this);

            function setPosition() {
                var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
                    posData = section.attr(mainAttr), // where to position
                    posFor = section.attr(posAttr), // On Which section is for positioning
                    topMark = "top-half", // Pos top
                    bottomMark = "bottom-half", // Pos Bottom
                    parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
                    parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

                if (posData === topMark) {
                    $(posFor).css(
                        "padding-bottom",
                        parentPB + sectionHeight + "px"
                    );
                    section.css("margin-top", "-" + sectionHeight + "px");
                } else if (posData === bottomMark) {
                    $(posFor).css(
                        "padding-top",
                        parentPT + sectionHeight + "px"
                    );
                    section.css("margin-bottom", "-" + sectionHeight + "px");
                }
            }
            setPosition(); // Set Padding On Load
        });
    };

    var postionHandler = "[data-sec-pos]";
    if ($(postionHandler).length) {
        $(postionHandler).imagesLoaded(function () {
            $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
        });
    }

    /*----------- 15. Filter ----------*/
    $(".filter-active").imagesLoaded(function () {
        var $filter = ".filter-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });

            // filter items on button click
            $($filterMenu).on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });

            // Menu Active Class
            $($filterMenu).on("click", "button", function (event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
       
    });


    $(".masonary-active").imagesLoaded(function () {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item";

        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
    });

    $(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(function () {
        var $filter = ".masonary-active, .woocommerce-Reviews .comment-list",
            $filterItem = ".filter-item, .woocommerce-Reviews .comment-list li";

        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
        $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            $($filter).isotope({
                filter: "*",
            });
        });
    });

    /*----------- 15. Counter Up ----------*/
    $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
    });

    /*----------- 17. Shape Mockup ----------*/
    $.fn.shapeMockup = function () {
        var $shape = $(this);
        $shape.each(function () {
            var $currentShape = $(this),
                shapeTop = $currentShape.data("top"),
                shapeRight = $currentShape.data("right"),
                shapeBottom = $currentShape.data("bottom"),
                shapeLeft = $currentShape.data("left");
            $currentShape
                .css({
                    top: shapeTop,
                    right: shapeRight,
                    bottom: shapeBottom,
                    left: shapeLeft,
                })
                .removeAttr("data-top")
                .removeAttr("data-right")
                .removeAttr("data-bottom")
                .removeAttr("data-left")
                .parent()
                .addClass("shape-mockup-wrap");
        });
    };

    if ($(".shape-mockup")) {
        $(".shape-mockup").shapeMockup();
    }


    /*----------- 16. Shape Mockup ----------*/
    $.fn.shapeMockup2 = function () {
        var $shape = $(this);
        $shape.each(function () {
            var $currentShape = $(this),
                shapeTop = $currentShape.data("top"),
                shapeRight = $currentShape.data("right"),
                shapeBottom = $currentShape.data("bottom"),
                shapeLeft = $currentShape.data("left");
            $currentShape
                .css({
                    top: shapeTop,
                    right: shapeRight,
                    bottom: shapeBottom,
                    left: shapeLeft,
                })
                .removeAttr("data-top")
                .removeAttr("data-right")
                .removeAttr("data-bottom")
                .removeAttr("data-left")
                .parent()
                .addClass("shape-mockup-wrap2");
        });
    };

    if ($(".shape-mockup2")) {
        $(".shape-mockup2").shapeMockup2();
    }
    /*----------- 19. Price Slider ----------*/
    $(".price_slider").slider({
        range: true,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function (event, ui) {
            $(".from").text("$" + ui.values[0]);
            $(".to").text("$" + ui.values[1]);
        }
    });
    $(".from").text("$" + $(".price_slider").slider("values", 0));
    $(".to").text("$" + $(".price_slider").slider("values", 1));



    /*----------- 16. Progress Bar Animation ----------*/
    $('.progress-bar').waypoint(function () {
        $('.progress-bar').css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        });
    }, {
        offset: '75%'
    });



    /*----------- 00. Woocommerce Toggle ----------*/
    // Ship To Different Address
    $("#ship-to-different-address-checkbox").on("change", function () {
        if ($(this).is(":checked")) {
            $("#ship-to-different-address")
                .next(".shipping_address")
                .slideDown();
        } else {
            $("#ship-to-different-address").next(".shipping_address").slideUp();
        }
    });

    // Login Toggle
    $(".woocommerce-form-login-toggle a").on("click", function (e) {
        e.preventDefault();
        $(".woocommerce-form-login").slideToggle();
    });

    // Coupon Toggle
    $(".woocommerce-form-coupon-toggle a").on("click", function (e) {
        e.preventDefault();
        $(".woocommerce-form-coupon").slideToggle();
    });

    // Woocommerce Shipping Method
    $(".shipping-calculator-button").on("click", function (e) {
        e.preventDefault();
        $(this).next(".shipping-calculator-form").slideToggle();
    });

    // Woocommerce Payment Toggle
    $('.wc_payment_methods input[type="radio"]:checked')
        .siblings(".payment_box")
        .show();
    $('.wc_payment_methods input[type="radio"]').each(function () {
        $(this).on("change", function () {
            $(".payment_box").slideUp();
            $(this).siblings(".payment_box").slideDown();
        });
    });

    // Woocommerce Rating Toggle
    $(".rating-select .stars a").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).siblings().removeClass("active");
            $(this).parent().parent().addClass("selected");
            $(this).addClass("active");
        });
    });

    // Quantity Plus Minus ---------------------------

    $(".quantity-plus").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            var $qty = $(this).siblings(".qty-input");
            var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal)) {
                $qty.val(currentVal + 1);
            }
        });
    });

    $(".quantity-minus").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            var $qty = $(this).siblings(".qty-input");
            var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal) && currentVal > 1) {
                $qty.val(currentVal - 1);
            }
        });
    });

    // /*----------- 00.Color Scheme ----------*/
    $('.color-switch-btns button').each(function () {
        // Get color for button
        const button = $(this);
        const color = button.data('color');
        button.css('--theme-color', color);

        // Change theme color on click
        button.on('click', function () {
            const clickedColor = $(this).data('color');
            $('body').css('--theme-color', clickedColor);
        });
    });
    if ($('[theme-color]').length > 0) {
        $('[theme-color]').each(function () {
            var $color = $(this).attr('theme-color');
            $(this).get(0).style.setProperty('--theme-color', $color);
            $(this).removeAttr('theme-color');
        });
    };
    if ($('[title-color]').length > 0) {
        $('[title-color]').each(function () {
            var $color = $(this).attr('title-color');
            $(this).get(0).style.setProperty('--title-color', $color);
            $(this).removeAttr('title-color');
        });
    };

    $(document).on('click', '.switchIcon', function () {
        $('.color-scheme-wrap').toggleClass('active');
    });

    // /*----------- Pricing-switch & Tab ----------*/
    var e = document.getElementById("filt-monthly"),
        d = document.getElementById("filt-yearly"),
        t = document.getElementById("switcher"),
        m = document.getElementById("monthly"),
        y = document.getElementById("yearly");


    if ($('.pricing-tabs').length) {
        e.addEventListener("click", function () {
            t.checked = false;
            e.classList.add("toggler--is-active");
            d.classList.remove("toggler--is-active");
            m.classList.remove("hide");
            y.classList.add("hide");
        });

        d.addEventListener("click", function () {
            t.checked = true;
            d.classList.add("toggler--is-active");
            e.classList.remove("toggler--is-active");
            m.classList.add("hide");
            y.classList.remove("hide");
        });

        t.addEventListener("click", function () {
            d.classList.toggle("toggler--is-active");
            e.classList.toggle("toggler--is-active");
            m.classList.toggle("hide");
            y.classList.toggle("hide");
        });
    }

   


    /* ==================================================
			# Wow Init
		 ===============================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    new WOW().init();

    /* Image Reveal Animation */
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

    /* Text Effect Animation */
    if ($('.text-anime-style-1').length) {
        let staggerAmount = 0.05,
            translateXValue = 0,
            delayValue = 0.5,
            animatedTextElements = document.querySelectorAll('.text-anime-style-1');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, {
                type: "chars, words"
            });
            gsap.from(animationSplitText.words, {
                duration: 1,
                delay: delayValue,
                x: 20,
                autoAlpha: 0,
                stagger: staggerAmount,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%"
                },
            });
        });
    }


    if ($(".text-anime-style-2").length) {
		let staggerAmount = 0.03,
		translateXValue = 20,
		delayValue = 0.1,
		easeType = "power2.out",
		animatedTextElements = document.querySelectorAll(".text-anime-style-2");

		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
			gsap.from(animationSplitText.chars, {
				duration: 1,
				delay: delayValue,
				x: translateXValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}

   

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const awards = gsap.utils.toArray(".award-item");
  const awardArea = document.querySelector(".award-area");

  if (!awardArea || awards.length === 0) return;

  // Hide all first
  gsap.set(awards, { autoAlpha: 0, y: 100 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: awardArea,
      start: "top top",
      end: "+=" + awards.length * 400,
      pin: true,
      scrub: true,
      markers: false
    }
  });

  awards.forEach((award) => {
    tl.to(award, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
    	if (document.querySelector('.project-item2')) {
		const pw = gsap.matchMedia();
		pw.add("(min-width: 991px)", () => {
			gsap.set('.th-box-img.item-1', { x: -400, rotate: -10,});
			gsap.set('.th-box-img.item-2', { x: 400, rotate: 10, });
			document.querySelectorAll('.project-item2').forEach(item => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: 'top 100%',
						end: 'bottom center',
						scrub: 1,
					}
				});
				tl.to(item.querySelector('.th-box-img.item-1'), { x: 0, rotate: 0 })
				.to(item.querySelector('.th-box-img.item-2'), { x: 0, rotate: 0 }, 0);
			});
		});
	}
});






    //  project anim //
	

    
	const td_anim_reveal = document.querySelectorAll(".text-anime-style-3");
	td_anim_reveal.forEach(areveal => {
		const getAttributeValue = (attr, defaultValue) => areveal.getAttribute(attr) || defaultValue;
		const duration_value = Number(getAttributeValue("data-duration", 1));
		const onscroll_value = Number(getAttributeValue("data-on-scroll", 1));
		const stagger_value = Number(getAttributeValue("data-stagger", 0.02));
		const data_delay = Number(getAttributeValue("data-delay", 0.08));
		const ease_value = getAttributeValue("data-ease", "circ.out");

		areveal.split = new SplitText(areveal, { type: "lines,words,chars", linesClass: "revel-line" });
		const animationProps = {
			duration: duration_value,
			delay: data_delay,
			ease: ease_value,
			y: 40,
			stagger: stagger_value,
			opacity: 0,
		};

		if (onscroll_value === 1) {
			areveal.anim = gsap.from(areveal.split.chars, {
				scrollTrigger: {
					trigger: areveal,
					start: 'top 85%',
				},
				...animationProps,
			});
		} else {
			areveal.anim = gsap.from(areveal.split.chars, animationProps);
		}
	});



    
    const tl = gsap.timeline();

    tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
        amount: 0.3
    }
    })

    //cta  SplitText
gsap.registerPlugin(SplitText, ScrollTrigger);

let wrapper = document.querySelector(".slide-text");
let text = document.querySelector(".th-title");
let split = SplitText.create(".th-title", { type: "chars, words" });

const scrollTween = gsap.to(text, { 
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: wrapper,
    pin: true,
    
    end: "+=500px",
    scrub: true
  }
});

split.chars.forEach((char) => {
  gsap.from(char, {
    yPercent: "random(-150, 0)",
    rotation: "random(-20, 0)",
    ease: "back.out(1.1)", 
    scrollTrigger: {
      trigger: char,
      containerAnimation: scrollTween,
      start: "left 100%",
      end: "left 30%",
      scrub: 1
    }
  });
});


////////////////////////////
	// card add one by one
    ////////////////////////////
	// card add one by one
	if ($('.testi-sec2').length) {
		let mm = gsap.matchMedia();
	
		mm.add("(min-width: 992px)", () => {
		// Common ScrollTrigger options
		const baseOptions = {
			scrub: 1,
			start: 'top 0%',
			end: 'bottom 80%',
			endTrigger: '.testi-sec2',
			pinSpacing: false,
			markers: false,
		};
	
		// For px-step-item
		document.querySelectorAll('.testi-card2-wrapper').forEach((item, i) => {
			gsap.to(item, {
			scrollTrigger: {
				trigger: item,
				pin: item,
				...baseOptions,
			}
			});
		});
	
		// For px-step-card with left/right rotation
		document.querySelectorAll('.testi-card2').forEach((card, i) => {
			let rotateValue = i % 2 === 0 ? -5 : 5;
	
			gsap.to(card, {
			rotate: rotateValue,
			scrollTrigger: {
				trigger: card,
				pin: card,
				...baseOptions,
				start: 'top 10%',
				end: 'bottom 80%'
			}
			});
		});
		});
	}


    // Image Reveal Animation
    let img_anim_reveal = document.querySelectorAll(".img_anim_reveal");

    img_anim_reveal.forEach((img_reveal) => {
        let image = img_reveal.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: img_reveal,
                start: "top 50%",
            }
        });

        tl.set(img_reveal, {
            autoAlpha: 1
        });
        tl.from(img_reveal, 1.5, {
            yPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            yPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    });

    // hover reveal start
    if (document.querySelectorAll(".hover-reveal").length > 0) {
        const hoverText = document.querySelectorAll(".hover-reveal");

        function moveText(e, hoverText) {
            const item = hoverText.getBoundingClientRect();
            const x = e.clientX - item.x;
            const y = e.clientY - item.y;
            if (hoverText.children[0]) {
                hoverText.children[0].style.transform = `translate(${x}px, ${y}px)`;
            }
        }
        hoverText.forEach((item, i) => {
            item.addEventListener("mousemove", (e) => {
                setInterval(moveText(e, item), 100);
            });
        });
    }
    // hover reveal end



    // scale animation 
    var scale = document.querySelectorAll(".scale");
    var image = document.querySelectorAll(".scale img");
    scale.forEach((item) => {
        gsap.to(item, {
            scale: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: "bottom top",
                toggleActions: 'play reverse play reverse'
            }
        });
    });
    image.forEach((image) => {
        gsap.set(image, {
            scale: 1.3,
        });
        gsap.to(image, {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: "bottom top",
                toggleActions: 'play reverse play reverse'
            }
        });
    })





  let pr = gsap.matchMedia();

	pr.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let panels = document.querySelectorAll('.th-panel-pin');

		panels.forEach((section) => {

			// default value
			let defaultStart = "top 10%";
			let defaultEnd   = "bottom 99%";

			// if attribute exists â†’ override
			let startVal = section.dataset.start || defaultStart;
			let endVal   = section.dataset.end   || defaultEnd;

			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: startVal,
					end: endVal,
					endTrigger: '.th-panel-pin-area',
					pinSpacing: false,
					markers: false,
				}
			});

		});
	});






    /* ---------  Counter Animation start --------*/

    // Define device_width first
    const device_width = window.innerWidth;

    const bounceItems = gsap.utils.toArray(".bounce_animation .bounce__anim");

    if (bounceItems.length > 0) {
        // Initial state
        gsap.set(bounceItems, {
            y: -100,
            opacity: 0
        });

        if (device_width < 1023) {
            // Mobile / Tablet
            bounceItems.forEach((item) => {
                let counterTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top center+=200",
                    },
                });

                counterTl.to(item, {
                    y: 0,
                    opacity: 1,
                    ease: "bounce",
                    duration: 1.5,
                });
            });
        } else {
            // Desktop
            gsap.to(bounceItems, {
                scrollTrigger: {
                    trigger: ".bounce_animation",
                    start: "top center+=300",
                },
                y: 0,
                opacity: 1,
                ease: "bounce",
                duration: 1.5,
                stagger: {
                    each: 0.3,
                },
            });
        }
    }

    /* ---------  Counter Animation end --------*/


document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) return; 

  const advanceItems = document.querySelectorAll(".cta-wrapp .cta-item");

  if (advanceItems.length > 0) {
   
    const initialStates = [
      { xPercent: 60, rotate: 10 }, 
      { xPercent: 40, rotate: 6 },
      { xPercent: 20, rotate: 3 },
      { xPercent: 0, rotate: 0 },   
      { xPercent: -20, rotate: -3 },
      { xPercent: -40, rotate: -6 },
      { xPercent: -60, rotate: -10 } 
    ];

   
    advanceItems.forEach((item, index) => {
      if (initialStates[index]) {
        gsap.set(item, { xPercent: initialStates[index].xPercent, rotate: initialStates[index].rotate });
      }
    });

    // scrollTrigger animation
    const advanced = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-wrapp",
        start: "top 80%",
        toggleActions: "play none none reverse",
        markers: false, 
      },
      defaults: {
        ease: "power1.out",
        duration: 1,
      },
    });

    // staggered animation to bring items to center
    advanceItems.forEach((item, index) => {
      advanced.to(item, { xPercent: 0, rotate: 0 }, "<");
    });
  }
});


gsap.registerPlugin(ScrollTrigger);

// First image scroll effect
gsap.to(".video-thumb-img", {
  y: 1010, // distance to move down
  scrollTrigger: {
    trigger: ".video-area",
    start: "top bottom", // when video-area enters viewport
    end: "bottom top",   // until video-area leaves viewport
    scrub: true,         // smooth scrubbing
    toggleActions: "play none none reverse"
  }
});

// Second image scroll effect
gsap.to(".video-thumb-img2", {
  y: 1010, // distance to move up
  scrollTrigger: {
    trigger: ".video-area",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    toggleActions: "play none none reverse"
  }
});

  // ---------- Smooth Scroll ----------
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
        const lenis = new Lenis({
            lerp: 0.07,
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        

        document.querySelectorAll(".allow-natural-scroll").forEach((el) => {
            el.addEventListener("wheel", (e) => e.stopPropagation(), { passive: true });
            el.addEventListener("touchmove", (e) => e.stopPropagation(), { passive: true });
        });
    }




if (document.querySelector('.th-hero-wrapper ')) {
		const pw = gsap.matchMedia();
		pw.add("(min-width: 991px)", () => {
			gsap.set('.hero-img-one', { x: -1000, rotate: -10,});
			gsap.set('.hero-img-two', { x: 1000, rotate: 10, });
			gsap.set('.hero-image', { y: 400, opacity: 0, "margin-top":"-100px" });
			document.querySelectorAll('.th-hero-wrapper ').forEach(item => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: 'top 100%',
						end: 'bottom center',
                        duration: 10,
						scrub: 1,
					}
				});
				tl.to(item.querySelector('.hero-img-one'), { x: 400, rotate: 0 })
				.to(item.querySelector('.hero-img-two'), { x: -400, rotate: 0 }, 0)
				.to(item.querySelector('.hero-image'), { y: 0, opacity: 1, "margin-top":"-200px" , rotate: 0 }, 0);
			});
		});
	}




	(function () {
		var $slides = document.querySelectorAll('.th-feature-revealing-slide');
		var $controls = document.querySelectorAll('.th-feature-revealing-slider-control');
		var numOfSlides = $slides.length;
		var slidingAT = 1300;
		var slidingBlocked = false;

		[].slice.call($slides).forEach(function ($el, index) {
			var i = index + 1;
			$el.classList.add('th-feature-revealing-slide-' + i);
			$el.dataset.slide = i;
		});

		if (!$slides.length) return;
		$slides[0].classList.add('s-active');

		[].slice.call($controls).forEach(function ($el) {
			$el.addEventListener('click', controlClickHandler);
		});

		// Scroll support
		window.addEventListener('wheel', function (e) {
			if (slidingBlocked) return;

			if (e.deltaY > 0) {
				changeSlide(true);
			} else if (e.deltaY < 0) {
				changeSlide(false);
			}
		});

		function controlClickHandler() {
			if (slidingBlocked) return;
			var isRight = this.classList.contains('m-right');
			changeSlide(isRight, this);
		}

		function changeSlide(isRight, $controlEl) {
			slidingBlocked = true;

			var $curActive = document.querySelector('.th-feature-revealing-slide.s-active');
			if (!$curActive) {
				console.warn('No active slide found.');
				slidingBlocked = false;
				return;
			}

			var index = +$curActive.dataset.slide;
			isRight ? index++ : index--;
			if (index < 1) index = numOfSlides;
			if (index > numOfSlides) index = 1;
			var $newActive = document.querySelector('.th-feature-revealing-slide-' + index);

			if ($controlEl) {
				$controlEl.classList.add('a-rotation');
			}

			$curActive.classList.remove('s-active', 's-active-prev');
			document.querySelector('.th-feature-revealing-slide.s-prev')?.classList.remove('s-prev');

			$newActive.classList.add('s-active');
			if (!isRight) $newActive.classList.add('s-active-prev');

			var prevIndex = index - 1;
			if (prevIndex < 1) prevIndex = numOfSlides;
			document.querySelector('.th-feature-revealing-slide-' + prevIndex).classList.add('s-prev');

			var direction = isRight ? 1 : -1;
			var currentHeading = $curActive.querySelector('.th-feature-revealing-slide-heading');
			var nextHeading = $newActive.querySelector('.th-feature-revealing-slide-heading');

			if (currentHeading && nextHeading) {
				gsap.timeline()
					.to(currentHeading, {
						scaleX: 2,
						xPercent: 20 * direction,
						duration: 1,
						ease: 'power3.inOut'
					}, 0)
					.fromTo(nextHeading, {
						scaleX: 2,
						xPercent: -10 * direction
					}, {
						scaleX: 1,
						xPercent: 0,
						duration: 1,
						ease: 'power3.inOut'
				}, 0);
			}

			setTimeout(function () {
				if ($controlEl) $controlEl.classList.remove('a-rotation');
				slidingBlocked = false;
			}, slidingAT * 0.75);
		}
	})();



       /*-------------- 09. Custom destination Slider -------------*/
    $('.history-list-wrap').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    function showNextdestination() {
        var $activedestination = $('.history-list-area .history-list-wrap.active');
        if ($activedestination.next().length > 0) {
            $activedestination.removeClass('active');
            $activedestination.next().addClass('active');
        } else {
            $activedestination.removeClass('active');
            $('.history-list-area .history-list-wrap:first').addClass('active');
        }
    }

    function showPreviousdestination() {
        var $activedestination = $('.history-list-area .history-list-wrap.active');
        if ($activedestination.prev().length > 0) {
            $activedestination.removeClass('active');
            $activedestination.prev().addClass('active');
        } else {
            $activedestination.removeClass('active');
            $('.history-list-area .history-list-wrap:last').addClass('active');
        }
    }
    $('.destination-prev').on('click', function () {
        showPreviousdestination();
    });
    $('.destination-next').on('click', function () {
        showNextdestination();
    });


    if ($(".shape-svg").length) {
const tl1 = gsap
  .timeline({
    repeat: -1,
    defaults:{ duration: 3, ease: 'power1.inOut' }
  })
  .set('#svg-stage', { opacity: 1 })
  .from('path', { drawSVG:'0% 0%' })
  .to('path', { drawSVG:'100% 100%' })
}



     $(".hover-item").hover(function () {
        $(this).addClass("item-active");
        $(this).siblings().removeClass("item-active"); 
    });  
   
	////////////////////////////////////////////////////
    
	

    /* Main js */
    /* -----------------*/


    /*----------- 00. Right Click Disable ----------*/
    //   window.addEventListener('contextmenu', function (e) { 
    //     // do something here... 
    //     e.preventDefault();   
    //   }, false);   
 
    // /*----------- 00. Inspect Element Disable ----------*/
    //   document.onkeydown = function (e) {
    //     if (event.keyCode == 123) {  
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
    //       return false;
    //     }
    //   }   

})(jQuery);