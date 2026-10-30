"use client";
import Counter from "@/components/Counter";
import InstagramArea from "@/components/InstagramArea";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <WellFoodLayout footer={6}>
      {" "}
      {/* Hero Area Start */}
      <section className="hero-area bg-black py-70 rel z-1">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="hero-content style-two text-white"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  The Ultimate Guide For Choosing the Best Cuts of Steak/Grill
                </h2>
                <p>
                  Welcome to our culinary sanctuary, where every dish tells a
                  story every bite is an adventure at our food website
                </p>
                <div
                  className="hero-btns"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <a href="#" className="theme-btn">
                    book now <i className="far fa-arrow-alt-right" />
                  </a>
                  <div className="header-number">
                    <i className="far fa-phone" />
                    Call : <a href="callto:+88012345688">+880 123 456 88</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="hero-image-six rmt-60"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/hero-six.jpg" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* About Six Area start */}
      <section className="about-six-are rel z-1">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-six-service-part rel z-1 pt-130 rpt-100 pb-100 rpb-70 bgc-lighter">
              <div className="row pb-45">
                <div
                  className="col-xxl-4 col-sm-6"
                  data-aos="fade-up"
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
                    <div className="wave">
                      <img
                        src="assets/images/shapes/service-wave.png"
                        alt="shape"
                      />
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-fast-delivery" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Fast Food Delivery</Link>
                    </h4>
                    <div className="wave">
                      <img
                        src="assets/images/shapes/service-wave.png"
                        alt="shape"
                      />
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-chef" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Experience Chefs</Link>
                    </h4>
                    <div className="wave">
                      <img
                        src="assets/images/shapes/service-wave.png"
                        alt="shape"
                      />
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <span className="marquee-wrap">
                <span className="marquee-inner left">
                  <span className="marquee-item">Italian pizza</span>
                  <span className="marquee-item">
                    <i className="flaticon-star" />
                  </span>
                  <span className="marquee-item">delicious</span>
                  <span className="marquee-item">
                    <i className="flaticon-star" />
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">Italian pizza</span>
                  <span className="marquee-item">
                    <i className="flaticon-star" />
                  </span>
                  <span className="marquee-item">delicious</span>
                  <span className="marquee-item">
                    <i className="flaticon-star" />
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">Italian pizza</span>
                  <span className="marquee-item">
                    <i className="flaticon-star" />
                  </span>
                  <span className="marquee-item">delicious</span>
                  <span className="marquee-item">
                    <i className="flaticon-star" />
                  </span>
                </span>
              </span>
              <div className="headline-shapes">
                <div className="shape two">
                  <img src="assets/images/shapes/tomato.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="about-six-content m-90 rmy-100"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-75 rmb-35">
                <span className="sub-title mb-5">About Us</span>
                <h2>Best Quality Food For Your Good Health</h2>
              </div>
              <p>
                Welcome to restaurant, where culinary excellence meets warm
                hospitality in every dish serve. Nestled the heart of city our
                eatery invites a journey restaurant
              </p>
              <Link href="about" className="theme-btn style-two mt-20">
                learn more us <i className="far fa-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Six Area end */}
      {/* Food Category Area start */}
      <section className="category-area pt-130 rpt-0 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10 px-xl-5">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular food category</span>
                <h2>
                  We Provide Amazing &amp; Quality Food For Your Good Health
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div
                className="fc-two-item style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img
                    src="assets/images/category/category-two1.png"
                    alt="Icon"
                  />
                </div>
                <h5>Pickled Chicken</h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div
                className="fc-two-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img
                    src="assets/images/category/category-two2.png"
                    alt="Icon"
                  />
                </div>
                <h5>Sliced Beef</h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div
                className="fc-two-item style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img
                    src="assets/images/category/category-two3.png"
                    alt="Icon"
                  />
                </div>
                <h5>Pork Ribs</h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div
                className="fc-two-item style-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img
                    src="assets/images/category/category-two4.png"
                    alt="Icon"
                  />
                </div>
                <h5>Spicy Salad</h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div
                className="fc-two-item style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img
                    src="assets/images/category/category-two5.png"
                    alt="Icon"
                  />
                </div>
                <h5>Meat Medallion</h5>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div
                className="fc-two-item style-two"
                data-aos="fade-up"
                data-aos-delay={250}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img
                    src="assets/images/category/category-two6.png"
                    alt="Icon"
                  />
                </div>
                <h5>Lamb Cubes</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Category Area end */}
      {/* Counter Four Area start */}
      <div
        className="counter-area-four bgs-cover pt-100"
        style={{ backgroundImage: "url(assets/images/background/counter.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-9">
              <div className="row no-gap">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="counter-item text-white style-four bgc-primary counter-text-wrap"
                    data-aos="fade-down"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={8}
                    >
                      <Counter end={8} />
                    </span>
                    <div className="wave">
                      <img
                        src="assets/images/shapes/counter-wave-white.png"
                        alt="Shape"
                      />
                    </div>
                    <h6 className="counter-title">Happy Customers</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="counter-item style-four bgc-secondary counter-text-wrap"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={53}
                    >
                      <Counter end={53} />
                    </span>
                    <div className="wave">
                      <img
                        src="assets/images/shapes/counter-wave.png"
                        alt="Shape"
                      />
                    </div>
                    <h6 className="counter-title">Experience Chefs</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="counter-item style-four counter-text-wrap"
                    data-aos="fade-down"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={86}
                    >
                      <Counter end={86} />
                    </span>
                    <div className="wave">
                      <img
                        src="assets/images/shapes/counter-wave.png"
                        alt="Shape"
                      />
                    </div>
                    <h6 className="counter-title">Favorite Dishes</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Four Area end */}
      {/* Grill Menu Area start */}
      <section className="grill-menu-area pt-130 rpt-100 pb-130 rpb-100 rel z-1">
        <div className="container pb-60">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular menu</span>
                <h2>
                  We Provide Exclusive Food Based On USA Explore Popular Food
                </h2>
              </div>
            </div>
          </div>
          <div className="grill-menu-wrap">
            <div className="row no-gap">
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div
                  className="grill-menu-image bgs-cover"
                  style={{
                    background: "url(assets/images/food/grill-menu.jpg)",
                  }}
                />
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="popular-menu-wrap">
                  <span className="vertical-text">
                    Explore Our Popular Menu Items{" "}
                    <i className="far fa-long-arrow-alt-right" /> Explore Our
                    Popular Menu Items
                  </span>
                  <div className="food-menu-item style-two">
                    <div className="image">
                      <img
                        src="assets/images/food/grill-menu1.jpg"
                        alt="Grill Menu"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <span className="title">Porterhouse Steak Dinner</span>{" "}
                        <span className="dots" />{" "}
                        <span className="price">$25</span>
                      </h5>
                      <p>Diverse menu features array of delectable</p>
                    </div>
                  </div>
                  <div className="food-menu-item style-two">
                    <div className="image">
                      <img
                        src="assets/images/food/grill-menu2.jpg"
                        alt="Grill Menu"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <span className="title">Chimichurri Flank Steak</span>{" "}
                        <span className="dots" />{" "}
                        <span className="price">$74</span>
                      </h5>
                      <p>Diverse menu features array of delectable</p>
                    </div>
                  </div>
                  <div className="food-menu-item style-two">
                    <div className="image">
                      <img
                        src="assets/images/food/grill-menu3.jpg"
                        alt="Grill Menu"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <span className="title">Blackened Hanger Steak</span>{" "}
                        <span className="dots" />{" "}
                        <span className="price">$63</span>
                      </h5>
                      <p>Diverse menu features array of delectable</p>
                    </div>
                  </div>
                  <div className="food-menu-item style-two">
                    <div className="image">
                      <img
                        src="assets/images/food/grill-menu4.jpg"
                        alt="Grill Menu"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <span className="title">Marinated Skirt Steak</span>{" "}
                        <span className="dots" />{" "}
                        <span className="price">$30</span>
                      </h5>
                      <p>Diverse menu features array of delectable</p>
                    </div>
                  </div>
                  <div className="food-menu-item style-two">
                    <div className="image">
                      <img
                        src="assets/images/food/grill-menu5.jpg"
                        alt="Grill Menu"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <span className="title">Spiced Lamb Kebabs</span>{" "}
                        <span className="dots" />{" "}
                        <span className="price">$49</span>
                      </h5>
                      <p>Diverse menu features array of delectable</p>
                    </div>
                  </div>
                  <div className="food-menu-item style-two">
                    <div className="image">
                      <img
                        src="assets/images/food/grill-menu6.jpg"
                        alt="Grill Menu"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <span className="title">Prime Sirloin Steak</span>{" "}
                        <span className="dots" />{" "}
                        <span className="price">$93</span>
                      </h5>
                      <p>Diverse menu features array of delectable</p>
                    </div>
                  </div>
                  <div className="food-menu-item style-two">
                    <div className="image">
                      <img
                        src="assets/images/food/grill-menu7.jpg"
                        alt="Grill Menu"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <span className="title">Jamaican Jerk Chicken</span>{" "}
                        <span className="dots" />{" "}
                        <span className="price">$84</span>
                      </h5>
                      <p>Diverse menu features array of delectable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Grill Menu Area end */}
      {/* Call To Action Area start */}
      <section className="cta-area-two bgc-black text-white py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="cta-content-two mt-20 rmt-0"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title text-white mb-20">
                  <h2>Need Good Food Steak and Quality Restaurant</h2>
                </div>
                <hr className="mt-35 mb-45" />
                <p>
                  Grilling steak to perfection both an art and science requiring
                  blend technique timing quality ingredients the process begins
                  with selecting the right
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cta-two-image rmt-55 rmb-75"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/cta/cta-two.png" alt="CTA" />
                <div className="badge">
                  <img src="assets/images/cta/cta-two-badge.png" alt="Badge" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cta-content-list"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>
                  25 + Years We Provide Quality foods Get 20% Off For Every
                  Foods
                </h5>
                <ul className="list-style-one mt-30 mb-40">
                  <li>Best Quality Natural &amp; Fresh Food</li>
                  <li>Experience &amp; Quality Chefs</li>
                  <li>Awards Winning Restaurant</li>
                  <li>Healthy &amp; Organic Foods</li>
                </ul>
                <Link href="contact" className="theme-btn">
                  Book A Table <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-two-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/cta-two1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/cta-two2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/cta-two3.png" alt="Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/cta-two4.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Call To Action Area end */}
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
                <span className="sub-title mb-5">popular item</span>
                <h2>Popular Delicious Food</h2>
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
                <img src="assets/images/products/grill1.png" alt="Grill" />
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
                  <Link href="product-details">BBQ dish with vegetables</Link>
                </h5>
                <span className="price">
                  <del>$99</del> $68
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
                <img src="assets/images/products/grill2.png" alt="Grill" />
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
                  <Link href="product-details">Grill steak meal fries</Link>
                </h5>
                <span className="price">
                  <del>$130</del> $112
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
                <img src="assets/images/products/grill3.png" alt="Grill" />
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
                  <Link href="product-details">BBQ dish with vegetables</Link>
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
                <img src="assets/images/products/grill4.png" alt="Grill" />
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
                  <Link href="product-details">Grill steak-meal fries</Link>
                </h5>
                <span className="price">
                  <del>$280</del> $259
                </span>
              </div>
            </div>
            <div
              className="product-item"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/products/grill1.png" alt="Grill" />
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
                  <Link href="product-details">BBQ dish with vegetables</Link>
                </h5>
                <span className="price">
                  <del>$99</del> $68
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
                <img src="assets/images/products/grill2.png" alt="Grill" />
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
                  <Link href="product-details">Grill steak meal fries</Link>
                </h5>
                <span className="price">
                  <del>$130</del> $112
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Pizza Area end */}
      {/* Category Banner area start */}
      <div className="category-banner-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-five height-100"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-style-two1.jpg)",
                }}
              >
                <div className="badge">$89</div>
                <span className="price">29% Discount</span>
                <h3>Jamaican Jerk Chicken</h3>
                <Link href="menu-grill" className="read-more">
                  Explore Menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-five"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-style-two2.jpg)",
                }}
              >
                <span className="price">29% Discount</span>
                <h3>Porterhouse Steak Dinner</h3>
                <Link href="menu-grill" className="read-more">
                  Explore Menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
              <div
                className="category-banner-item style-five"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/category-banner-style-two3.jpg)",
                }}
              >
                <span className="price">29% Discount</span>
                <h3>Blackened Hanger Steak</h3>
                <Link href="menu-grill" className="read-more">
                  Explore Menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Banner area end */}
      {/* Booking Table Area start */}
      <section className="booking-table-area pt-100 rpt-70 rel z-2">
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
                <div
                  className="booking-table-form rmt-50"
                  style={{
                    backgroundImage:
                      "url(assets/images/background/form-bg.png)",
                  }}
                >
                  <div className="section-title">
                    <h2>book a table</h2>
                  </div>
                  <p>Enjoy your food to book your table</p>
                  <form
                    id="booking-form"
                    className="booking-form mt-25"
                    name="booking-form"
                    method="post"
                  >
                    <div className="row gap-20">
                      <div className="col-md-6 mb-20">
                        <div className="form-group">
                          <select name="person" id="person">
                            <option value="option1">Person</option>
                            <option value="option2">Person 2</option>
                            <option value="option3">Person 3</option>
                            <option value="option4">Person 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="date">
                            <i className="far fa-calendar-alt" />
                          </label>
                          <input
                            type="text"
                            id="date"
                            name="date"
                            className="form-control"
                            defaultValue=""
                            placeholder="Date"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="time">
                            <i className="far fa-clock" />
                          </label>
                          <input
                            type="text"
                            id="time"
                            name="time"
                            className="form-control"
                            defaultValue=""
                            placeholder="Time"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="number">
                            <i className="far fa-phone" />
                          </label>
                          <input
                            type="text"
                            id="number"
                            name="number"
                            className="form-control"
                            defaultValue=""
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <button type="submit" className="theme-btn">
                            book your table{" "}
                            <i className="far fa-arrow-alt-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Table Area end */}
      {/* Testimonials Six Area start */}
      <section
        className="testimonials-six rel z-1 pt-250 pb-130 rpb-100"
        style={{
          backgroundImage: "url(assets/images/background/testimonials.jpg)",
        }}
      >
        <div className="container pt-100 rpt-70">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div className="testimonials-three-content rel z-1 text-white rmb-55">
                <div
                  className="section-title mb-45"
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
                    <div className="content">
                      <div className="icon">
                        <img
                          src="assets/images/testimonials/author1.jpg"
                          alt=""
                        />
                      </div>
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
                    <div className="content">
                      <div className="icon">
                        <img
                          src="assets/images/testimonials/author2.jpg"
                          alt=""
                        />
                      </div>
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
                    <div className="content">
                      <div className="icon">
                        <img
                          src="assets/images/testimonials/author3.jpg"
                          alt=""
                        />
                      </div>
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
                    <div className="content">
                      <div className="icon">
                        <img
                          src="assets/images/testimonials/author1.jpg"
                          alt=""
                        />
                      </div>
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
                </Slider>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="testimonial-quote-badge"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="testi-badge">
                  <img src="assets/images/testimonials/badge.png" alt="Badge" />
                </div>
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Six Area end */}
      {/* Blog Area start */}
      <section className="blog-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
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
                className="blog-item style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two3.jpg" alt="Blog" />
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
                className="blog-item style-three"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two4.jpg" alt="Blog" />
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
      {/* Headline area start */}
      <div className="headline-area pb-105 rpb-75 rel z-1">
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
      <InstagramArea />
    </WellFoodLayout>
  );
};
export default page;
