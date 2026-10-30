import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Reviews</div>
          <div className="subtitle">What customers say</div>
        </div>
        {/* testimonials items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.testimonials}>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">Joseph Mackey</div>
                  <div className="company">Architect</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">James Green</div>
                  <div className="company">Art Director</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">Joseph Mackey</div>
                  <div className="company">Architect</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">James Green</div>
                  <div className="company">Art Director</div>
                </div>
                <div className="text">
                  Excellent all around! What stood out most was Jake's excellent
                  service. He made sure our order was placed in time, even
                  though we were ordering on a holiday.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="testimonials_prev prev fas fa-chevron-left" />
            <span className="testimonials_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
