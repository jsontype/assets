import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };
  return (
    <div className="aali_tm_section" id="testimonial">
      <div className="aali_tm_testimonials">
        <div className="left">
          <div className="image">
            <img src="img/hero/2.png" alt="aali image" />
          </div>
        </div>
        <div className="right">
          <div className="right_in">
            <div
              className="aali_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <span>Testimonial</span>
              <h3>What People Say</h3>
            </div>
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    I had a problem finding something, asked the support team,
                    got a reply and a solution within a few minutes. Brilliant
                    support! Very happy with the website I bought.
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Tom Anderson, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    Good overall template. I am getting back into coding and had
                    a simple question for the author. They responded within 5
                    minutes and answered my question. Highly recommend!
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Jessica Parker, <span>App Developer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    I {`can't`} believe I got support and my problem resolved in
                    just minutes from posting my question. Simply amazing team
                    and amazing theme! Thank you for all!
                  </p>
                </div>
                <div className="name">
                  <h3>
                    MacLaren, <span>Freelancer</span>
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="direct">
              <a className="prev_button">
                <i className="icon-left" />
              </a>
              <a className="next_button">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
        <span className="border">
          <span
            className="in moving_effect"
            data-direction="x"
            data-reverse="yes"
          />
        </span>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
