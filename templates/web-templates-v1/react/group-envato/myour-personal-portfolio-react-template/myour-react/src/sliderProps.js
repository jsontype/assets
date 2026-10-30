import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const sliderProps = {
  price: {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".price_next",
      prevEl: ".price_prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
  experience: {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".experience_next",
      prevEl: ".experience_prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
  education: {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".education_next",
      prevEl: ".education_prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
  testimonials: {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".testimonials_next",
      prevEl: ".testimonials_prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
  client: {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".client_next",
      prevEl: ".client_prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  },
  heroSlider: {
    loop: true,
    direction: "vertical",
    effect: "creative",
    autoplay: {
      delay: 6000,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  },
};
