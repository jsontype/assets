"use client";
import Counter from "@/components/Counter";
import OfferCard from "@/components/OfferCard";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      {/* Hero Area Start */}
      <section
        className="hero-area bgs-cover pt-180 rpt-150 pb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/background/hero.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content text-white"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-35">
                  <i className="far fa-hamburger" /> Start price Only $25
                </span>
                <h1>delicious food near your town</h1>
                <p>
                  Welcome to our culinary sanctuary, where every dish tells a
                  story every bite is an adventure at our food website, we
                  invite
                </p>
                <Link href="menu-chicken" className="theme-btn">
                  View All Menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-images rmt-60">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
                <div className="price">
                  <img src="assets/images/hero/price.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/hero-shape3.png" alt="Hero Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/hero-shape4.png" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.png" alt="Hero Shape" />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-90 rel z-1">
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
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* About Us Area start */}
      <section className="about-us-area pt-130 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="about-image-part mb-30 rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                <div className="food-review">
                  <div className="author">
                    <img
                      src="assets/images/about/review-author.png"
                      alt="Author"
                    />
                  </div>
                  <span className="text">Very good food</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <img src="assets/images/about/about.jpg" alt="About" />
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
            <div className="col-lg-6">
              <div
                className="about-us-content"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">learn About wellfood</span>
                  <h2>the amazing &amp; Quality food for your good health</h2>
                </div>
                <p>
                  Welcome too restaurant, where culinary excellence meets warm
                  hospitality in every dish we serve. Nestled in the heart of
                  City Name our eatery invites you on a journey
                </p>
                <div className="about-btn-author pt-5 mb-45">
                  <Link href="about" className="theme-btn style-two">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </Link>
                  <Link href="about" className="read-more">
                    Explore popular menu{" "}
                    <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-high-quality" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Best Quality Food</Link>
                      </h5>
                      <p>
                        Our talented chefs craft each dish precision sourcing
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-chef" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Experience our Chefs</Link>
                      </h5>
                      <p>
                        Our talented chefs craft each dish precision sourcing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/pizza-three.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Offer Card Area start */}
      <OfferCard />
      {/* Offer Card Area end */}
      {/* Offer Area start */}
      <section
        className="offer-area bgc-black pt-160 rpt-100 pb-150 rpb-120 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/offer-dot-bg.png)",
        }}
      >
        <span className="marquee-wrap style-two text-white">
          <span className="marquee-inner left">special deal</span>
          <span className="marquee-inner left">special deal</span>
          <span className="marquee-inner left">special deal</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="offer-content text-white rmb-55"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/offer/delicious.png" alt="Image" />
                <h2>Special deal offer for this week</h2>
                <h3>
                  grilled beef meat only <span>$59</span>
                </h3>
                <p>
                  Restaurant, where culinary excellence meets warm hospitality
                  in every dish we serve nestled in the heart of city
                </p>
                <Link href="shop" className="theme-btn">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="offer-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/offer/offer-img.png"
                  alt="Offer Image"
                />
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
              </div>
            </div>
          </div>
        </div>
        <div className="offer-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/offer-shape1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/offer-shape2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/offer-shape3.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Offer Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-90 rel z-1">
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
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Popular Menu Area start */}
      <section className="popular-menu-area pt-105 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
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
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-6 z-3"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Red king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$25</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Alaskan king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$10</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Pizza</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$22</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Hamburger</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$43</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item mb-30">
                <div className="content">
                  <div className="name-desc">
                    <h5>chicken soup</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$77</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 z-2"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Red king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$25</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Alaskan king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$10</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Pizza</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$22</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Hamburger</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$43</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item mb-30">
                <div className="content">
                  <div className="name-desc">
                    <h5>chicken soup</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$77</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 z-1"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Red king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$25</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Alaskan king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$10</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Pizza</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$22</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Hamburger</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$43</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item mb-30">
                <div className="content">
                  <div className="name-desc">
                    <h5>chicken soup</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>$77</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Menu Area end */}
      {/* Gallery Area Start */}
      <div className="gallery-area rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery1.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy awesome pizza</h5>
                  <span className="category">Burger, Hamburger</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery2.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy awesome pizza</h5>
                  <span className="category">Burger, Hamburger</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery3.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy awesome pizza</h5>
                  <span className="category">Burger, Hamburger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area End */}
      {/* Why choose Us Area start */}
      <section className="why-choose-area bgc-lighter pt-240 rpt-150 pb-100 rpb-70 rel z-1">
        <span className="marquee-wrap style-two">
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="why-choose-content rmb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Why choose us</span>
                  <h2>We Offer quality service That Customers Needs</h2>
                </div>
                <p>
                  Welcome too restaurant, where culinary excellence meets warm
                  hospitality in every dish we serve. Nestled in the heart of
                  City Name our eatery invites you on a journey
                </p>
                <div className="about-btn-author mb-60">
                  <Link href="about" className="theme-btn">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </Link>
                  <div className="author">
                    <img src="assets/images/about/author.jpg" alt="Author" />
                    <h6>
                      Ben A. Conners / <span>CEO &amp; Founder</span>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={34}
                      >
                        <Counter end={34} />
                      </span>
                      <span className="counter-title">Organic Planting</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={356}
                      >
                        <Counter end={356} />
                      </span>
                      <span className="counter-title">Passionate Chef’s</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={853}
                      >
                        <Counter end={853} />
                      </span>
                      <span className="counter-title">Favourite Dishes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-recommended-food" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Best Quality Food</Link>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-fast-delivery" />
                    </div>
                    <h4>
                      <Link href="menu-burger">fast food delivery</Link>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item mt-30 rmt-0">
                    <div className="icon">
                      <i className="flaticon-cashback" />
                    </div>
                    <h4>
                      <Link href="menu-burger">money back guarantee</Link>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-dish" />
                    </div>
                    <h4>
                      <Link href="menu-burger">100% natural food</Link>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/pizza.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Why choose Us Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-black pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap white-text">
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
      <section className="testimonials-area bgc-black pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-white text-center mb-50"
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
      {/* Call To Action Area start */}
      <section className="cta-area py-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8">
              <div className="cta-content">
                <div className="section-title text-white mb-20">
                  <span className="sub-title mb-5">Need any food?</span>
                  <h2>Looking for best quality food or restaurant?</h2>
                </div>
                <Link href="contact" className="theme-btn style-two">
                  get a quote <i className="far fa-arrow-alt-right" />
                </Link>
                <div
                  className="cta-badge"
                  style={{
                    backgroundImage: "url(assets/images/shapes/cta-shape.png)",
                  }}
                >
                  <span>
                    quality
                    <br /> food
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cta-bg"
          style={{ backgroundImage: "url(assets/images/background/cta.jpg)" }}
        />
      </section>
      {/* Call To Action Area end */}
      {/* Dishes Area start */}
      <section className="dishes-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular dishes</span>
                <h2>explore popular menus</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish1.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">fresh chicken burger</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish2.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">pizza with mushrooms</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish3.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">
                      double burger &amp; fries
                    </Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish4.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">fried chicken french</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dishes Area end */}
      {/* Blog Area start */}
      <section className="blog-area pt-100 rpt-70 pb-90 rpb-60 rel z-1">
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
    </WellFoodLayout>
  );
};
export default page;
