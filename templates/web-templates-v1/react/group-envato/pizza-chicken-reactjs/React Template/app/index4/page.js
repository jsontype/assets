import Counter from "@/components/Counter";
import Testimonial from "@/components/Testimonial";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout bgBlack={true}>
      {" "}
      {/* Hero Area Start */}
      <section
        className="hero-area-four bgs-cover pt-185 rpt-145 pb-120 rpb-110 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/hero-four.jpg)",
        }}
      >
        <div className="container">
          <div
            className="hero-content-four text-center text-white"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <span className="sub-title">special for your best choice</span>
            <h1>Fried Chicken</h1>
            <img src="assets/images/hero/hero-four.png" alt="Hero" />
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
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.png" alt="Hero Shape" />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Headline area start */}
      <div className="headline-area pt-110 rpt-90 mb-105 rmb-85 rel z-1">
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
      {/* About Us Area start */}
      <section className="about-us-area-four pb-95 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-us-content text-white ms-0 rmb-25"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">learn About wellfood</span>
                  <h2>we provide best Quality food for your health</h2>
                </div>
                <p>
                  Welcome too restaurant, where culinary excellence meets warm
                  hospitality in every dish we serve. Nestled in the heart of
                  City Name our eatery invites you on a journey
                </p>
                <Link href="about" className="theme-btn mt-25 mb-60">
                  learn more us <i className="far fa-arrow-alt-right" />
                </Link>
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <div className="counter-item style-two counter-text-wrap">
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
                    <div className="counter-item style-two counter-text-wrap">
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
                    <div className="counter-item style-two counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={8534}
                      >
                        <Counter end={8534} />
                      </span>
                      <span className="counter-title">Favourite Dishes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-image-four mb-30"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  <div className="col">
                    <img
                      src="assets/images/about/about-four1.jpg"
                      alt="About"
                    />
                  </div>
                  <div className="col mt-80">
                    <img
                      src="assets/images/about/about-four2.jpg"
                      alt="About"
                    />
                  </div>
                </div>
                <div className="badge">
                  <img
                    src="assets/images/about/about-four-badge.jpg"
                    alt="Badge"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Category Banner area start */}
      <div className="category-banner-area-two pb-85 rpb-65">
        <div className="container-fluid">
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-three1.jpg)",
                }}
              >
                <h3>SPECIALTY PIZZA</h3>
                <Link href="shop" className="theme-btn">
                  Shop now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-four"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-three2.jpg)",
                }}
              >
                <h3>buy 1</h3>
                <span className="get-one">get free 1</span>
                <Link href="shop" className="theme-btn">
                  Shop now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-three3.jpg)",
                }}
              >
                <h3>delicious fast foods</h3>
                <Link href="shop" className="theme-btn">
                  Shop now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Banner area end */}
      {/* Video Area start */}
      <div className="video-area pb-120 rpb-90 rel z-1">
        <div className="container">
          <div className="video-title-wrap">
            <span
              className="video-title"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Fried Chicken
            </span>
            <span
              className="video-title text-end"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              quality food
            </span>
          </div>
          <div
            className="video-wrap overlay"
            data-aos="zoom-in"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/background/video.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="testimonials-shapes">
          <div className="shape three">
            <img src="assets/images/shapes/video1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/video2.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Video Area End */}
      {/* Headline area start */}
      <div className="headline-area mb-105 rmb-85 rel z-1">
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
      {/* Popular Menu Area start */}
      <section className="popular-menu-area-three pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
              <div
                className="section-title text-white text-center mb-50"
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
                className="popular-menu-wrap bgc-black"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu1.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Fried chicken</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu2.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Chicken leg</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu3.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">chicken steak</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu4.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Chicken baked</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu5.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Fried chicken</span>{" "}
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
                className="popular-menu-wrap bgc-black"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu6.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Fried chicken</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu7.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Chicken baked</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu8.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Grille chicken</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu9.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Chicken baked</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/chicken-menu10.png"
                      alt="Chicken Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Grille chicken</span>{" "}
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
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chicken-menu1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/chicken-menu2.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Popular Menu Area end */}
      {/* Gallery Area Start */}
      <div className="gallery-area-two pb-100 rpb-70 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-5 col-md-8"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="gallery-item-two">
                <img
                  src="assets/images/gallery/gallery-two2.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 gallery-order"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="gallery-item-two">
                <img
                  src="assets/images/gallery/gallery-two3.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
            <div
              className="col-xl-3 col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="gallery-item-two">
                <img
                  src="assets/images/gallery/gallery-two1.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
            <div
              className="col-xl-3 col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="gallery-item-two text-end">
                <img
                  src="assets/images/gallery/gallery-two5.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 gallery-order"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="gallery-item-two">
                <img
                  src="assets/images/gallery/gallery-two4.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
            <div
              className="col-xl-5 col-md-8"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="gallery-item-two">
                <img
                  src="assets/images/gallery/gallery-two6.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area End */}
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
            <div className="col-lg-5">
              <div
                className="offer-content-two text-white rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/offer/special-food.png"
                  alt="Special Food"
                />
                <div className="section-title mt-45 mb-25">
                  <h2>chicken drumsticks</h2>
                </div>
                <p className="ms-0">
                  Nestled in the heart of the city, our restaurant is a culinary
                  haven where flavors come alive memories are made.
                </p>
                <a href="#" className="theme-btn mt-15">
                  order now <i className="far fa-arrow-alt-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="offer-image style-two style-three"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/offer/chicken.png" alt="Burger Image" />
                <div
                  className="offer-badge"
                  style={{
                    backgroundImage: "url(assets/images/shapes/about-star.png)",
                  }}
                >
                  <span>
                    only <br />
                    <span className="price">$59</span>
                  </span>
                </div>
                <span className="marquee-wrap style-two text-white">
                  <span className="marquee-inner left">mix food meal</span>
                  <span className="marquee-inner left">mix food meal</span>
                  <span className="marquee-inner left">mix food meal</span>
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
      {/* Testimonials Two Area start */}
      <Testimonial />
      {/* Testimonials Two Area end */}
      {/* Blog Area start */}
      <section className="blog-area bgc-black pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-white text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={55}
              >
                <span className="sub-title mb-5">latest news &amp; blog</span>
                <h2>get every single updates news</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div
                className="blog-item style-three black-bg"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary to excellence meets to hospitality
                    dish we serve settled
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read more <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="blog-item style-three black-bg"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary to excellence meets to hospitality
                    dish we serve settled
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
