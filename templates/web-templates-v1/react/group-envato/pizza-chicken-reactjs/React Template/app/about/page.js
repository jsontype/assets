import { AboutUs3 } from "@/components/AboutUs";
import BookTableForm from "@/components/BookTableForm";
import FoodCategory from "@/components/FoodCategory";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"About company"} pageName={"About Us"} />
      <AboutUs3 />
      <Headline />
      {/* Food Category Area start */}
      <FoodCategory />
      {/* Food Category Area end */}
      {/* Booking Table Area start */}
      <section
        className="booking-table-area-two bgs-cover py-100 rel z-1 overlay"
        style={{
          backgroundImage:
            "url(assets/images/background/booking-table-two.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <BookTableForm />
            </div>
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="booking-table-content style-two rmt-55">
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="section-title mt-50 text-white mb-50">
                  <h2>
                    We Offer quality service That Customers Needs for health
                    food
                  </h2>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Table Area end */}
      {/* Chefs Area start */}
      <section className="chefs-area pt-130 rpt-100 pb-55 rpb-30 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">professional chefs</span>
                <h2>we have professionals team member meet our expert chefs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef1.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Nolan E. Barrera</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef2.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">William B. Nguyen</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef3.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Michael A. Coulson</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef4.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Brent M. Powers</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chefs Area end */}
      {/* Headline area start */}
      <div className="headline-area mb-105 rmb-85 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/burger.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Features Two area start */}
      <div className="feature-two-area pb-130 rpb-100">
        <div className="container-fluid">
          <div className="row no-gap">
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature1.jpg" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Private dining</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <Link href="shop" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 offset-xl-4">
              <div
                className="feature-two-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature2.jpg" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>The Raw Bar</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <Link href="shop" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature3.jpg" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Outdoor catering</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <Link href="shop" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Two area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-lighter pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area bgc-lighter pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">customer feedback</span>
                <h2>what have lot’s off happy customer explore feedback</h2>
              </div>
            </div>
          </div>
          <TestimonialSlider2 />
        </div>
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
    </WellFoodLayout>
  );
};
export default page;
