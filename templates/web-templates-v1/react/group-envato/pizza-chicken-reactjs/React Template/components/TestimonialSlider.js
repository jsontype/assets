"use client";
import { sliderProps } from "@/utility/sliderProps";
import { useEffect, useState } from "react";
import Slider from "react-slick";

function TestimonialSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const thumbs = {
    dots: false,
    arrows: false,
    speed: 800,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const slider = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonials-five rel z-1 bgc-lighter py-130 rpy-100">
      <div className="container rel">
        <div className="row text-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div
              className="section-title mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">Customer Feedback</span>
              <h2>We’ve Lot’s off Happy Customer Explore Our Feedback</h2>
            </div>
            <Slider
              asNavFor={nav1}
              ref={(slider) => setSlider2(slider)}
              {...sliderProps.testimonialsFiveAuthors}
              className="testimonials-five-authors mb-20"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="testimonial-five-author-item">
                <img
                  src="assets/images/testimonials/testi-author-five1.jpg"
                  alt="Author"
                />
              </div>
              <div className="testimonial-five-author-item">
                <img
                  src="assets/images/testimonials/testi-author-five2.jpg"
                  alt="Author"
                />
              </div>
              <div className="testimonial-five-author-item">
                <img
                  src="assets/images/testimonials/testi-author-five3.jpg"
                  alt="Author"
                />
              </div>
              <div className="testimonial-five-author-item">
                <img
                  src="assets/images/testimonials/testi-author-five2.jpg"
                  alt="Author"
                />
              </div>
            </Slider>
            <Slider
              className="testimonials-five-content"
              asNavFor={nav2}
              ref={(slider) => setSlider1(slider)}
              {...sliderProps.testimonialsFiveContent}
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="testimonial-five-item">
                <div className="text">
                  Renowned for its versatility in the kitchen Red can prepared
                  various ways from simple steaming boiling to elaborate
                  preparations such
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
              <div className="testimonial-five-item">
                <div className="text">
                  From simple steaming boiling to elaborate preparations such
                  Renowned for its versatility in the kitchen Red can prepared
                  various ways
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
              <div className="testimonial-five-item">
                <div className="text">
                  Renowned for its steaming boiling to elaborate preparations
                  suchver satility in the kitchen Red can prepared various ways
                  from simple{" "}
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
              <div className="testimonial-five-item">
                <div className="text">
                  Elaborate preparations such renowned for its versatility in
                  the kitchen Red can prepared various ways from simple steaming
                  boiling to
                </div>
                <span className="author">Salvador I. Burton</span>
                <span className="designation">Manager</span>
              </div>
            </Slider>
          </div>
        </div>
        <div className="testimonials-five-shapes">
          <div
            className="shape left"
            data-aos="fade-left"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/testimonials/testi-five-left.png"
              alt="Left"
            />
          </div>
          <div
            className="shape right"
            data-aos="fade-right"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/testimonials/testi-five-right.png"
              alt="Left"
            />
          </div>
        </div>
      </div>
      <div className="testimonials-shapes">
        <div className="shape one">
          <img
            src="assets/images/testimonials/testi-five-shape3.png"
            alt="Shape"
          />
        </div>
        <div className="shape three">
          <img
            src="assets/images/testimonials/testi-five-shape1.png"
            alt="Shape"
          />
        </div>
        <div className="shape four">
          <img
            src="assets/images/testimonials/testi-five-shape2.png"
            alt="Shape"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;

export const TestimonialSlider2 = () => {
  return (
    <Slider {...sliderProps.testimonialsActive} className="testimonials-active">
      <div
        className="testimonial-item"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author1.jpg" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div
        className="testimonial-item"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author2.jpg" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div
        className="testimonial-item"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author3.jpg" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author1.jpg" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author2.jpg" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author3.jpg" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};
