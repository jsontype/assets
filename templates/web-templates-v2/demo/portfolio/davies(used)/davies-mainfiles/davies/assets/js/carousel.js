$(window).on("load", function () {
    $(".tf-swiper").each(function (index, element) {
        var $this = $(element);
        var laptop = $this.data("laptop") || 1;
        var preview = $this.data("preview") || 1;
        var tablet = $this.data("tablet") || 1;
        var mobile = $this.data("mobile") || 1;
        var mobileSm = $this.data("mobile-sm") !== undefined ? $this.data("mobile-sm") : mobile;

        // Spacing
        var spacing = $this.data("space");
        var spacingMd = $this.data("space-md");
        var spacingLg = $this.data("space-lg");
        var spacingXxl = $this.data("space-xxl");

        if (spacing !== undefined && spacingMd === undefined && spacingLg === undefined) {
            spacingMd = spacing;
            spacingLg = spacing;
        } else if (spacing === undefined && spacingMd !== undefined && spacingLg === undefined) {
            spacing = 0;
            spacingLg = spacingMd;
        }
        spacing = spacing || 0;
        spacingMd = spacingMd || 0;
        spacingLg = spacingLg || 0;
        spacingXxl = spacingXxl || 1;

        var perGroup = $this.data("pagination") || 1;
        var perGroupSm = $this.data("pagination-sm") || 1;
        var perGroupMd = $this.data("pagination-md") || 1;
        var perGroupLg = $this.data("pagination-lg") || 1;
        var gridRows = $this.data("grid") || 1;
        var cursorType = $this.data("cursor") ?? false;
        var loop = $this.data("loop") ?? false;
        var loopMd = $this.data("loop-md") ?? false;
        var effect = $this.data("effect") || "slide";
        var atPlay = $this.data("auto"); // True || False
        var speed = $this.data("speed") || 800;
        var delay = $this.data("delay") || 1000;
        var direction = $this.data("direction") || "horizontal";
        var centered = $this.data("center") ?? false;
        var init = $this.data("init") || 0;
        var clickSlide = $this.data("click-slide") ?? false;

        var swiperT = new Swiper($this[0], {
            direction: direction,
            speed: speed,
            centeredSlides: centered,
            slidesPerView: mobile,
            spaceBetween: spacing,
            slidesPerGroup: perGroup,
            grabCursor: cursorType,
            loop: loop,
            effect: effect,
            initialSlide: init,
            slideToClickedSlide: clickSlide,
            autoplay: atPlay
                ? {
                      delay: delay,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                  }
                : false,
            grid: {
                rows: gridRows,
                fill: "row",
            },
            pagination: {
                el: [$this.find(".tf-sw-pagination")[0], $this.closest(".tf-pag-swiper").find(".tf-sw-pagination")[0]],
                clickable: true,
            },
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: [
                    $this.closest(".tf-btn-swiper-main").find(".nav-next-swiper")[0],
                    $this.closest(".container").find(".group-btn-slider .nav-next-swiper")[0],
                    $this.closest(".tf-btn-swiper-main").find(".nav-next-swiper-2")[0],
                ],
                prevEl: [
                    $this.closest(".tf-btn-swiper-main").find(".nav-prev-swiper")[0],
                    $this.closest(".container").find(".group-btn-slider .nav-prev-swiper")[0],
                    $this.closest(".tf-btn-swiper-main").find(".nav-prev-swiper-2")[0],
                ],
            },
            breakpoints: {
                575: {
                    slidesPerView: mobileSm,
                    spaceBetween: spacing,
                    slidesPerGroup: perGroupSm,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
                768: {
                    slidesPerView: tablet,
                    spaceBetween: spacingMd,
                    slidesPerGroup: perGroupMd,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
                1200: {
                    slidesPerView: preview,
                    spaceBetween: spacingLg,
                    slidesPerGroup: perGroupLg,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
                1600: {
                    slidesPerView: laptop === 1 ? preview : laptop,
                    spaceBetween: spacingXxl === 1 ? spacingLg : spacingXxl,
                    slidesPerGroup: perGroupLg,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
            },
        });
        $(".swiper-button")
            .on("mouseenter", function () {
                var slideIndex = $(this).data("slide");
                swiperT.slideTo(slideIndex, 500, false);

                $(".tf-swiper .card_product--V01.style_2").removeClass("active");
                $(".tf-swiper .card_product--V01.style_2").eq(slideIndex).addClass("active");
            })
            .on("mouseleave", function () {
                $(".tf-swiper .card_product--V01.style_2").removeClass("active");
            })
            .on("click", function () {
                var slideIndex = $(this).data("slide");
                $(".tf-swiper .card_product--V01.style_2").eq(slideIndex).toggleClass("clicked");
            });
    });
});

if ($(".swiper-process").length > 0) {
    let swiper = null;

    function initSwiper() {
        if (window.innerWidth < 1200 && !swiper) {
            swiper = new Swiper(".swiper-process", {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".tf-pag-nav",
                    clickable: true,
                },
                breakpoints: {
                    575: {
                        slidesPerView: 2,
                    },
                },
            });
        } else if (window.innerWidth >= 1200 && swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }

    initSwiper();

    $(window).on("resize", function () {
        initSwiper();
    });
}

if ($(".slider-service-wrap").length > 0) {
    const contentThumbSlider = new Swiper(".swiper-service-thumb", {
        slidesPerView: 1,
        grabCursor: true,
        speed: 800,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".slider-service-wrap .nav-next-swiper",
        },
        on: {
            slideChange: function () {
                const activeIndex = this.realIndex;
                $(".img-thumbs").removeClass("active");
                $(".img-thumbs").eq(activeIndex).addClass("active");
            },
        },
    });
    $(".swiper-service-thumb").on("click", ".action", function (e) {
        e.preventDefault();

        let currentIndex = contentThumbSlider.realIndex;
        let total = contentThumbSlider.slides.length;

        if (currentIndex < total - 1) {
            contentThumbSlider.slideNext();
        } else {
            contentThumbSlider.slideTo(total - 2);
        }
    });
}

/*-- Slick Slide --*/
window.onload = function () {
    if (window.jQuery) {
        jQuery.event.special.touchstart = {
            setup: function (_, ns, handle) {
                this.addEventListener("touchstart", handle, { passive: true });
            },
        };
        jQuery.event.special.touchmove = {
            setup: function (_, ns, handle) {
                this.addEventListener("touchmove", handle, { passive: true });
            },
        };
    }

    if (document.querySelector(".section-selected-work")) {
        const $for = $(".slick-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".slick-nav",
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        const $nav = $(".slick-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".slick-for",
            vertical: true,
            verticalSwiping: true,
            centerMode: true,
            arrows: false,
            dots: false,
            infinite: true,
            focusOnSelect: true,
        });

        $(".section-selected-work .nav-prev-swiper").on("click", function () {
            $for.slick("slickPrev");
        });
        $(".section-selected-work .nav-next-swiper").on("click", function () {
            $for.slick("slickNext");
        });

        const $tags = $(".work-tag li");
        $for.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            $tags.removeClass("active");
            $tags.eq(nextSlide).addClass("active");

            const $award = $(".image-award");
            if ((nextSlide + 1) % 3 === 0) {
                $award.addClass("active");
            } else {
                $award.removeClass("active");
            }
        });

        $tags.eq(0).addClass("active");
        $nav.trigger("afterChange", [$nav.slick("getSlick"), 0]);
    }
};
