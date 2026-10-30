/*=== Javascript function indexing hear===========

  01. stickyHeader
  02. smoothScroll
  03. offcanvasActive
  04. searchModalActive
  05. swiperActive
  06. splitText
  07. horizontalText
  08. counterUp
  09. magnificPopup
  10. videoActivation
  11. mesonaryTab
  12. preloader
  13. backToTopInit

==================================================*/

(function ($) {
  "use strict";

  const rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      rtsJs.stickyHeader();
      rtsJs.smoothScroll();
      rtsJs.offcanvasActive();
      rtsJs.searchModalActive();
      rtsJs.swiperActive();
      rtsJs.splitText();
      rtsJs.textScrollAnim();
      rtsJs.counterUp();
      rtsJs.magnificPopup();
      rtsJs.videoActivation();
      rtsJs.mesonaryTab();
      rtsJs.preloader();
      rtsJs.backToTopInit();
      rtsJs.rtlToggle();
    },
    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".rts-sticky-header").addClass("sticky");
        } else {
          $(".rts-sticky-header").removeClass("sticky");
        }
      });
    },
    smoothScroll: function (e) {
      var $onepage = $(".onepage");

      if ($onepage.length === 0) {
        return null;
      }
      $onepage.find('a[href^="#"]').on("click", function (event) {
        var target = $($.attr(this, "href"));

        if (target.length) {
          event.preventDefault();
          var offset = target.offset().top;
          $("html, body").animate({ scrollTop: offset }, 500);
        }
      });
    },
    offcanvasActive: function () {
      $(".menu-toggle").on("click", function (e) {
        e.preventDefault();
        $(".rts-offcanvas-area, .rts-offcanvas-overlay").addClass("active");
      });

      $(".offcanvas-close-btn, .rts-offcanvas-overlay").on(
        "click",
        function () {
          $(".rts-offcanvas-area, .rts-offcanvas-overlay").removeClass(
            "active"
          );
        }
      );

      var $offcanvasNav = $(".rts-offcanvas-menu nav");

      if (!$offcanvasNav.find("ul").length) {
        $(".main-nav-area > ul").clone(true).appendTo($offcanvasNav);
      }

      // Dropdown toggle
      $offcanvasNav.find("li.has-dropdown > a").on("click", function (e) {
        e.preventDefault();

        var $parent = $(this).parent();
        var $submenu = $parent.children(".submenu");

        $parent
          .siblings(".has-dropdown.active")
          .removeClass("active")
          .children(".submenu")
          .slideUp(300);

        if ($parent.hasClass("active")) {
          $parent.removeClass("active");
          $submenu.slideUp(300);
        } else {
          $parent.addClass("active");
          $submenu.slideDown(300);
        }
      });

      // Close offcanvas on clicking any menu link that navigates
      $offcanvasNav.find("a").on("click", function () {
        var href = $(this).attr("href");
        if (
          href &&
          href !== "#" &&
          !$(this).parent().hasClass("has-dropdown")
        ) {
          $(".rts-offcanvas-area, .rts-offcanvas-overlay").removeClass(
            "active"
          );
        }
      });
    },
    searchModalActive: function () {
      $(document).on("click", ".search-icon", function (e) {
        e.preventDefault();
        $(".rts-search-modal").addClass("active");
        $(".rts-offcanvas-overlay").addClass("active");
      });

      $(document).on("click", ".rts-search-modal .close-btn", function (e) {
        e.preventDefault();
        $(".rts-search-modal").removeClass("active");
        $(".rts-offcanvas-overlay").removeClass("active");
      });

      $(document).on("click", ".rts-offcanvas-overlay", function () {
        $(".rts-search-modal").removeClass("active");
        $(this).removeClass("active");
      });
    },
    swiperActive: function (e) {
      $(document).ready(function () {
        var swiper = new Swiper(".banner-slider-active", {
          slidesPerView: 1,
          direction: "vertical",
          loop: true,
          pagination: {
            el: ".rts-banner-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '">' +
                ("0" + (index + 1)) +
                "</span>"
              );
            },
          },
          speed: 2000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: true,
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiperh2_banner", {
          slidesPerView: 1,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          effect: "fade",
          navigation: {
            nextEl: ".swiper-banner-next",
            prevEl: ".swiper-banner-prev",
          },
          autoplay: {
            delay: 4000,
          },
        });
      });
      $(document).ready(function () {
        var bannerSlider = new Swiper(".rts-banner-slider-three", {
          slidesPerView: 1,
          direction: "vertical",
          spaceBetween: 0,
          loop: true,
          speed: 2500,
          autoplay: {
            delay: 4000,
            disableOnInteraction: true,
          },
          navigation: {
            nextEl: ".swiper-banner-next",
            prevEl: ".swiper-banner-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".rts-brand-slider", {
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            1280: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".about-content-slide", {
          slidesPerView: 1,
          loop: true,
          speed: 1500,
          navigation: {
            nextEl: ".rts-about-btn-next",
            prevEl: ".rts-about-btn-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".rts-project-active", {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          speed: 1500,
          navigation: {
            nextEl: ".rts-project-next",
            prevEl: ".rts-project-prev",
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".rts-testimonial-active", {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          speed: 1500,
          navigation: {
            nextEl: ".rts-testimonial-next",
            prevEl: ".rts-testimonial-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".rts-service-active", {
          slidesPerView: 4,
          spaceBetween: 24,
          loop: true,
          speed: 1500,
          pagination: {
            el: ".rts-service-pagination",
            clickable: true,
          },

          navigation: {
            nextEl: ".rts-service-next",
            prevEl: ".rts-service-prev",
          },
          breakpoints: {
            991: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          },
        });
      });
    },
    splitText: function (e) {
      if ($(".rts-slide-anim").length) {
        let animatedTextElements = document.querySelectorAll(".rts-slide-anim");

        animatedTextElements.forEach((element) => {
          if (element.animation) {
            element.animation.progress(1).kill();
            element.split.revert();
          }

          element.split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
          gsap.set(element, { perspective: 400 });

          gsap.set(element.split.chars, {
            opacity: 0,
            x: "50",
          });

          element.animation = gsap.to(element.split.chars, {
            scrollTrigger: { trigger: element, start: "top 95%" },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: 0.02,
          });
        });
      }
    },
    textScrollAnim: function () {
      gsap.registerPlugin(ScrollTrigger);

      const headings = document.querySelectorAll(".rts-horizontal-anim");
      if (!headings.length) return;

      const DRIFT_FACTOR = 0.05;

      headings.forEach((heading) => {
        const container = heading.parentElement;
        let st;

        function init() {
          if (st) st.kill();

          const containerWidth = container.offsetWidth;
          const textWidth = heading.scrollWidth;

          if (textWidth <= containerWidth) return;

          const maxMove = (textWidth - containerWidth) * DRIFT_FACTOR;

          st = ScrollTrigger.create({
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(heading, {
                x: -maxMove * self.progress,
              });
            },
          });
        }

        init();
        window.addEventListener("resize", init);
      });
    },
    counterUp: function (e) {
      if ($(".counter").length) {
        $(".counter").counterUp({
          delay: 10,
          time: 1000,
        });
      }
    },
    magnificPopup: function () {
      $(document).ready(function () {
        $(".gallery-image").magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
          callbacks: {
            beforeOpen: function () {
              $(".rts-offcanvas-area, .rts-offcanvas-overlay").removeClass(
                "active"
              );
            },
            close: function () {
              $(".rts-offcanvas-area, .rts-offcanvas-overlay").removeClass(
                "active"
              );
            },
          },
        });
      });
    },
    videoActivation: function (e) {
      $(document).ready(function () {
        $(".popup-youtube, .popup-video").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      });
    },
    mesonaryTab: function () {
      $(window).on("load", function () {
        var isotope = $(".main-isotop");

        if (isotope.length) {
          var iso = new Isotope(".filter", {
            itemSelector: ".element-item",
            layoutMode: "fitRows",
            fitRows: {
              equalheight: true,
            },
          });

          // filter functions
          var filterFns = {
            // show if name ends with -ium
            ium: function (itemElem) {
              var name = itemElem.querySelector(".name").textContent;
              return name.match(/ium$/);
            },
          };

          // bind filter button click
          var filtersElem = document.querySelector(".filters-button-group");
          filtersElem.addEventListener("click", function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, "button")) {
              return;
            }
            var filterValue = event.target.getAttribute("data-filter");
            // use matching filter function
            filterValue = filterFns[filterValue] || filterValue;
            iso.arrange({ filter: filterValue });
          });

          // change is-checked class on buttons
          var buttonGroups = document.querySelectorAll(".button-group");
          for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
          }
          function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener("click", function (event) {
              // only work with buttons
              if (!matchesSelector(event.target, "button")) {
                return;
              }
              buttonGroup
                .querySelector(".is-checked")
                .classList.remove("is-checked");
              event.target.classList.add("is-checked");
            });
          }
        }

        if ($(".grid-masonary").length) {
          // image loaded portfolio init
          $(".grid-masonary").imagesLoaded(function () {
            $(".portfolio-filter").on("click", "button", function () {
              var filterValue = $(this).attr("data-filter");
              $grid.isotope({
                filter: filterValue,
              });
            });
            var $grid = $(".grid-masonary").isotope({
              itemSelector: ".grid-item-p",
              percentPosition: true,
              masonry: {
                columnWidth: ".grid-item-p",
              },
            });
          });
        }

        // portfolio Filter
        $(".portfolio-filter button").on("click", function (event) {
          $(this).siblings(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
          event.preventDefault();
        });
      });
    },
    preloader: function () {
      window.addEventListener("load", function () {
        document.querySelector("body").classList.add("loaded");
      });
    },
    backToTopInit: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $(".rts-back-to-top").addClass("active");
        } else {
          $(".rts-back-to-top").removeClass("active");
        }
      });
      $(".rts-back-to-top").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1500);
      });
    },
    rtlToggle: function () {
      $(document).ready(function () {
        // Retrieve the saved direction from localStorage
        const savedDir = localStorage.getItem("pageDirection") || "ltr"; // Default to "ltr"
        $("body").attr("dir", savedDir);

        // Update button visibility based on saved direction
        if (savedDir === "rtl") {
          $(".rtl").removeClass("show");
          $(".ltr").addClass("show");
        } else {
          $(".rtl").addClass("show");
          $(".ltr").removeClass("show");
        }

        // Toggle direction and save state on button click
        $(".rtl-ltr-switcher-btn").on("click", function () {
          const currentDir = $("body").attr("dir");
          const newDir = currentDir === "rtl" ? "ltr" : "rtl";

          // Update body direction
          $("body").attr("dir", newDir);

          // Toggle button visibility
          $(".rtl").toggleClass("show");
          $(".ltr").toggleClass("show");

          // Save the new direction in localStorage
          localStorage.setItem("pageDirection", newDir);
        });
      });
    }
  };

  rtsJs.m();

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-bg-src]").forEach(function (el) {
      const bg = el.getAttribute("data-bg-src");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
        el.style.backgroundRepeat = "no-repeat";
      }
    });
  });
})(jQuery, window);
