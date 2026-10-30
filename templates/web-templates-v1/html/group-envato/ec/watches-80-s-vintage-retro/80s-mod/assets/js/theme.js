'use strict';

$(window).load(function () {
    // Loader
    setTimeout(function () {
        $("#loading").fadeOut(300);
    }, 3100);

    //Custom Scroll Style
    if ($(window).width() < 767) {
        if ($(".header-wrap").length > 0) {
            $(".navigation").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
        if ($(".cate-wrap").length > 0) {
            $(".cate-wrap > nav").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
        if ($(".product-table").length > 0) {
            $(".product-table").mCustomScrollbar({
                theme: "dark-2",
                axis: "x",
                scrollButtons: {
                    enable: false
                }
            });
        }
    }

    /*------------------- Isotop  -------------------*/
    if ($('.isotope-item').length > 0) {
        if ($().isotope) {
            var $container = $('.isotope'); // cache container
            $container.isotope({
                itemSelector: '.isotope-item'
            });
            $('.filtrable a').on('click', function () {
                var selector = $(this).attr('data-filter');
                $('.filtrable li').removeClass('active');
                $(this).parent().addClass('active');
                $container.isotope({filter: selector});
                return false;
            });
            $container.isotope('layout'); // layout/layout
        }

        $(window).resize(function () {
            if ($().isotope) {
                $('.row.isotope').isotope('layout'); // layout/relayout on window resize
            }
        });

        $('#product-filter').isotope({filter: '.tab-1'});
    }
});

$(document).ready(function () {

    /*------------------- Page Loader Starts  -------------------*/
    var counter = 0;

// Start the changing images
    setInterval(function () {
        if (counter === 9) {
            counter = 0;
        }

        changeImage(counter);
        counter++;
    }, 3000);

// Set the percentage off
    loading();
    /*------------------- Page Loader Ends  -------------------*/

    /*------------------- Menu JS Starts  -------------------*/
    if ($('.wrapper > header').length > 0) {

        // Submenu Position Change on window size
        if ($(window).width() > 767) {
            $("ul.primary-navbar li li").mouseover(function () {
                if ($(this).children('ul').length == 1) {
                    var parent = $(this);
                    var child_menu = $(this).children('ul');
                    if ($(parent).offset().left + $(parent).width() + $(child_menu).width() > $(window).width()) {
                        $(child_menu).css('left', '-' + $(parent).width() + 'px');
                    } else {
                        $(child_menu).css('left', $(parent).width() + 'px');
                    }
                }
            });
        }


        if ($(window).width() < 767) {
            /*------------------- Header Offcanvas Add  -------------------*/
            $(".nav-trigger").on("click", function (e) {
                e.stopPropagation();
                $(".header-wrap .navigation").toggleClass("off-canvas");
                return false;
            });

            /*------------------- Category Menu -------------------*/
            $('.cate-toggle').on('click', function () {
                $('.cate-wrap').slideToggle();
                return false;
            });
        }

        $(".mega-dropdown-slider").owlCarousel({
            dots: false,
            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            margin: 30,
            responsive: {
                0: {items: 1},
                1200: {items: 2},
                992: {items: 2},
                768: {items: 2},
                568: {items: 2}
            },
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });


    }
    /*------------------- Menu JS Ends  -------------------*/


// owlCarousel Slider //

    //Main Slider carousel 
    if ($('#main-slider').length > 0) {
        $("#main-slider").owlCarousel({
            //animateOut: 'slideOutDown',
            //animateIn: 'flipInX',
            animateIn: 'fadeInDown',
            animateOut: 'slideOutDown',
            items: 1,
            dots: true,
            nav: false,
            loop: true,
            responsive: {
                0: {items: 1}
            }
        });
    }
    /*------------------- Product Slider -------------------*/
    if ($('#prod-slider-1, #prod-slider-2').length > 0) {
        $("#prod-slider-1, #prod-slider-2").owlCarousel({
            dots: false,
            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            margin: 30,
            responsive: {
                0: {items: 1},
                1201: {items: 2},
                768: {items: 1},
                568: {items: 2}
            },
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });
    }

    /*------------------- Product  Slider -------------------*/
    if ($('#deal-slider, #prod-featured-slider').length > 0) {
        $("#deal-slider, #prod-featured-slider").owlCarousel({
            dots: false,
            //loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            margin: 30,
            responsive: {
                0: {items: 1},
                1201: {items: 4},
                1024: {items: 3},
                768: {items: 2},
                568: {items: 2}
            },
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });
    }

    /*------------------- Testimonial Slider -------------------*/
    if ($('#testimonial-1').length > 0) {
        $("#testimonial-1").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: false,
            margin: 30,
            responsive: {
                0: {items: 1}
            }
        });
    }

    /*------------------- Brand Slider -------------------*/
    if ($('#brand-slider').length > 0) {
        $("#brand-slider").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: false,
            margin: 30,
            responsive: {
                0: {items: 1},
                1200: {items: 6},
                992: {items: 5},
                480: {items: 3}
            }
        });
    }

    /*------------------- Blog Slider -------------------*/
    if ($('#blog-slider-1').length > 0) {
        $("#blog-slider-1").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            margin: 30,
            responsive: {
                0: {items: 1},
                1200: {items: 3},
                992: {items: 2},
                568: {items: 2}
            },
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });
    }

    /*------------------- Realated Blog Slider -------------------*/
    if ($('#rel-blog-slider').length > 0) {
        $("#rel-blog-slider").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: false,
            margin: 30,
            responsive: {
                0: {items: 1},
                1024: {items: 2},
                768: {items: 1},
                568: {items: 2}
            }
        });
    }

    /*------------------- Brand Slider -------------------*/
    if ($('#brand-slider-2').length > 0) {
        $("#brand-slider-2").owlCarousel({
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: false,
            margin: 30,
            responsive: {
                0: {items: 1},
                992: {items: 5},
                768: {items: 4},
                568: {items: 3},
                380: {items: 2}
            }
        });
    }

    /*------------------- Related Product Slider -------------------*/
    if ($('#rel-prod-slider').length > 0) {
        $("#rel-prod-slider").owlCarousel({
            dots: false,
            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            margin: 30,
            responsive: {
                0: {items: 1},
                1200: {items: 3},
                992: {items: 2},
                768: {items: 1},
                568: {items: 2}
            },
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });
    }

    /*------------------- Widget Slider -------------------*/
    if ($('#widget-best-seller').length > 0) {
        $("#widget-best-seller").owlCarousel({
            dots: false,
            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 100,
            nav: true,
            margin: 30,
            responsive: {
                0: {items: 1},
                600: {items: 2},
                768: {items: 1}
            },
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });
    }

    //Resize carousels in modal
    if ($('.sync2').length > 0) {
        $(document).on('shown.bs.modal', function () {
            $(this).find('.sync1, .sync2').each(function () {
                $(this).data('owlCarousel') ? $(this).data('owlCarousel').onResize() : null;
            });
        });

        var sync1 = $(".sync1");
        var sync2 = $(".sync2");
        var sliderthumb = $(".single-prod-thumb");
        var homethumb = $(".home-slide-thumb");
        var navSpeedThumbs = 500;

        sliderthumb.owlCarousel({
            rtl: false,
            items: 3,
            //loop: true,
            nav: true,
            margin: 20,
            navSpeed: navSpeedThumbs,
            responsive: {
                992: {items: 3},
                767: {items: 4},
                480: {items: 3},
                320: {items: 2}
            },
            responsiveRefreshRate: 200,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });

        sync1.owlCarousel({
            rtl: false,
            items: 1,
            navSpeed: 1000,
            nav: false,
            onChanged: syncPosition,
            responsiveRefreshRate: 200

        });

        homethumb.owlCarousel({
            rtl: false,
            items: 5,
            nav: true,
            //loop: true,
            navSpeed: navSpeedThumbs,
            responsive: {
                1500: {items: 5},
                1024: {items: 4},
                768: {items: 3},
                600: {items: 4},
                480: {items: 3},
                320: {items: 2,
                    nav: false
                }
            },
            responsiveRefreshRate: 200,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ]
        });
    }
    function syncPosition(el) {
        var current = this._current;
        $(".sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced");
        center(current);
    }

    $(".sync2").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.trigger("to.owl.carousel", [number, 1000]);
        return false;
    });

    function center(num) {

        var sync2visible = sync2.find('.owl-item.active').map(function () {
            return $(this).index();
        });

        if ($.inArray(num, sync2visible) === -1) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("to.owl.carousel", [num - sync2visible.length + 2, navSpeedThumbs, true]);
            } else {
                sync2.trigger("to.owl.carousel", Math.max(0, num - 1));
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("to.owl.carousel", [sync2visible[1], navSpeedThumbs, true]);
        } else if (num === sync2visible[0]) {
            sync2.trigger("to.owl.carousel", [Math.max(0, num - 1), navSpeedThumbs, true]);
        }
    }

// owlCarousel Slider End //

    /*------------------- Subscribe Popup   -------------------*/
    if ($('#subscribe-popups').length > 0) {
        $("#subscribe-popups").subscribeBetter({
            trigger: "onidle", // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
            animation: "flyInDown", // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
            delay: 0, // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
            showOnce: true, // Toggle this to false if you hate your users. :)
            autoClose: false, // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
            scrollableModal: false      //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
        });
    }

    /*------------------- Scroll To Top Animate -------------------*/
    $('#to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /*------------------- Deal Of the Day -------------------*/
    if ($('.deal-cntdwn').length > 0) {
        $('#cntdwn-1').countdown({since: new Date(2015, 12 - 1, 59)});
        $('#cntdwn-2').countdown({since: new Date(2015, 12 - 1, 54)});
        $('#cntdwn-3').countdown({since: new Date(2015, 12 - 1, 58)});
        $('#cntdwn-4').countdown({since: new Date(2015, 12 - 1, 47)});
        $('#cntdwn-5').countdown({since: new Date(2015, 12 - 1, 54)});
        $('#cntdwn-6').countdown({since: new Date(2015, 12 - 1, 58)});
    }


    /*------------------- Counter -------------------*/
    if ($('.count-to').length > 0) {
        $('.count-to').countTo();
    }

    /*------------------- Sidebar Filter Range -------------------*/
    var priceSliderRange = $('#price-range');
    if ($.ui) {
        if ($(priceSliderRange).length) {
            $(priceSliderRange).slider({
                range: true,
                min: 0,
                max: 1000,
                values: [120, 540],
                slide: function (event, ui) {
                    //$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    $("#price-min").html("$" + ui.values[0]);
                    $("#price-max").html("$" + ui.values[1]);
                }
            });
            $("#price-min").html("$" + $("#price-range").slider("values", 0));
            $("#price-max").html("$" + $("#price-range").slider("values", 1));
        }
    }

    // Comingsoon
    // --------------------------------------------------------------------------------------- 
    if ($('.countdown-wrapper').length > 0) {
        if ($().countdown) {
            var newYear = new Date();
            newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
            $('#defaultCountdown').countdown({until: newYear});
        }
    }

    // prettyPhoto
    // ---------------------------------------------------------------------------------------    
    if ($('.caption-link').length > 0) {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'facebook',
            slideshow: 5000,
            autoplay_slideshow: true
        });
    }


    // Contact Map
    // ---------------------------------------------------------------------------------------    

    if (typeof google === 'object' && typeof google.maps === 'object') {
        if ($('#map-canvas2').length) {

            var map;
            var marker;
            var infowindow;
            var mapIWcontent = '' +
                    '' +
                    '<div class="map-info-window">' +
                    '<div class="map-location">' +
                    '<div class="loctn-img">' +
                    '<a class="media-link" href="#">' +
                    '<img class="img-responsive" src="assets/img/logo/logo-black.png" alt=""/>' +
                    '</a>' +
                    '</div>' +
                    '<div class="loctn-info">' +
                    '<h4 class="title-2"> Location </h4>' +
                    '<p> 79 Orchard St,New York <br>NY 10002, USA </p>' +
                    '<p> (0096) 8645 234 438 </p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '';
            var contentString = '' +
                    '' +
                    '<div class="iw-container">' +
                    '<div class="iw-content">' +
                    '' + mapIWcontent +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                    '</div>' +
                    '' +
                    '';
            var image = 'assets/img/logo/logo-black.png'; // marker icon
            google.maps.event.addDomListener(window, 'load', function () {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 10,
                    styles: [{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]},
                        {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]},
                        {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}, {"lightness": 17}]},
                        {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#ffffff"}, {"lightness": 29},
                                {"weight": 0.2}]}, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 18}]},
                        {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#ffffff"}, {"lightness": 16}]},
                        {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]},
                        {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#dedede"}, {"lightness": 21}]},
                        {"elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]},
                        {"elementType": "labels.text.fill", "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]},
                        {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
                        {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]},
                        {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#fefefe"}, {"lightness": 20}]},
                        {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]}],
                    center: new google.maps.LatLng(40.6700, -73.9400) // map coordinates
                };

                map = new google.maps.Map(document.getElementById('map-canvas2'),
                        mapOptions);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400), // marker coordinates
                    map: map,
                    icon: image,
                    title: 'Hello World!'
                });
            });
        }
    }

});


$(window).scroll(function () {
    /*------------------- Sticky Header Starts  -------------------*/
    if ($('#headerstyle').length === 0) {
        if ($(this).scrollTop() > 5) {
            $('.main-header').addClass('is-sticky');
        }
        else {
            $('.main-header').removeClass('is-sticky');
        }
    }

    /*------------------- Scroll To Top Animate -------------------*/
    if ($(this).scrollTop() > 100) {
        $('#to-top').css({bottom: '55px'});
    }
    else {
        $('#to-top').css({bottom: '-150px'});
    }
});



/*------------------- Page Loader Starts  -------------------*/
function changeImage(counter) {
    var images = [
        '<i class="fa fa-fighter-jet"></i>',
        '<i class="fa fa-gamepad"></i>',
        '<i class="fa fa-headphones"></i>',
        '<i class="fa fa-cubes"></i>',
        '<i class="fa fa-paw"></i>',
        '<i class="fa fa-rocket"></i>',
        '<i class="fa fa-ticket"></i>',
        '<i class="fa fa-pie-chart"></i>',
        '<i class="fa fa-codepen"></i>'
    ];

    $(".loader .image").html("" + images[counter] + "");
}

function loading() {
    var num = 0;

    for (var i = 0; i <= 100; i++) {
        setTimeout(function () {
            $('.loader span').html(num + '%');

            if (num === 100) {
                loading();
            }
            num++;
        }, i * 500);
    }
    ;

}
/*------------------- Page Loader Ends  -------------------*/
