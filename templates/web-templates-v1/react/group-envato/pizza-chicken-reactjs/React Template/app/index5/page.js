"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <WellFoodLayout footer={5}>
      {" "}
      {/* Hero Area Start */}
      <section
        className="hero-area-five bgs-cover pt-185 rpt-145 pb-250 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/hero-five.jpg)",
        }}
      >
        <div className="container">
          <div
            className="hero-content-four style-two py-60 rpt-0 text-center text-white"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <span className="sub-title">special for your best choice</span>
            <h1>Organic Juice &amp; Health Drinks</h1>
            <p>
              Welcome to our culinary sanctuary, where every dish tells a story
              every bite is an adventure at our food website
            </p>
            <Link href="shop" className="theme-btn mt-25">
              Book now <i className="far fa-arrow-alt-right" />
            </Link>
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
          <div
            className="hero-left"
            data-aos="zoom-in"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/shapes/hero-five-left.png"
              alt="Hero Shape"
            />
          </div>
          <div
            className="hero-right"
            data-aos="zoom-in"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/shapes/hero-five-right.png"
              alt="Hero Shape"
            />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Food Category Area start */}
      <section className="category-area rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular food category</span>
                <h2>Explore Our Most Popular Juice &amp; Healthy Drinks</h2>
              </div>
            </div>
          </div>
          <Slider {...sliderProps.fcTwoActive} className="fc-two-active">
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="assets/images/shapes/fc-icon1.png" alt="Icon" />
              </div>
              <h5>Organic Juice</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="assets/images/shapes/fc-icon2.png" alt="Icon" />
              </div>
              <h5>Honey Coffee</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="assets/images/shapes/fc-icon3.png" alt="Icon" />
              </div>
              <h5>Milk Shake</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="assets/images/shapes/fc-icon4.png" alt="Icon" />
              </div>
              <h5>Cold Ice-cream</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="assets/images/shapes/fc-icon5.png" alt="Icon" />
              </div>
              <h5>Strawberry-juice</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="assets/images/shapes/fc-icon1.png" alt="Icon" />
              </div>
              <h5>Organic Juice</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="assets/images/shapes/fc-icon2.png" alt="Icon" />
              </div>
              <h5>Honey Coffee</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="assets/images/shapes/fc-icon3.png" alt="Icon" />
              </div>
              <h5>Milk Shake</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="assets/images/shapes/fc-icon4.png" alt="Icon" />
              </div>
              <h5>Cold Ice-cream</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="assets/images/shapes/fc-icon5.png" alt="Icon" />
              </div>
              <h5>Strawberry-juice</h5>
              <Link href="menu-burger" className="btn">
                15 Items
              </Link>
            </div>
          </Slider>
        </div>
      </section>
      {/* Food Category Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-95 rel z-1">
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
            <img src="assets/images/shapes/heading1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* About Us Area start */}
      <section className="about-us-area pt-100 rpt-80 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="about-image-five mb-30 rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-five.jpg" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-us-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">learn About wellfood</span>
                  <h2>Amazing &amp; Quality Food For Your Good Health</h2>
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
      </section>
      {/* About Us Area end */}
      {/* Section Devider Area start */}
      <div className="section-devider d-flex">
        <img
          className="w-100"
          src="assets/images/shapes/wave-shape1.png"
          alt="Wave Shape"
        />
      </div>
      {/* Section Devider Us Area end */}
      {/* Filtarabe Food Area start */}
      <section className="pood-filter-area bgc-lighter pt-30 rpt-80 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-50">
                <span className="sub-title mb-5">product gallery</span>
                <h2>explore latest product gallery</h2>
              </div>
            </div>
          </div>
          <ul
            className="nav product-filter-nav filter-btns-one justify-content-center mb-40"
            role="tablist"
          >
            <li className="active" data-filter="*">
              Show All
            </li>
            <li data-filter=".juice">Orange Juice</li>
            <li data-filter=".shakes">Milk Shakes</li>
            <li data-filter=".coffee">Coffee</li>
            <li data-filter=".ice-cream">Ice-cream</li>
          </ul>
          <div className="row product-filter-active">
            <div className="col-xl-3 col-lg-4 col-sm-6 item shakes ice-cream">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food1.jpg" alt="Food" />
                  <span className="pizza-badge">-10%</span>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 item juice coffee">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food2.jpg" alt="Food" />
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
            <div className="col-xl-3 col-lg-4 col-sm-6 item shakes coffee ice-cream">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food3.jpg" alt="Food" />
                  <span className="pizza-badge">hot</span>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 item juice ice-cream">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food4.jpg" alt="Food" />
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
            <div className="col-xl-3 col-lg-4 col-sm-6 item shakes">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food5.jpg" alt="Food" />
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
            <div className="col-xl-3 col-lg-4 col-sm-6 item juice coffee">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food6.jpg" alt="Food" />
                  <span className="pizza-badge">-10%</span>
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
            <div className="col-xl-3 col-lg-4 col-sm-6 item ice-cream juice">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food7.jpg" alt="Food" />
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
            <div className="col-xl-3 col-lg-4 col-sm-6 item coffee shakes">
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/food/filter-food8.jpg" alt="Food" />
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
          </div>
        </div>
      </section>
      {/* Filtarabe Food Area end */}
      {/* Category Banner area start */}
      <div className="category-banner-area-five">
        <div className="container-fluid">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-three gradient-two"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-five1.jpg)",
                }}
              >
                <span className="quality">Quality Food</span>
                <h2>Strawberry Juice &amp; slices</h2>
                <Link href="shop" className="theme-btn style-two">
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
                    "url(assets/images/banner/category-banner-five2.jpg)",
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
                className="category-banner-item style-three gradient-three"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-five3.jpg)",
                }}
              >
                <span className="quality">Quality Food</span>
                <h2>Fresh Orange Juice &amp; slices</h2>
                <Link href="shop" className="theme-btn">
                  Shop now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Banner area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-65 rel z-1">
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
            <img src="assets/images/shapes/heading1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Popular Menu Area start */}
      <section className="popular-area pt-110 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="popular-menu-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Popular Menu</span>
                  <h2>We Provide Exclusive Food Explore Popular Food</h2>
                </div>
                <img src="assets/images/food/food-menu.jpg" alt="Food Menu" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="food-menu-five"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/fm-five1.jpg"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Orange Juice</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$33</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/fm-five2.jpg"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Mango Juice</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$28</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/fm-five3.jpg"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Strawberry Juice</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$25</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/fm-five4.jpg"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Pineapple Juice</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$40</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="assets/images/food/fm-five5.jpg"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Delicious Ice-cream</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">$23</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Menu Area end */}
      {/* Section Devider Area start */}
      <div className="section-devider d-flex">
        <img
          className="w-100"
          src="assets/images/shapes/wave-shape2.png"
          alt="Wave Shape"
        />
      </div>
      {/* Section Devider Us Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-five-area bgc-dark-green pt-20 rpt-50 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="why-choose-five-content text-white rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Why Choose Us</span>
                  <h2>We Offer Quality Foods &amp; Customers Service</h2>
                </div>
                <p>
                  Welcome too restaurant, where culinary excellence meets warm
                  hospitality in every dish we serve. Nestled in the heart of
                  City Name our eatery invites you on a journey
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="why-choose-five-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/why-choose-five.jpg"
                  alt="Why Choose Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Features Area start */}
      <section className="features-five-area bgc-dark-green">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-image-part style-four"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/features/features-five.jpg"
                  alt="Features"
                />
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
                className="features-five-wrap mt-70 rmt-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="featured-item-two">
                  <div className="icon">
                    <i className="flaticon-broccoli" />
                  </div>
                  <div className="content">
                    <h4>100% Organic Food</h4>
                    <p>
                      Welcome too restaurant, where culinary excellence meets
                      warm hospitality in every dish we servce
                    </p>
                  </div>
                </div>
                <div className="featured-item-two">
                  <div className="icon">
                    <i className="flaticon-broccoli" />
                  </div>
                  <div className="content">
                    <h4>Natural &amp; Fresh Food</h4>
                    <p>
                      Welcome too restaurant, where culinary excellence meets
                      warm hospitality in every dish we servce
                    </p>
                  </div>
                </div>
                <div className="featured-item-two">
                  <div className="icon">
                    <i className="flaticon-broccoli" />
                  </div>
                  <div className="content">
                    <h4>Natural Sugar</h4>
                    <p>
                      Welcome too restaurant, where culinary excellence meets
                      warm hospitality in every dish we servce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-dark-green pt-120 rpt-60 rel z-1">
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
            <img src="assets/images/shapes/heading1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Gallery Area start */}
      <div className="gallery-area bgc-dark-green py-100 rpy-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/gallery/gallery-four2.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-4 order-md-0 col-md-7">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/gallery/gallery-four1.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/gallery/gallery-four3.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/gallery/gallery-four4.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/gallery/gallery-four5.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={250}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/gallery/gallery-four6.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area end */}
      {/* Testimonials Two Area start */}
      <TestimonialSlider />
      {/* Testimonials Two Area end */}
      {/* Blog Area start */}
      <section className="blog-area-five bg-light pt-130 rpt-100 pb-95 rpb-65 rel z-1">
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
                className="blog-item-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="date">Mar 25</span>
                  <img src="assets/images/blog/blog-three1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <a href="#" className="tag">
                    <i className="far fa-tag" /> Organic Juice
                  </a>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring to ways They Wonders Food
                      Restaurant
                    </Link>
                  </h4>
                  <ul className="blog-meta-two style-two">
                    <li>
                      <i className="far fa-user" />
                      <a href="#">David Mick</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <a href="#">comments (2)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="date">Mar 25</span>
                  <img src="assets/images/blog/blog-three2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <a href="#" className="tag">
                    <i className="far fa-tag" /> Organic Juice
                  </a>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring to ways They Wonders Food
                      Restaurant
                    </Link>
                  </h4>
                  <ul className="blog-meta-two style-two">
                    <li>
                      <i className="far fa-user" />
                      <a href="#">David Mick</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <a href="#">comments (2)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="date">Mar 25</span>
                  <img src="assets/images/blog/blog-three3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <a href="#" className="tag">
                    <i className="far fa-tag" /> Organic Juice
                  </a>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring to ways They Wonders Food
                      Restaurant
                    </Link>
                  </h4>
                  <ul className="blog-meta-two style-two">
                    <li>
                      <i className="far fa-user" />
                      <a href="#">David Mick</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <a href="#">comments (2)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
      {/* Client Area start */}
      <div className="client-area bg-light rel z-1">
        <div className="container">
          <div className="client-wrap-two py-80">
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
      {/* Headline area start */}
      <div className="headline-area bgc-dark-green pt-120 rpt-60 rel z-2">
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
            <img src="assets/images/shapes/heading1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Newsletter Area start */}
      <section className="newsletter-area bgc-dark-green pt-75 rel z-1">
        <div className="container">
          <div className="newsletter-wrap">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div
                  className="section-title text-white rmb-25"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-5">join our newsletter</span>
                  <h2>subscribe follow newsletter to get more updates</h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div
                  className="newsletter-form-wrap"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6>Hurry up to join us to get more offer.</h6>
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
        </div>
      </section>
      {/* Newsletter Area end */}
    </WellFoodLayout>
  );
};
export default page;
