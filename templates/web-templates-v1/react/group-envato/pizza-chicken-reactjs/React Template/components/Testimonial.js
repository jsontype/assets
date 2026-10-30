"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const Testimonial = () => {
  return (
    <section
      className="testimonials-two bgc-primary"
      style={{
        backgroundImage:
          "url(assets/images/testimonials/testimonials-two-bg.png)",
      }}
    >
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="why-choose-two-image">
            <img
              src="assets/images/testimonials/testimonials-two.jpg"
              alt="Testimonials"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="testimonials-two-content rel z-1 text-center text-white p-45 rpy-55">
            <div
              className="section-title mb-20"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">customer feedback</span>
              <h2>what have lot’s off happy customer explore feedback</h2>
            </div>
            <span className="marquee-wrap style-two">
              <span className="marquee-inner left">review </span>
              <span className="marquee-inner left">review </span>
              <span className="marquee-inner left">review </span>
            </span>
            <Slider
              {...sliderProps.testimonialsTwoCarousel}
              className="testimonials-two-carousel"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="testimonial-two-item">
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  prepared in various ways, from simple steaming or boiling to
                  elaborate preparations such as grilling incorporating weather
                  loving
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
              <div className="testimonial-two-item">
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  prepared in various ways, from simple steaming or boiling to
                  elaborate preparations such as grilling incorporating weather
                  loving
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
              <div className="testimonial-two-item">
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  prepared in various ways, from simple steaming or boiling to
                  elaborate preparations such as grilling incorporating weather
                  loving
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
              <div className="testimonial-two-item">
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  prepared in various ways, from simple steaming or boiling to
                  elaborate preparations such as grilling incorporating weather
                  loving
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
            </Slider>
            <div className="shape">
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
