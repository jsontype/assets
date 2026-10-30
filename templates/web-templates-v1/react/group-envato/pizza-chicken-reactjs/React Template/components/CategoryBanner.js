import Link from "next/link";

const CategoryBanner = () => {
  return (
    <div className="category-banner-area-two">
      <div className="container-fluid">
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
          <div
            className="col"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div
              className="category-banner-item style-two"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner-two1.png)",
              }}
            >
              <span className="price">only $59</span>
              <h3>SPECIALTY Beef steak</h3>
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
              <div className="food-image">
                <img
                  src="assets/images/banner/category-banner-food1.png"
                  alt="Food"
                />
              </div>
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
              className="category-banner-item style-two color-black"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner-two2.png)",
              }}
            >
              <span className="price">only $43</span>
              <h3>SPECIALTY Italian pizza</h3>
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
              <div className="food-image">
                <img
                  src="assets/images/banner/category-banner-food2.png"
                  alt="Food"
                />
              </div>
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
              className="category-banner-item style-two"
              style={{
                backgroundImage:
                  "url(assets/images/banner/category-banner-two1.png)",
              }}
            >
              <span className="price">only $35</span>
              <h3>vegetable burger</h3>
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
              <div className="food-image">
                <img
                  src="assets/images/banner/category-banner-food3.png"
                  alt="Food"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryBanner;
