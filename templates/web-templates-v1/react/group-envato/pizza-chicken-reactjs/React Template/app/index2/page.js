"use client";
import AboutUs from "@/components/AboutUs";
import { BookTableForm2 } from "@/components/BookTableForm";
import InstagramArea from "@/components/InstagramArea";
import Testimonial from "@/components/Testimonial";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <WellFoodLayout footer={2}>
      {/* Hero Area Start */}
      <div
        className="hero-area-two bgs-cover pt-205 rpt-150 pb-100 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/hero-two.jpg)",
        }}
      >
        <div className="container container-1520">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-two-left mb-90 rmb-60">
                <span
                  className="hero-title mb-40"
                  data-aos="fade-left"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Italian
                </span>
                <div
                  className="hero-content-two text-white"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <p>
                    Welcome to culinary sanctuary there every dish tells every
                    bite is an adventure at our food
                  </p>
                  <span className="price">price only $55</span>
                  <Link href="shop" className="theme-btn">
                    order now <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="hero-two-right">
                <span
                  className="hero-title text-end"
                  data-aos="fade-right"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  pizza
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-two.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/hero-shape3.png" alt="Hero Shape" />
          </div>
          <div className="pizza">
            <img src="assets/images/hero/pizza.png" alt="Pizza" />
          </div>
          <div className="letter-shape-one">
            <img src="assets/images/hero/letter-shape.png" alt="Leter Shape" />
          </div>
          <div className="letter-shape-two">
            <img
              src="assets/images/hero/letter-shape-two.png"
              alt="Leter Shape"
            />
          </div>
          <div
            className="price-badge"
            style={{
              backgroundImage: "url(assets/images/shapes/about-star.png)",
            }}
          >
            <span>only</span>
            <b>$25.99</b>
          </div>
        </div>
      </div>
      {/* Hero Area End */}
      {/* Headline area start */}
      <div className="headline-area pt-70 rel z-1">
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
      {/* Food Category Area start */}
      <section className="category-area pt-60 rel z-1">
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
                <h2>
                  we provide amazing &amp; Quality food for your good health
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.foodCategoryActive}
          className="food-category-active"
        >
          <div className="food-category-item">
            <div className="image">
              <span
                className="pizza-badge text-white"
                style={{
                  backgroundImage:
                    "url(assets/images/category/category-badge.png)",
                }}
              >
                hot
              </span>
              <img src="assets/images/category/category1.png" alt="Food" />
            </div>
            <h3>
              <Link href="product-details">Italian pizza</Link>
            </h3>
          </div>
          <div className="food-category-item">
            <div className="image">
              <span
                className="pizza-badge"
                style={{
                  backgroundImage:
                    "url(assets/images/category/category-badge2.png)",
                }}
              >
                hot
              </span>
              <img src="assets/images/category/category2.png" alt="Food" />
            </div>
            <h3>
              <Link href="product-details">hamburger</Link>
            </h3>
          </div>
          <div className="food-category-item">
            <div className="image">
              <span
                className="pizza-badge text-white"
                style={{
                  backgroundImage:
                    "url(assets/images/category/category-badge.png)",
                }}
              >
                hot
              </span>
              <img src="assets/images/category/category3.png" alt="Food" />
            </div>
            <h3>
              <Link href="product-details">Chicken drumsticks</Link>
            </h3>
          </div>
          <div className="food-category-item">
            <div className="image">
              <span
                className="pizza-badge"
                style={{
                  backgroundImage:
                    "url(assets/images/category/category-badge2.png)",
                }}
              >
                hot
              </span>
              <img src="assets/images/category/category4.png" alt="Food" />
            </div>
            <h3>
              <Link href="product-details">spicy green salad</Link>
            </h3>
          </div>
          <div className="food-category-item">
            <div className="image">
              <span
                className="pizza-badge text-white"
                style={{
                  backgroundImage:
                    "url(assets/images/category/category-badge.png)",
                }}
              >
                hot
              </span>
              <img src="assets/images/category/category5.png" alt="Food" />
            </div>
            <h3>
              <Link href="product-details">meat slice raw</Link>
            </h3>
          </div>
        </Slider>
      </section>
      {/* Food Category Area end */}
      {/* About Us Area start */}
      <AboutUs />
      {/* About Us Area end */}
      {/* Category Banner area start */}
      <div className="category-banner-area px-4">
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
          <div
            className="col"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div
              className="category-banner-item"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner1.jpg)",
              }}
            >
              <span className="price">only $59</span>
              <h3>SPECIALTY PIZZAS</h3>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>(5k)</span>
              </div>
              <Link href="shop" className="theme-btn">
                Order now <i className="far fa-arrow-alt-right" />
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
              className="category-banner-item"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner2.jpg)",
              }}
            >
              <span className="price">only $59</span>
              <h3>Pizza with mozzarella</h3>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>(5k)</span>
              </div>
              <Link href="shop" className="theme-btn">
                Order now <i className="far fa-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div
              className="category-banner-item"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner3.jpg)",
              }}
            >
              <span className="price">only $59</span>
              <h3>Delicious pizza</h3>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>(5k)</span>
              </div>
              <Link href="shop" className="theme-btn">
                Order now <i className="far fa-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div
              className="category-banner-item"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner4.jpg)",
              }}
            >
              <span className="price">only $59</span>
              <h3>appetizing hot pizza</h3>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>(5k)</span>
              </div>
              <Link href="shop" className="theme-btn">
                Order now <i className="far fa-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Category Banner area end */}
      {/* Pizza Area start */}
      <section className="pizza-area pt-100 rpb-70 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular pizza</span>
                <h2>explore popular delicious pizza</h2>
              </div>
            </div>
          </div>
          <Slider {...sliderProps.pizzaActive} className="pizza-active">
            <div
              className="product-item"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/pizza/pizza1.png" alt="Pizza" />
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
                  <Link href="product-details">pizza with mushrooms</Link>
                </h5>
                <span className="price">
                  <del>$50</del> $25
                </span>
              </div>
            </div>
            <div
              className="product-item"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/pizza/pizza2.png" alt="Pizza" />
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
                  <Link href="product-details">pizza with mushrooms</Link>
                </h5>
                <span className="price">
                  <del>$50</del> $25
                </span>
              </div>
            </div>
            <div
              className="product-item"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/pizza/pizza3.png" alt="Pizza" />
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
            <div
              className="product-item"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/pizza/pizza4.png" alt="Pizza" />
                <span className="pizza-badge">new</span>
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
            <div className="product-item">
              <div className="image">
                <img src="assets/images/pizza/pizza1.png" alt="Pizza" />
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
                  <Link href="product-details">pizza with mushrooms</Link>
                </h5>
                <span className="price">
                  <del>$50</del> $25
                </span>
              </div>
            </div>
            <div className="product-item">
              <div className="image">
                <img src="assets/images/pizza/pizza2.png" alt="Pizza" />
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
                  <Link href="product-details">pizza with mushrooms</Link>
                </h5>
                <span className="price">
                  <del>$50</del> $25
                </span>
              </div>
            </div>
            <div className="product-item">
              <div className="image">
                <img src="assets/images/pizza/pizza3.png" alt="Pizza" />
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
          </Slider>
        </div>
      </section>
      {/* Pizza Area end */}
      {/* Why choose Us Area start */}
      <section className="why-choose-area-two bgc-black">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="why-choose-two-image">
              <img
                src="assets/images/about/why-choose-us.jpg"
                alt="why Choose Us"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-two-content pt-60 pb-30">
              <div
                className="section-title text-white mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">Why choose us</span>
                <h2>We Offer quality service That Customers Needs</h2>
              </div>
              <div
                className="why-choose-carousel"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Slider {...sliderProps.whyChooseCarousel}>
                  <div className="service-item style-three">
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
                  <div className="service-item style-three">
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
                  <div className="service-item style-three">
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
                </Slider>
              </div>
              <div className="shape one">
                <img src="assets/images/shapes/why-choose1.png" alt="Shape" />
              </div>
              <div className="shape two">
                <img src="assets/images/shapes/why-choose2.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose Us Area end */}
      {/* Popular Menu Area start */}
      <section className="popular-menu-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
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
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-menu-item">
                <div className="image">
                  <img
                    src="assets/images/dishes/pizza-menu1.png"
                    alt="Pizza Menu"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="product-details">Italian pizza</Link>
                  </h5>
                  <p>Fast order save 20%</p>
                  <span className="price">$25</span>
                </div>
                <Link href="product-details" className="details-btn">
                  <i className="fas fa-plus" />
                </Link>
              </div>
              <div className="food-menu-item">
                <div className="image">
                  <img
                    src="assets/images/dishes/pizza-menu1.png"
                    alt="Pizza Menu"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="product-details">Italian pizza</Link>
                  </h5>
                  <p>Fast order save 20%</p>
                  <span className="price">$25</span>
                </div>
                <Link href="product-details" className="details-btn">
                  <i className="fas fa-plus" />
                </Link>
              </div>
              <div className="food-menu-item">
                <div className="image">
                  <img
                    src="assets/images/dishes/pizza-menu1.png"
                    alt="Pizza Menu"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="product-details">Italian pizza</Link>
                  </h5>
                  <p>Fast order save 20%</p>
                  <span className="price">$25</span>
                </div>
                <Link href="product-details" className="details-btn">
                  <i className="fas fa-plus" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-menu-item">
                <div className="image">
                  <img
                    src="assets/images/dishes/pizza-menu1.png"
                    alt="Pizza Menu"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="product-details">Italian pizza</Link>
                  </h5>
                  <p>Fast order save 20%</p>
                  <span className="price">$25</span>
                </div>
                <Link href="product-details" className="details-btn">
                  <i className="fas fa-plus" />
                </Link>
              </div>
              <div className="food-menu-item">
                <div className="image">
                  <img
                    src="assets/images/dishes/pizza-menu1.png"
                    alt="Pizza Menu"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="product-details">Italian pizza</Link>
                  </h5>
                  <p>Fast order save 20%</p>
                  <span className="price">$25</span>
                </div>
                <Link href="product-details" className="details-btn">
                  <i className="fas fa-plus" />
                </Link>
              </div>
              <div className="food-menu-item">
                <div className="image">
                  <img
                    src="assets/images/dishes/pizza-menu1.png"
                    alt="Pizza Menu"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="product-details">Italian pizza</Link>
                  </h5>
                  <p>Fast order save 20%</p>
                  <span className="price">$25</span>
                </div>
                <Link href="product-details" className="details-btn">
                  <i className="fas fa-plus" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="food-menu-item">
                <div className="image">
                  <img
                    src="assets/images/dishes/pizza-menu1.png"
                    alt="Pizza Menu"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="product-details">Italian pizza</Link>
                  </h5>
                  <p>Fast order save 20%</p>
                  <span className="price">$25</span>
                </div>
                <Link href="product-details" className="details-btn">
                  <i className="fas fa-plus" />
                </Link>
              </div>
              <div
                className="special-pizza"
                style={{
                  backgroundImage:
                    "url(assets/images/background/special-pizza-bg.png)",
                }}
              >
                <div className="image">
                  <img
                    src="assets/images/dishes/special-pizza.png"
                    alt="Special Pizza"
                  />
                </div>
                <span className="price">only $59</span>
                <h3>
                  SPECIALTY
                  <br /> PIZZAS
                </h3>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span>(5k)</span>
                </div>
                <br />
                <Link href="shop" className="theme-btn style-two">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Menu Area end */}
      {/* Booking Table Area start */}
      <section className="booking-table-area pb-180 rpb-150 rel z-1">
        <div className="container">
          <div
            className="booking-table-wrap overlay"
            style={{
              backgroundImage:
                "url(assets/images/background/booking-table.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="booking-table-content"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                  <div className="section-title mt-30 text-white mb-20">
                    <span className="sub-title mb-5">
                      Have any lunch or dinner plan ?
                    </span>
                    <h2>We Offer quality food for lunch &amp; dinner</h2>
                  </div>
                  <div className="contact--number">
                    <div className="icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="number">
                      <span className="title">Contact Us</span>
                      <a href="callto:+00012345688">+000 123 456 88</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <BookTableForm2 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Table Area end */}
      {/* Testimonials Two Area start */}
      <Testimonial />
      {/* Testimonials Two Area end */}
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
      {/* Blog Area start */}
      <section className="blog-area pt-110 rpt-80 pb-85 rpb-55 rel z-1">
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
                <h2>get every single updates news</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-two-wrap">
                <div
                  className="blog-item style-two image-left"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <ul className="blog-meta-two">
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
                <hr className="mb-35 d-none d-md-block" />
                <div
                  className="blog-item style-two image-left"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/blog5.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <ul className="blog-meta-two">
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
            <div className="col-xl-4 col-lg-10">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog6.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
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
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicle Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary excellence meet hospitality in
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
