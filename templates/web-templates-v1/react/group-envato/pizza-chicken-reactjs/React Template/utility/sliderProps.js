export const sliderProps = {
  testimonialsActive: {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  foodCategoryActive: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
  },
  pizzaActive: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  whyChooseCarousel: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
  },
  testimonialsTwoCarousel: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    fade: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  },
  clientActive: {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  },
  fcTwoActive: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  testimonialsFiveAuthors: {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    fade: false,
    centerMode: true,
    centerPadding: "0",
    variableWidth: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  },
  testimonialsFiveContent: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    fade: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  },
};
