import Counter from "@/components/Counter";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import ProgressBar from "@/components/ProgressBar";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Our Chefs"} />
      <section className="about-us-area pt-130 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-image-part mb-30 rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
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
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">expert team member</span>
                  <h2>we have professional team member meet with us</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis quasi architecto beatae
                  vitae dicta sunt explicaboemo
                </p>
                <div className="row justify-content-between">
                  <div className="col-md-7">
                    <div className="history-progress one">
                      <ProgressBar color={"#EC3D08"} value={95} />
                      <span className="counting">
                        <Counter end={95} />
                        <span>%</span>
                      </span>
                      <h3>Professional Team member</h3>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="history-progress two">
                      <ProgressBar color={"#EC3D08"} value={78} />
                      <span className="counting">
                        <Counter end={78} />
                        <span>%</span>
                      </span>
                      <h3>Satisficed customer</h3>
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
      <Headline />
      <section className="chefs-area pb-65 rpb-35 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">professional chefs</span>
                <h2>we have professionals team member meet our expert chefs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef1.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Nolan E. Barrera</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef2.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">William B. Nguyen</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef3.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Michael A. Coulson</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef4.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Brent M. Powers</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef5.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Tonia P. Desilva</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef6.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Matthew J. Nason</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef7.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Kenneth J. Williams</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef8.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <Link href="chef-details">Thomas C. Weaver</Link>
                  </h5>
                  <span>Senior Chef</span>
                  <Link href="chef-details" className="more-btn">
                    <i className="far fa-plus" />
                  </Link>
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
