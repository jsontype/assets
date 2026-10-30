"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Burger = () => {
  return (
    <div className="container container-1520">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">popular burger</span>
              <h2>popular delicious burger</h2>
            </div>
          </div>
        </div>
        <Slider {...sliderProps.pizzaActive} className="pizza-active">
          <div
            className="product-item"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="image">
              <img src="assets/images/products/burger1.jpg" alt="Burger" />
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
                <Link href="product-details">vegetable beef Burger</Link>
              </h5>
              <span className="price">
                <del>$50</del> $25
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
              <img src="assets/images/products/burger2.jpg" alt="Burger" />
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
                <Link href="product-details">beef checken burger</Link>
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
              <img src="assets/images/products/burger3.jpg" alt="Burger" />
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
                <Link href="product-details">burgers black bread</Link>
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
              <img src="assets/images/products/burger4.jpg" alt="Burger" />
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
                <Link href="product-details">delicious burger with beef</Link>
              </h5>
              <span className="price">
                <del>$50</del> $25
              </span>
            </div>
          </div>
          <div className="product-item">
            <div className="image">
              <img src="assets/images/products/burger1.jpg" alt="Burger" />
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
                <Link href="product-details">vegetable beef Burger</Link>
              </h5>
              <span className="price">
                <del>$50</del> $25
              </span>
            </div>
          </div>
          <div className="product-item">
            <div className="image">
              <img src="assets/images/products/burger2.jpg" alt="Burger" />
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
                <Link href="product-details">beef checken burger</Link>
              </h5>
              <span className="price">
                <del>$50</del> $25
              </span>
            </div>
          </div>
          <div className="product-item">
            <div className="image">
              <img src="assets/images/products/burger3.jpg" alt="Burger" />
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
                <Link href="product-details">burgers black bread</Link>
              </h5>
              <span className="price">
                <del>$50</del> $25
              </span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Burger;
