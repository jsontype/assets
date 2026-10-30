import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Shop With sidebar"} />
      <section className="shop-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-8">
              <div className="shop-sidebar rmb-75">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Search</h4>
                  <form action="#" className="default-search-form">
                    <input type="text" placeholder="Search here" required="" />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div
                  className="widget widget-category"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="shop">
                        Beef &amp; Chicken Hamburger{" "}
                        <span className="count">8</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="shop">
                        Italian Pizza <span className="count">3</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="shop">
                        Sandwich <span className="count">5</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="shop">
                        Chicken Roll <span className="count">2</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="shop">
                        Soup <span className="count">5</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-filter"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Pricing</h4>
                  <div className="price-filter-wrap">
                    <div className="price-slider-range" />
                    <div className="price">
                      <span>Price </span>
                      <input type="text" id="price" readOnly="" />
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-products"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Best Seller</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product1.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>
                          <Link href="product-details">
                            Vegetable Hamburger
                          </Link>
                        </h6>
                        <span className="price">$58.63</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product2.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>
                          <Link href="product-details">
                            Italian Chicken Pizza
                          </Link>
                        </h6>
                        <span className="price">$83.25</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product3.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>
                          <Link href="product-details">Crab Seafood sauce</Link>
                        </h6>
                        <span className="price">$83.25</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-tag-cloud"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link href="shop">Spicy</Link>
                    <Link href="shop">Seafoods</Link>
                    <Link href="shop">Burger</Link>
                    <Link href="shop">Pizza</Link>
                    <Link href="shop">Soup</Link>
                    <Link href="shop">Crap</Link>
                    <Link href="shop">Juice</Link>
                    <Link href="shop">Bread</Link>
                  </div>
                </div>
                <div
                  className="widget widget-banner"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div
                    className="category-banner-item"
                    style={{
                      backgroundImage:
                        "url(assets/images/widgets/banner-bg.jpg)",
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
                    <Link href="shop" className="theme-btn style-two">
                      Order now <i className="far fa-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="shop-page-wrap">
                <div className="shop-shorter rel z-3 mb-35">
                  <div
                    className="sort-text mb-15"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    Showing 1–12 of 27 results
                  </div>
                  <div
                    className="products-dropdown mb-15"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <select>
                      <option value="default" selected="">
                        Default Sorting
                      </option>
                      <option value="new">Newness Sorting</option>
                      <option value="old">Oldest Sorting</option>
                      <option value="hight-to-low">High To Low</option>
                      <option value="low-to-high">Low To High</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-xl-4 col-sm-6"
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
                          <Link href="product-details">
                            fresh chicken burger
                          </Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
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
                          <Link href="product-details">
                            pizza with mushrooms
                          </Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
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
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish5.png" alt="Dish" />
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
                          <Link href="product-details">Italian beef pizza</Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish6.png" alt="Dish" />
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
                            fried chicken burger
                          </Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
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
                          <Link href="product-details">
                            fried chicken french
                          </Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish7.png" alt="Dish" />
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
                            fried chicken french
                          </Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish8.png" alt="Dish" />
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
                            fried chicken drench
                          </Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish9.png" alt="Dish" />
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
                          <Link href="product-details">roasted chicken</Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish10.png" alt="Dish" />
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
                          <Link href="product-details">Italian beef pizza</Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish11.png" alt="Dish" />
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
                          <Link href="product-details">Italian beef pizza</Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item-two">
                      <div className="image">
                        <img src="assets/images/dishes/dish12.png" alt="Dish" />
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
                          <Link href="product-details">top fried chicken</Link>
                        </h5>
                        <span className="price">
                          <del>$50</del> $25
                        </span>
                      </div>
                      <Link href="shop" className="theme-btn">
                        add to cart <i className="far fa-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <ul
                  className="pagination pt-30 flex-wrap"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="page-item disabled">
                    <span className="page-link">
                      <i className="fal fa-arrow-left" />
                    </span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      1<span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};
export default page;
