import Link from "next/link";

const FoodCategory = () => {
  return (
    <section className="food-category-area pb-90 rpb-65 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-9">
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
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-recommended-food" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Best Quality Food</Link>
                </h4>
                <p>Sed ut perspiciatis unde omnis este natus sit voluptatem</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-fast-delivery" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">fast food delivery</Link>
                </h4>
                <p>Sed ut perspiciatis unde omnis este natus sit voluptatem</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-cashback" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">money back guarantee</Link>
                </h4>
                <p>Sed ut perspiciatis unde omnis este natus sit voluptatem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodCategory;
