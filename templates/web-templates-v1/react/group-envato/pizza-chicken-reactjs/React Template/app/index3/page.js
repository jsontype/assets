"use client";
import Burger from "@/components/Burger";
import CategoryBanner from "@/components/CategoryBanner";
import FoodCategory from "@/components/FoodCategory";
import Headline from "@/components/Headline";
import InstagramArea from "@/components/InstagramArea";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <WellFoodLayout footer={3}>
      {" "}
      {/* Hero Area Start */}
      <section
        className="hero-area-three pt-250 pb-220 rpb-100 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/hero-three.png)",
        }}
      >
        <span className="marquee-wrap style-two text-white">
          <span className="marquee-inner left">burger Hamburger</span>
          <span className="marquee-inner left">burger Hamburger</span>
          <span className="marquee-inner left">burger Hamburger</span>
        </span>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="hero-content-three mt-250 rmt-0 rmb-55 text-white"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Chicken Burger</h1>
                <p>
                  Welcome to our culinary sanctuary, where every dish tells
                  every bite is an adventure at our food
                </p>
                <Link href="shop" className="theme-btn style-two">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-three-image">
                <img src="assets/images/hero/hero-three.png" alt="Hero" />
                <div
                  className="offer-badge"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/offer-circle-shape.png)",
                  }}
                >
                  <span>
                    50% <br />
                    off
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Food Category Area start */}
      <FoodCategory />
      {/* Food Category Area end */}
      {/* Headline area start */}
      <Headline mb="50" />
      {/* Headline Area end */}
      {/* About Us Area start */}
      <section className="about-us-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-8">
                  <div
                    className="section-title mt-55 mb-25"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <span className="sub-title mb-5">learn About wellfood</span>
                    <h2>we provide premium Quality food for your health</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="about-video mb-30">
                    <img
                      src="assets/images/about/about-video-bg.jpg"
                      alt="About Video"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="about-middle-content mb-30">
                    <h4>we have 25+ Years Of Experience</h4>
                    <p>
                      Welcome too restaurant, where culinary excellence meets
                      warm hospitality in every dish we nestled in the heart of
                      City name our eatery invites
                    </p>
                    <div className="about-btn-customer mt-40">
                      <Link href="about" className="theme-btn style-two">
                        learn more us <i className="far fa-arrow-alt-right" />
                      </Link>
                      <div className="customer">
                        <h6>5m+ Happy customer</h6>
                        <div className="customer-image">
                          <img
                            src="assets/images/about/customer1.png"
                            alt="Customer"
                          />
                          <img
                            src="assets/images/about/customer2.png"
                            alt="Customer"
                          />
                          <img
                            src="assets/images/about/customer3.png"
                            alt="Customer"
                          />
                          <img
                            src="assets/images/about/customer4.png"
                            alt="Customer"
                          />
                          <img
                            src="assets/images/about/customer5.png"
                            alt="Customer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-image-part style-three mb-30">
                <img src="assets/images/about/about2.jpg" alt="About" />
                <div
                  className="quality-food"
                  style={{
                    backgroundImage: "url(assets/images/shapes/about-star.png)",
                  }}
                >
                  <span className="for-border" />
                  <span className="text">
                    quality <br />
                    food
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Category Banner area start */}
      <CategoryBanner />
      {/* Category Banner area end */}
      {/* Burger Area start */}
      <section className="burger-area pt-100 rpt-70 pb-130 rpb-100 rel z-1">
        <Burger />
      </section>
      {/* Burger Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-black pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap white-text">
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
      {/* Special Offer Area start */}
      <section className="special-offer-area-two bgc-black pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="offer-content-two text-center text-white rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/offer/special-burger.png"
                  alt="Special burger"
                />
                <div className="section-title mt-45 mb-25">
                  <h2>Delicious burger</h2>
                </div>
                <p>
                  Nestled in the heart of the city, our restaurant is a culinary
                  haven where flavors come alive memories are made.
                </p>
                <ul className="offer-countdown-wrap mt-40 mb-25">
                  <li>
                    <span id="days" />
                    Days
                  </li>
                  <li>
                    <span id="hours" />
                    Hours
                  </li>
                  <li>
                    <span id="minutes" />
                    Min
                  </li>
                  <li>
                    <span id="seconds" />
                    Sec
                  </li>
                </ul>
                <Link href="shop" className="theme-btn style-three">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="offer-image style-two"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/offer/burger.png" alt="Burger Image" />
                <div
                  className="offer-badge"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/offer-circle-shape.png)",
                  }}
                >
                  <span>
                    only <br />
                    <span className="price">$59</span>
                  </span>
                </div>
                <span className="marquee-wrap style-two text-white">
                  <span className="marquee-inner left">burger</span>
                  <span className="marquee-inner left">burger</span>
                  <span className="marquee-inner left">burger</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape5.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape3.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Special Offer Area end */}
      {/* Popular Menu Area start */}
      <section className="popular-menu-area-three pt-130 rpt-100 pb-115 rpb-90 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular menu</span>
                <h2>
                  we provide exclusive food based on usa explore our popular
                  food
                </h2>
              </div>
            </div>
          </div>
          <div className="row no-gap">
            <div className="col-lg-6">
              <div
                className="popular-menu-wrap"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu1.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">beef burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu2.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Chicken burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu3.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Beef burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu4.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Italian pizza</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu5.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">black burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="popular-menu-wrap"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu6.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">beef burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu7.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Chicken burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu8.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Beef burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu9.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Italian pizza</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/burger-menu10.jpg"
                      alt="Burger Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">black burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-items-shape">
          <div className="shape one">
            <img src="assets/images/shapes/menu-item1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/menu-item2.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Popular Menu Area end */}
      {/* Headline area start */}
      <Headline />
      {/* Headline Area end */}
      {/* Testimonials Three Area start */}
      <section
        className="testimonials-three rel z-1 bgc-primary pt-130 rpt-100 pb-215 rpb-150"
        style={{
          backgroundImage:
            "url(assets/images/testimonials/testimonials-two-bg.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center rmb-30">
            <div className="col-xl-10 col-lg-11">
              <div className="testimonials-three-content rel z-1 text-white">
                <div
                  className="section-title text-center mb-45"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title text-white mb-5">
                    customer feedback
                  </span>
                  <h2>what our customer’s say us</h2>
                </div>
                <Slider
                  {...sliderProps.testimonialsTwoCarousel}
                  className="testimonials-two-carousel"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="testimonial-two-item style-two">
                    <div className="image">
                      <div className="quote">
                        <i className="flaticon-quote" />
                      </div>
                      <img
                        src="assets/images/testimonials/author-three.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <div className="text">
                        Renowned for its versatility in the kitchen, Red King
                        Crab can prepared in various ways, from simple steaming
                        or boiling to elaborate preparations such as grilling
                        incorporating weather loving
                      </div>
                      <span className="author">Randy R. Pennington</span>
                      <span className="designation">web designer</span>
                    </div>
                  </div>
                  <div className="testimonial-two-item style-two">
                    <div className="image">
                      <div className="quote">
                        <i className="flaticon-quote" />
                      </div>
                      <img
                        src="assets/images/testimonials/author-three.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <div className="text">
                        Renowned for its versatility in the kitchen, Red King
                        Crab can prepared in various ways, from simple steaming
                        or boiling to elaborate preparations such as grilling
                        incorporating weather loving
                      </div>
                      <span className="author">Salvador I. Burton</span>
                      <span className="designation">Manager</span>
                    </div>
                  </div>
                  <div className="testimonial-two-item style-two">
                    <div className="image">
                      <div className="quote">
                        <i className="flaticon-quote" />
                      </div>
                      <img
                        src="assets/images/testimonials/author-three.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <div className="text">
                        Renowned for its versatility in the kitchen, Red King
                        Crab can prepared in various ways, from simple steaming
                        or boiling to elaborate preparations such as grilling
                        incorporating weather loving
                      </div>
                      <span className="author">Randy R. Pennington</span>
                      <span className="designation">web designer</span>
                    </div>
                  </div>
                  <div className="testimonial-two-item style-two">
                    <div className="image">
                      <div className="quote">
                        <i className="flaticon-quote" />
                      </div>
                      <img
                        src="assets/images/testimonials/author-three.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <div className="text">
                        Renowned for its versatility in the kitchen, Red King
                        Crab can prepared in various ways, from simple steaming
                        or boiling to elaborate preparations such as grilling
                        incorporating weather loving
                      </div>
                      <span className="author">Salvador I. Burton</span>
                      <span className="designation">Manager</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/testi-shape1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/testi-shape2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/testi-shape3.png" alt="Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/testi-shape4.png" alt="Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/testi-shape5.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Testimonials Three Area end */}
      {/* Client Area start */}
      <div className="client-area rel z-2">
        <div className="container container-1520">
          <div className="client-wrap">
            <Slider {...sliderProps.clientActive} className="client-active">
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client1.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client2.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client3.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client4.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client5.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client6.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client1.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client2.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client3.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client4.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client5.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client6.png"
                  alt="Client Logo"
                />
              </a>
            </Slider>
          </div>
        </div>
      </div>
      {/* Client Area end */}
      {/* Blog Area start */}
      <section className="blog-area pt-130 rpt-100 pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">latest news &amp; blog</span>
                <h2>get every single updates latest</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                    <li>
                      <a href="#">comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary excellence meets hospitality in
                    every dish we serve settled in the heart
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read more <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                    <li>
                      <a href="#">comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary excellence meets hospitality in
                    every dish we serve settled in the heart
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read more <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                    <li>
                      <a href="#">comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary excellence meets hospitality in
                    every dish we serve settled in the heart
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read more <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
      {/* Headline area start */}
      <div className="headline-area rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">newsletter subscribe</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Newsletter Area start */}
      <section className="newsletter-area py-65 mb-5 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title rmb-25"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">join our newsletter</span>
                <h2>subscribe follow newsletter to get more updates</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="newsletter-form-wrap"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6>
                  Hurry up to join us to get more offer, JOIN FOR HOT OFFERS
                </h6>
                <form className="newsletter-form style-two mt-15" action="#">
                  <label htmlFor="news-email">
                    <i className="fas fa-envelope" />
                  </label>
                  <input
                    id="news-email"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button className="theme-btn style-two" type="submit">
                    Subscribe <i className="far fa-arrow-alt-right" />
                  </button>
                </form>
                <div className="check-field mt-15">
                  <input id="update-news" type="checkbox" />
                  <label htmlFor="update-news">
                    Get 15 days update news &amp; latest offer
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter-shapes">
          <div className="shape">
            <img
              src="assets/images/shapes/newsletter-pizza-shape.png"
              alt="Shape"
            />
          </div>
        </div>
      </section>
      {/* Newsletter Area end */}
      {/* Instagram area start */}
      <InstagramArea />
      {/* Instagram area end */}
    </WellFoodLayout>
  );
};
export default page;
