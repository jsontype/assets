(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
     //>> Mobile Menu Js Start <<//
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

     $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "1920",
        meanExpand: ['<i class="far fa-plus"></i>'],
      });
      
   

       //>> Sidebar Toggle Js Start <<//
      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });

   
       //>> Body Overlay Js Start <<//
      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  
  
      //>> Sticky Header Js Start <<//
  
      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
      // Cursor movement
      const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
      
      //>> Video Popup Start <<//
      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".img-popup2").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  
      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      //>> Counterup Start <<//
      $(".gt-count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      //>> Wow Animation Start <<//
      new WOW().init();
  
      //>> Nice Select Start <<//
        if ($('.single-select').length) {
          $('.single-select').niceSelect();
      }

       /* ================================
       Parallaxie Js Start
    ================================ */

    if ($('.parallaxie').length && $(window).width() > 991) {
        if ($(window).width() > 768) {
            $('.parallaxie').parallaxie({
                speed: 0.55,
                offset: 0,
            });
        }
    }

    //>> Game Slider Start <<//
    if($('.game-slider').length > 0) {
    const gameSlider = new Swiper(".game-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
            navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
        
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2.4,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }

    //>> Game Slider Start <<//
    if($('.game-slider-2').length > 0) {
        const gameSlider2 = new Swiper(".game-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

                pagination: {
                el: ".game-swiper-pagination",
                type: "progressbar"
            },

                navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            
            breakpoints: {
                1199: { slidesPerView: 3.9 },
                991: { slidesPerView: 2.4 },
                767: { slidesPerView: 2 },
                575: { slidesPerView: 1.4 },
                0: { slidesPerView: 1.3 },
            },
            
        });
    }

    //>> Gt Popular Slider Start <<//
     if($('.gt-popular-slider').length > 0) {
      const gtPopularSlider = new Swiper(".gt-popular-slider", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },

             pagination: {
                el: ".game-swiper-pagination",
                type: "progressbar"
            },
            
            

                navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            
         
          breakpoints: {
              1199: {
                  slidesPerView: 3,
              },
              991: {
                  slidesPerView: 2,
              },
              767: {
                  slidesPerView: 1,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
      }

    //>>  Testimonial Slider Start <<//
    if ($('.tetsimonial-slider-2').length > 0) {
    const tetsimonialSlider2 = new Swiper(".tetsimonial-slider-2", {
        spaceBetween: 30,
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },

        on: {
            init: function () {
                let total = this.slides.length - this.loopedSlides * 2;
                document.querySelector(".testimonial-pagination .total").textContent =
                    String(total).padStart(2, "0");
                document.querySelector(".testimonial-pagination .current").textContent =
                    String(this.realIndex + 1).padStart(2, "0");

                document.querySelector(".testimonial-pagination .current").classList.add("active");
            },
            slideChange: function () {
                let currentEl = document.querySelector(".testimonial-pagination .current");
                currentEl.textContent = String(this.realIndex + 1).padStart(2, "0");

                currentEl.classList.add("active");
            }
        }
    });
    }

    if($('.gt-testimonial-slider-4').length > 0) {
      const gtTestimonialSlider4 = new Swiper(".gt-testimonial-slider-4", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
        
          breakpoints: {
              1199: {
                  slidesPerView: 3,
              },
              991: {
                  slidesPerView: 2,
              },
              767: {
                  slidesPerView: 1,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

     
 
    //>>  Countdown Time Start <<//
    if ($("#day").length) { 
    
    let targetDate = new Date("2025-12-08T00:00:00").getTime();

    const countdownInterval = setInterval(function () {
        let currentDate = new Date().getTime();
        let remainingTime = targetDate - currentDate;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            $(".gt-coming-soon-time").text("Countdown has ended!");
        } else {
            let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            $("#day").text(days.toString().padStart(2, "0"));
            $("#hour").text(hours.toString().padStart(2, "0"));
            $("#min").text(minutes.toString().padStart(2, "0"));
            $("#sec").text(seconds.toString().padStart(2, "0"));
        }
    }, 1000);
}

    //>>  Brand Slider Start <<//
    if($('.brand-slider').length > 0) {
    const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
            navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
        
        breakpoints: {
            1399: {
                slidesPerView: 7,
            },
            1199: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 5,
            },
            767: {
                slidesPerView: 4,
            },
            575: {
                slidesPerView: 3,
            },
            400: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 2,
            },
        },
    });
    }

    //>>  Brand Slider Start <<//
    if($('.brand-slider-2').length > 0) {
    const BrandSlider2 = new Swiper(".brand-slider-2", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
            navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
        
        breakpoints: {
            1399: {
                slidesPerView: 7,
            },
            1199: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 5,
            },
            767: {
                slidesPerView: 4,
            },
            575: {
                slidesPerView: 3,
            },
            400: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 2,
            },
        },
    });
    }

    if($('.brand-slider-4').length > 0) {
    const BrandSlider4 = new Swiper(".brand-slider-4", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        
        breakpoints: {
            1199: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 5,
            },
            767: {
                slidesPerView: 4,
            },
            575: {
                slidesPerView: 3,
            },
            400: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 2,
            },
        },
    });
    }

    //>>  Team Slider Start <<//
    if($('.team-slider').length > 0) {
    const teamSlider = new Swiper(".team-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
            navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
        
        breakpoints: {
            1399: {
                slidesPerView: 5,
            },
             1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.3,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }

    
    if($('.team-slider-2').length > 0) {
        const teamSlider2 = new Swiper(".team-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            // centeredSlides: true,
            // autoplay: {
            //     delay: 2000,
            //     disableOnInteraction: false,
            // },
             navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1.5,
                },
                400: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

      if($('.line-slider').length > 0) {
            const lineSlider = new Swiper(".line-slider", {
                slidesPerView: 'auto',
                spaceBetween: 300,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 3000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
    }

    if($('.line-slider2').length > 0) {
        const lineSlider2 = new Swiper(".line-slider2", {
            slidesPerView: 'auto',
            spaceBetween: 300,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 3000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }

    //>>  Team Slider Start <<//
    if($('.news-slider').length > 0) {
    const newsSlider = new Swiper(".news-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
            navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
        
        breakpoints: {
            1399: {
                slidesPerView: 4.6,
            },
             1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.3,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }


     //>> Card Slider Start <<//
      var CardSliders = [];

    $('.card-slider').each(function (index, element) {
        var swiper = new Swiper(element, {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: { slidesPerView: 5 },
                1199: { slidesPerView: 3 },
                991: { slidesPerView: 3 },
                767: { slidesPerView: 2 },
                575: { slidesPerView: 1 },
                0: { slidesPerView: 1.2 },
            },
        });
        CardSliders.push(swiper);
    });

    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
        CardSliders.forEach(function (slider) {
            slider.update();
            slider.autoplay.start();
        });
    });

      //>> Match Slider Start <<//
      if($('.match-slider').length > 0) {
        const MatchSlider = new Swiper(".match-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            // centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                 el: ".dot",
                 clickable: true,
             },
          
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

           //>> Testimonial Slider Start <<//
       if($('.testimonial-slider-3').length > 0) {
        const TestimonialSlider3 = new Swiper(".testimonial-slider-3", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
         
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       //>>  Testimonial Slider Start <<//
    //>>  Testimonial Slider Start <<//
    if ($('.tetsimonial-slider-2').length > 0) {
    const tetsimonialSlider2 = new Swiper(".tetsimonial-slider-2", {
        spaceBetween: 30,
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },

        on: {
            init: function () {
                let total = this.slides.length - this.loopedSlides * 2;
                document.querySelector(".testimonial-pagination .total").textContent =
                    String(total).padStart(2, "0");
                document.querySelector(".testimonial-pagination .current").textContent =
                    String(this.realIndex + 1).padStart(2, "0");

                document.querySelector(".testimonial-pagination .current").classList.add("active");
            },
            slideChange: function () {
                let currentEl = document.querySelector(".testimonial-pagination .current");
                currentEl.textContent = String(this.realIndex + 1).padStart(2, "0");

                currentEl.classList.add("active");
            }
        }
    });
    }
      
//>> Player Slider Start <<//
      if($('.player-slider').length > 0) {
        const PlayerSlider = new Swiper(".player-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            // centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                 1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

    //>> Gt Instagram Slider Start <<//
    if($('.instagram-slider').length > 0) {
      const InstagramSlider = new Swiper(".instagram-slider", {
          spaceBetween: 0,
          speed: 1800,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },

          breakpoints: {
              1399: {
                  slidesPerView: 7,
              },
              1199: {
                  slidesPerView: 6,
              },
              991: {
                  slidesPerView: 5,
              },
              767: {
                  slidesPerView: 4,
              },
              575: {
                  slidesPerView: 3,
              },
              475: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

        //>> Gt Brand Slider Start <<//
      if($('.brand-slider').length > 0) {
        const BrandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 6,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
      }

      if($('.gt-team-slider-3').length > 0) {
      const gtTeamSlider3 = new Swiper(".gt-team-slider-3", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          // centeredSlides: true,
          slidesPerView: 3,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".dot-number",
            clickable: true,
            renderBullet: function(index, className) {
                const dotContent = document.querySelectorAll(
                    ".dot-number .dot-num"
                );
                return `
            <span class="${className}">
                ${dotContent[index]?.outerHTML || ""}
            </span>
        `;
            },
        },
          breakpoints: {
              1399: {
                slidesPerView: 6,
            },
              1199: {
                  slidesPerView: 5,
              },
              991: {
                  slidesPerView: 3,
              },
              767: {
                  slidesPerView: 2,
              },
              575: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

     //>> Gt-Testimonial-slider Slider Start <<//
    if ($('.gt-testimonial-slider').length > 0) {
      const gtTestimonialSliders = new Swiper('.gt-testimonial-slider', {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        effect: 'cards',
        cardsEffect: {
          perSlideOffset: 8,
          perSlideRotate: 2,
          slideShadows: false,
        },
        grabCursor: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.dot',
          clickable: true,
        },
      });
    }

    //>> Gt-Gallery Slider Start <<//
    if($('.gt-gallery-slider').length > 0) {
        const gtGallerySlider = new Swiper(".gt-gallery-slider", {
            spaceBetween: 30,
            speed: 1800,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                475: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

    //>> Image Slider Start <<//
         if($('.hero-image-slider').length > 0) {
            const heroImageSlider = new Swiper(".hero-image-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                pagination: {
                    el: ".dot-number",
                    clickable: true,
                    renderBullet: function(index, className) {
                        const dotContent = document.querySelectorAll(
                            ".dot-number .dot-num"
                        );
                        return `
                    <span class="${className}">
                        ${dotContent[index]?.outerHTML || ""}
                    </span>
                `;
                    },
                },
                autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            });
        }

       var swiper = new Swiper(".hero-slider", {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
        pagination: {
            el: ".dot-number",
            clickable: true,
            renderBullet: function(index, className) {
                const dotContent = document.querySelectorAll(
                    ".dot-number .dot-num"
                );
                return `
            <span class="${className}">
                ${dotContent[index]?.outerHTML || ""}
            </span>
        `;
            },
        },
        on: {
            init: function () {
                // Initial active animation
                let activeSlide = document.querySelector(".swiper-slide-active .wave-text");
                if (activeSlide) {
                    activeSlide.classList.add("active");
                }
            },
            slideChangeTransitionStart: function () {
                document.querySelectorAll(".wave-text").forEach(el => {
                    el.classList.remove("active");
                });
            },
            slideChangeTransitionEnd: function () {
                let activeSlide = document.querySelector(".swiper-slide-active .wave-text");
                if (activeSlide) {
                    activeSlide.classList.add("active");
                }
            }
        }
    });


    
   let lastTime = 0;
    const throttleDelay = 16; 

    window.addEventListener('mousemove', e => {
      const now = Date.now();
      // This line will now work correctly
      if (now - lastTime < throttleDelay) return; 
      lastTime = now;

      const smoke = document.createElement('div');
      smoke.className = 'smoke';

      const randomRotation = Math.random() * 60 - 30; 
      smoke.style.left = e.pageX - 20 + 'px'; 
      smoke.style.top = e.pageY - 20 + 'px';
      smoke.style.transform = `rotate(${randomRotation}deg)`;

      document.body.appendChild(smoke);

      smoke.addEventListener('animationend', () => {
        smoke.remove();
      });
    });

    
     // GSAP & ScrollTrigger Register
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector("#testimonials")) {

    const testimonialCards = gsap.utils.toArray(".testimonial-sticky-hover");

    gsap.set(testimonialCards, { y: 150, opacity: 0, rotate: 0 });

    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: "#testimonials",
        start: "top top",
        end: () => `+=${testimonialCards.length * 1150}vh`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        markers: false, // dev test করলে true রাখতে পারো
        }
    });

    testimonialCards.forEach((card, i) => {
        let rotation = 0;

        // Index অনুযায়ী rotation control
        if (i === 0) rotation = -5;
        if (i === 1) rotation = 7;
        if (i === 2) rotation = 0;

        tl.to(card, {
        opacity: 1,
        y: i * 40,
        rotate: rotation,
        ease: "power3.out",
        duration: 0.6,
        }, i * 0.5); // stagger delay
    });

    }
    
    
    }); // End Document Ready Function

     

     //>> MouseCursor Start <<//
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
                  (window.onmousemove = function(s) {
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
                          "button, a, .cursor-pointer",
                          function() {
                              e.classList.add("cursor-hover"),
                                  t.classList.add("cursor-hover");
                          }
                      ),
                      $("body").on(
                          "mouseleave",
                          "button, a, .cursor-pointer",
                          function() {
                              ($(this).is("a", "button") &&
                                  $(this).closest(".cursor-pointer").length) ||
                              (e.classList.remove("cursor-hover"),
                                  t.classList.remove("cursor-hover"));
                          }
                      ),
                      (e.style.visibility = "visible"),
                      (t.style.visibility = "visible");
              }
          }
      }
      itCursor();
    }

     //>> Search Start <<//
     if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $("body").toggleClass("locked");
        });
    }
    
// Show or hide the back-to-top button based on scroll position
 /* ================================
     Back To Top Button Js Start
    ================================ */

  // Function to toggle back-to-top button visibility
    function toggleBackTop() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $("#gt-back-top").addClass("show");
        } else {
            $("#gt-back-top").removeClass("show");
        }
    }

    // On scroll
    $windowOn.on('scroll', function() {
        toggleBackTop();
    });

    // On document ready, force hide the button
    $(document).ready(function() {
        $("#gt-back-top").removeClass("show");
    });

    // On click
    $documentOn.on('click', '#gt-back-top', function(e) {
        e.preventDefault(); // default scroll বন্ধ করবে
        $('html, body').stop().animate({ scrollTop: 0 }, 800, 'swing');
    });
    // Create a throttled mousemove to reduce performance load (optional)
    
   

   
  
    document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector(".gt-game-case-slider");
    if (sliderContainer) {
        const slides = sliderContainer.querySelectorAll(".swiper-slide");
        const progressLine = document.getElementById("progressLine");
        const dots = document.querySelectorAll(".dots-container .dot");

        if (!progressLine || dots.length === 0 || slides.length === 0) {
            console.warn("Required elements for Swiper setup are missing (progress line or dots).");
            return;
        }

        const totalSlides = slides.length;

        const swiper = new Swiper(sliderContainer, {
            speed: 1300,
            loop: true,
            direction: "vertical",
            mousewheel: true,
            // autoplay: {
            //   delay: 2000,
            //   disableOnInteraction: false,
            // },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            on: {
                slideChangeTransitionStart: function() {
                    const activeDotIndex = this.realIndex;
                    const widthPercentage = ((activeDotIndex + 1) / totalSlides) * 100;

                    progressLine.style.transition = `width ${this.params.speed}ms linear`;
                    progressLine.style.width = `${widthPercentage}%`;

                    dots.forEach(dot => dot.classList.remove("active"));

                    if (dots[activeDotIndex]) {
                        dots[activeDotIndex].classList.add("active");
                    }
                },

                loopFix: function() {
                    if (this.realIndex === 0 && this.previousRealIndex === totalSlides - 1) {
                        progressLine.style.transition = "none";
                        progressLine.style.width = "0%";

                        setTimeout(() => {
                            progressLine.style.transition = `width ${swiper.params.speed}ms linear`;
                            progressLine.style.width = `${(1 / totalSlides) * 100}%`;
                        }, 50); // 50ms delay
                    }
                },
            },
        });

        if (dots.length > 0) {
            dots[0].classList.add("active");
            progressLine.style.width = `${(1 / totalSlides) * 100}%`;
        }
    }
});

    
   //>> Gt hero Slider Start <<//
    window.onload = function () {
        let current = 1; // Start with the second slide as active
    
        function updateSlides() {
          const slides = document.querySelectorAll('.slide');
    
          slides.forEach((slide) => {
            slide.classList.remove('active', 'small');
          });
    
          if (slides[current - 1]) slides[current - 1].classList.add('small');
          if (slides[current]) slides[current].classList.add('active');
          if (slides[current + 1]) slides[current + 1].classList.add('small');
        }
    
        function goToNextSlide() {
          const container = document.querySelector('.slider-container');
          if (!container || container.children.length === 0) return;
    
          const first = container.firstElementChild;
          container.appendChild(first.cloneNode(true));
          container.removeChild(first);
    
          current = 1;
          updateSlides();
        }
    
        function goToPrevSlide() {
          const container = document.querySelector('.slider-container');
          if (!container || container.children.length === 0) return;
    
          const last = container.lastElementChild;
          container.insertBefore(last.cloneNode(true), container.firstElementChild);
          container.removeChild(last);
    
          current = 1;
          updateSlides();
        }
    
        // Initial update
        updateSlides();
    
        // Auto slide every 3 seconds
        setInterval(goToNextSlide, 3000);
    
        // Add click events to navigation buttons
        const nextBtn = document.querySelector('.array-next');
        const prevBtn = document.querySelector('.array-prev');
    
        if (nextBtn) nextBtn.addEventListener('click', goToNextSlide);
        if (prevBtn) prevBtn.addEventListener('click', goToPrevSlide);
    };
    function loader() {
        $windowOn.on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(200).fadeOut();
        });
    }
    
    loader();
   
  
  })(jQuery); // End jQuery