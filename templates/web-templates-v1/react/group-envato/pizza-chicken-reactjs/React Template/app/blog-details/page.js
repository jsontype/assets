import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Blog details"} />
      <section className="blog-details-area py-130 rpy-100">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="blog-item style-two">
                  <div
                    className="image"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/blog/blog-standard1.jpg"
                      alt="Blog Standard"
                    />
                  </div>
                  <div
                    className="content"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
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
                    <h3>
                      <Link href="blog-details">
                        Culinary Chronicle Exploring Gastronomic Wonders at food
                        king Restaurant
                      </Link>
                    </h3>
                    <p>
                      Nestled in the heart of [City Name], our restaurant offers
                      a captivating dining experience that tantalizes the senses
                      and leaves a lasting impression. From the moment you step
                      through our doors, you are enveloped in an ambiance that
                      effortlessly blends sophistication with warmth. Our menu,
                      crafted with care by our team of talented chefs, showcases
                      a symphony of flavors, sourced from the freshest
                      ingredients and inspired by both traditional recipes and
                      innovative techniques. Whether you're craving a comforting
                      classic or eager to embark on a culinary adventure, our
                      diverse selection caters to every palate.
                    </p>
                    <div className="row pt-20 pb-5">
                      <div className="col-sm-6">
                        <div className="image mb-30">
                          <img
                            src="assets/images/blog/blog-middle1.jpg"
                            alt="Blog Middle"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="image mb-30">
                          <img
                            src="assets/images/blog/blog-middle2.jpg"
                            alt="Blog Middle"
                          />
                        </div>
                      </div>
                    </div>
                    <p>
                      Nestled in the heart of [City Name], our restaurant offers
                      a captivating dining experience that tantalizes the senses
                      and leaves a lasting impression. From the moment you step
                      through our doors, you are enveloped in an ambiance that
                      effortlessly blends sophistication with warmth. Our menu,
                      crafted with care by our team
                    </p>
                  </div>
                </div>
                <blockquote
                  className="mt-40 mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="text">
                    <span>“</span> Create An Information Architecture That’s
                    Easy To Use Way Precise Usability Considerations For
                    Partially
                  </div>
                  <div className="blockquote-footer">Ronald M. Spino</div>
                </blockquote>
                <div className="tag-share">
                  <div
                    className="item"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6>Popular Tag : </h6>
                    <div className="tags">
                      <Link href="blog">Restaurant</Link>
                      <Link href="blog">Food</Link>
                      <Link href="blog">Stalls</Link>
                    </div>
                  </div>
                  <div
                    className="item"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6>Share News</h6>
                    <div className="social-style-one">
                      <Link href="contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="admin-comment bgc-lighter mt-30"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/admin-comment.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <h4>Thomas B. Gibson</h4>
                      <span className="author">Author</span>
                      <p>
                        Dictum tellus massa congue sapien mollis suspende preti
                        alesuada enim vitae dignissim. Seds mattis adipiscineg
                        lectusey consecteture
                      </p>
                      <div className="social-icons">
                        <Link href="contact">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="contact">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="contact">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="contact">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next-prev-blog pt-45 pb-15">
                  <div
                    className="item"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/blog/prev-post.jpg" alt="News" />
                    </div>
                    <div className="content">
                      <span className="date">April 25, 2024</span>
                      <h6>
                        <Link href="blog-details">
                          Savor &amp; Share Culinary Chronicles Gazette Tales
                          from the Table
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div
                    className="item"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/blog/next-post.jpg" alt="News" />
                    </div>
                    <div className="content">
                      <span className="date">April 25, 2024</span>
                      <h6>
                        <Link href="blog-details">
                          Savor &amp; Share Culinary Chronicles Gazette Tales
                          from the Table
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <hr className="mb-95" />
                <h3 className="comment-title">Comments (3)</h3>
                <div
                  className="comments rattings mt-25"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/products/product-comment1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <ul className="comment-header">
                        <li>
                          <h6>Daniel A. Hayes</h6>
                        </li>
                        <li>15 Jan 2024</li>
                      </ul>
                      <p>
                        SaaS, or Software as a Service, is a cloud-based
                        software delivery model where applications are hosted by
                        a third-party provider and accessed via the internet
                        offers benefits such
                      </p>
                      <a href="#" className="read-more">
                        reply <i className="far fa-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="comment-body comment-child">
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/blog-comment2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <ul className="comment-header">
                        <li>
                          <h6>Daniel A. Hayes</h6>
                        </li>
                        <li>15 Jan 2024</li>
                      </ul>
                      <p>
                        SaaS, or Software as a Service, is a cloud-based
                        software delivery mode applications are hosted by a
                        third-party provider and accessed via the internet
                      </p>
                      <a href="#" className="read-more">
                        reply <i className="far fa-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/blog-comment3.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <ul className="comment-header">
                        <li>
                          <h6>Daniel A. Hayes</h6>
                        </li>
                        <li>15 Jan 2024</li>
                      </ul>
                      <p>
                        SaaS, or Software as a Service, is a cloud-based
                        software delivery model where applications are hosted by
                        a third-party provider and accessed via the internet
                        offers benefits such
                      </p>
                      <a href="#" className="read-more">
                        reply <i className="far fa-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="mt-90 mb-90" />
                <h3 className="comment-title">Send us comments</h3>
                <form
                  id="comment-form"
                  className="comment-form mt-30"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  name="comment-form"
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="blog-email"
                          name="blog-email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Add comments"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Comments <i className="far fa-arrow-alt-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="main-sidebar rmt-75">
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
                      <Link href="blog">
                        Beef &amp; Chicken Hamburger{" "}
                        <span className="count">8</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Italian Pizza <span className="count">3</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Sandwich <span className="count">5</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Chicken Roll <span className="count">2</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Soup <span className="count">5</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-recent-news"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Recent news</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">April 25, 2024</span>
                        <h6>
                          <Link href="blog-details">
                            Savor &amp; Share Culinary Chronicles Gastronomic
                            Gazette Tales from the Table
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">April 25, 2024</span>
                        <h6>
                          <Link href="blog-details">
                            Savor &amp; Share Culinary Chronicles Gastronomic
                            Gazette Tales from the Table
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">April 25, 2024</span>
                        <h6>
                          <Link href="blog-details">
                            Savor &amp; Share Culinary Chronicles Gastronomic
                            Gazette Tales from the Table
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news4.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">April 25, 2024</span>
                        <h6>
                          <Link href="blog-details">
                            Savor &amp; Share Culinary Chronicles Gastronomic
                            Gazette Tales from the Table
                          </Link>
                        </h6>
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
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};
export default page;
