import Counter from "@/components/Counter";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import ProgressBar from "@/components/ProgressBar";
import WellFoodLayout from "@/layout/WellFoodLayout";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageName={"History"} pageTitle={"our History"} />
      {/* History Page About Area start */}
      <section className="history-page-about pt-130 rpt-100 pb-75 rpb-45 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-xl-6">
              <div
                className="history-about-image mb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/history.jpg" alt="History" />
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="history-about-content mb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">learn About wellfood</span>
                  <h2>we provide best Quality food for your good health</h2>
                </div>
                <p>
                  This may involve coordinating with financial institutions,
                  implementing new systems or processes, and providing ongoing
                  support guidance
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
      </section>
      {/* History Page About Area end */}
      {/* Headline area start */}
      <Headline />
      {/* Headline Area end */}
      {/* History Area start */}
      <section className="history-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">learn About wellfood</span>
                <h2>explore and discover our restaurant history</h2>
              </div>
            </div>
          </div>
          <div className="history-wrapper">
            <div className="row no-gap">
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="history-item-wrap">
                  <div className="history-item">
                    <div className="image">
                      <img
                        src="assets/images/history/history1.jpg"
                        alt="History"
                      />
                    </div>
                    <div className="content">
                      <span className="year">1990</span>
                      <h5>when we started restaurant</h5>
                      <p>
                        At our restaurant, we offer more than just meal we
                        provide unforgettable culinary experience tantalizes the
                        senses and creates memories
                      </p>
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
                <div className="history-item-wrap history-right">
                  <div className="history-item">
                    <div className="image">
                      <img
                        src="assets/images/history/history2.jpg"
                        alt="History"
                      />
                    </div>
                    <div className="content">
                      <span className="year">2000</span>
                      <h5>join our first award winning chef</h5>
                      <p>
                        At our restaurant, we offer more than just meal we
                        provide unforgettable culinary experience tantalizes the
                        senses and creates memories
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="history-item-wrap">
                  <div className="history-item">
                    <div className="image">
                      <img
                        src="assets/images/history/history3.jpg"
                        alt="History"
                      />
                    </div>
                    <div className="content">
                      <span className="year">2003</span>
                      <h5>we are now on fire</h5>
                      <p>
                        At our restaurant, we offer more than just meal we
                        provide unforgettable culinary experience tantalizes the
                        senses and creates memories
                      </p>
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
                <div className="history-item-wrap history-right">
                  <div className="history-item">
                    <div className="image">
                      <img
                        src="assets/images/history/history4.jpg"
                        alt="History"
                      />
                    </div>
                    <div className="content">
                      <span className="year">2005</span>
                      <h5>award winning restaurant</h5>
                      <p>
                        At our restaurant, we offer more than just meal we
                        provide unforgettable culinary experience tantalizes the
                        senses and creates memories
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="history-item-wrap">
                  <div className="history-item">
                    <div className="image">
                      <img
                        src="assets/images/history/history5.jpg"
                        alt="History"
                      />
                    </div>
                    <div className="content">
                      <span className="year">2007</span>
                      <h5>we have start globally</h5>
                      <p>
                        At our restaurant, we offer more than just meal we
                        provide unforgettable culinary experience tantalizes the
                        senses and creates memories
                      </p>
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
                <div className="history-item-wrap history-right">
                  <div className="history-item">
                    <div className="image">
                      <img
                        src="assets/images/history/history6.jpg"
                        alt="History"
                      />
                    </div>
                    <div className="content">
                      <span className="year">2013</span>
                      <h5>we have 50+ professional chef</h5>
                      <p>
                        At our restaurant, we offer more than just meal we
                        provide unforgettable culinary experience tantalizes the
                        senses and creates memories
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* History Area end */}
      {/* Awards Area start */}
      <section className="awards-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">Awards winning</span>
                <h2>explore our achievement</h2>
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="award-item">
                <img src="assets/images/awards/award1.png" alt="Award" />
                <h5>World #1 restaurant</h5>
                <span className="year">Awards - 1995</span>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="award-item">
                <img src="assets/images/awards/award2.png" alt="Award" />
                <h5>World #1 restaurant</h5>
                <span className="year">Awards - 2000</span>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="award-item">
                <img src="assets/images/awards/award3.png" alt="Award" />
                <h5>World #1 restaurant</h5>
                <span className="year">Awards - 2005</span>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="award-item">
                <img src="assets/images/awards/award4.png" alt="Award" />
                <h5>World #1 restaurant</h5>
                <span className="year">Awards - 2008</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Awards Area end */}
    </WellFoodLayout>
  );
};
export default page;
