import Counter from "@/components/Counter";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import ProgressBar from "@/components/ProgressBar";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Chef Details"} />
      {/* Chef Details Area start */}
      <section className="chef-details-area pt-130 rpt-100 pb-75 rpb-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-4 col-lg-5 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="chef-image-part mb-55">
                <img src="assets/images/chefs/chef-details.jpg" alt="Chef" />
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="chef-content-part mb-55">
                <div className="section-title mb-30 rmb-5">
                  <h2>Tonia P. Desilva</h2>
                  <span className="designations">Senior Chef</span>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudanti totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicaboemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                </p>
                <h4 className="mt-55 rmt-5">Follow</h4>
                <div className="social-style-one mt-15 rmt-5">
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
              className="col-xl-3 col-lg-5 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="chef-skill-part mb-55">
                <div className="counter-item style-three counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-happiness" />
                  </div>
                  <div className="content">
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={34}
                    >
                      <Counter end={34} />
                    </span>
                    <span className="counter-title">Happy Customers</span>
                  </div>
                </div>
                <div className="counter-item style-three counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-medal" />
                  </div>
                  <div className="content">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={356}
                    >
                      <Counter end={356} />
                    </span>
                    <span className="counter-title">Awards Winning</span>
                  </div>
                </div>
                <div className="counter-item style-three counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-rate" />
                  </div>
                  <div className="content">
                    <span
                      className="count-text m-plus"
                      data-speed={3000}
                      data-stop={1}
                    >
                      <Counter end={1} />
                    </span>
                    <span className="counter-title">5 Star Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chef Details Area end */}
      {/* Skills Area start */}
      <section className="skills-area pb-65 rpb-35 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div
                className="skill-area-content mb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">professional skills</span>
                  <h2>We Have Lot’s Of Experience restaurant services</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus voluptatem accusantium
                  doloremque laudanti totam rem aperiam eaque ipsa quae abillo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  explicaboemo enim ipsam voluptatem
                </p>
                <div className="row no-gap justify-content-between">
                  <div className="col-sm-4 col-6">
                    <div className="history-progress style-two one">
                      <ProgressBar color={"#EC3D08"} value={95} />
                      <span className="counting">
                        <Counter end={95} />
                        <span>%</span>
                      </span>
                      <h3>Fast Foods</h3>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="history-progress style-two two">
                      <ProgressBar color={"#EC3D08"} value={95} />
                      <span className="counting">
                        <Counter end={95} />
                        <span>%</span>
                      </span>
                      <h3>Coffee Items</h3>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="history-progress style-two three">
                      <ProgressBar color={"#EC3D08"} value={95} />
                      <span className="counting">
                        <Counter end={95} />
                        <span>%</span>
                      </span>
                      <h3>Drink or juice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="skill-section-image text-lg-end mb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/skills.jpg" alt="Skills" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Area end */}
      {/* Headline area start */}
      <Headline />
      {/* Headline Area end */}
      {/* Booking Table Area start */}
      <section className="booking-table-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="booking-table-content style-three rmb-55">
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">
                    Have any lunch or dinner plan ?
                  </span>
                  <h2>We Offer quality food for lunch &amp; dinner</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde natus voluptatem accusantium
                  doloremque laudanti totam rem aperiam eaque ipsa quae abillo
                  inventore veritatis architecto beatae vitae
                </p>
                <div className="contact--number pt-20">
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
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="booking-table-form mb-0"
                style={{
                  backgroundImage: "url(assets/images/background/form-bg.png)",
                }}
              >
                <div className="section-title">
                  <h2>Send us message</h2>
                </div>
                <p>Enjoy your food to book your table</p>
                <form
                  id="booking-form"
                  className="booking-form mt-25"
                  name="booking-form"
                  method="post"
                >
                  <div className="row gap-20">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          placeholder="Write message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send message <i className="far fa-arrow-alt-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Table Area end */}
    </WellFoodLayout>
  );
};
export default page;
