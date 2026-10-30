//
//
//

function imgSwiper() {
    new Swiper("#img_swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        rewind: true,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
        },
    });
};
imgSwiper();