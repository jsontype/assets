import Link from "next/link";

const Footer = ({ footer = 1 }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 5:
      return <Footer5 />;
    case 6:
      return <Footer6 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer bgc-black rel z-1"
      style={{
        backgroundImage: "url(assets/images/background/footer-bg.png)",
      }}
    >
      <div className="footer-top py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-white text-center mb-35">
                <span className="sub-title mb-10">join our newsletter</span>
                <h2>subscribe follow our newsletter to get more updates</h2>
              </div>
              <form className="newsletter-form" action="#">
                <label htmlFor="news-email">
                  <i className="fas fa-envelope" />
                </label>
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <button className="theme-btn" type="submit">
                  Subscribe <i className="far fa-arrow-alt-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={0}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <p>
                  Temporibus autem quibusdam officiis aut rerum necessitatibus
                  eveniet voluta repudiandae molestiae recusandae
                </p>
                <div className="social-style-one mt-15">
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
            <div
              className="col-xl-4 col-lg-5 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={0}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>popular food</h5>
                </div>
                <ul className="two-column">
                  <li>
                    <Link href="product-details">Hamburger</Link>
                  </li>
                  <li>
                    <Link href="product-details">French fries</Link>
                  </li>
                  <li>
                    <Link href="product-details">Chicken pizza</Link>
                  </li>
                  <li>
                    <Link href="product-details">Onion rings</Link>
                  </li>
                  <li>
                    <Link href="product-details">Vegetable roll</Link>
                  </li>
                  <li>
                    <Link href="product-details">Chicken nuggets</Link>
                  </li>
                  <li>
                    <Link href="product-details">Sea fish</Link>
                  </li>
                  <li>
                    <Link href="product-details">Tacos Pizza</Link>
                  </li>
                  <li>
                    <Link href="product-details">Fried chicken</Link>
                  </li>
                  <li>
                    <Link href="product-details">Hot Dogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="row justify-content-between">
                <div
                  className="col-xl-6 col-lg-5 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="footer-widget footer-contact">
                    <div className="footer-title">
                      <h5>contact us</h5>
                    </div>
                    <ul>
                      <li>
                        1403 Washington Ave, New Orlea ns, LA 70130, United
                        States
                      </li>
                      <li>
                        <a href="mailto:wellfood@gmail.com">
                          <u>wellfood@gmail.com</u>
                        </a>
                      </li>
                      <li>
                        <a href="callto:+(1)0987654321">+(1) 098 765 4321</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-5 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="footer-widget opening-hour">
                    <div className="footer-title">
                      <h5>opening hour</h5>
                    </div>
                    <ul>
                      <li>
                        Monday – Friday: <span>8am – 4pm</span>
                      </li>
                      <li>
                        Saturday: <span>8am – 12am</span>
                      </li>
                    </ul>
                    <div className="any-question mt-20">
                      <h5>Have any questions?</h5>
                      <a href="#" className="theme-btn style-two">
                        let’s talk us <i className="far fa-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <Link href="/">Wellfood</Link>. All Rights
                  Reserved{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-arrow-alt-up" />
          </button>
        </div>
      </div>
      <div className="footer-shapes">
        <div className="shape one">
          <img src="assets/images/shapes/hero-shape5.png" alt="Shape" />
        </div>
        <div className="shape two">
          <img src="assets/images/shapes/tomato.png" alt="Shape" />
        </div>
        <div className="shape three">
          <img src="assets/images/shapes/pizza-two.png" alt="Shape" />
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer
      className="main-footer bgc-black pt-130 rpt-100 rel z-1"
      style={{ backgroundImage: "url(assets/images/background/footer-bg.png)" }}
    >
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="footer-widget footer-text"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="assets/images/logos/logo-white.png" alt="Logo" />
                  </Link>
                </div>
                <p>
                  Temporibus autem quibusdam officiis aut rerum necessitatibus
                  eveniet voluta repudiandae molestiae recusandae
                </p>
                <div className="social-style-one mt-15">
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
            <div className="col-xl-4 col-lg-5 col-sm-6">
              <div
                className="footer-widget footer-links"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-title">
                  <h5>popular food</h5>
                </div>
                <ul className="two-column">
                  <li>
                    <Link href="product-details">Hamburger</Link>
                  </li>
                  <li>
                    <Link href="product-details">French fries</Link>
                  </li>
                  <li>
                    <Link href="product-details">Chicken pizza</Link>
                  </li>
                  <li>
                    <Link href="product-details">Onion rings</Link>
                  </li>
                  <li>
                    <Link href="product-details">Vegetable roll</Link>
                  </li>
                  <li>
                    <Link href="product-details">Chicken nuggets</Link>
                  </li>
                  <li>
                    <Link href="product-details">Sea fish</Link>
                  </li>
                  <li>
                    <Link href="product-details">Tacos Pizza</Link>
                  </li>
                  <li>
                    <Link href="product-details">Fried chicken</Link>
                  </li>
                  <li>
                    <Link href="product-details">Hot Dogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="row justify-content-between">
                <div className="col-xl-6 col-lg-5 col-sm-6">
                  <div
                    className="footer-widget footer-contact"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="footer-title">
                      <h5>contact us</h5>
                    </div>
                    <ul>
                      <li>
                        1403 Washington Ave, New Orlea ns, LA 70130, United
                        States
                      </li>
                      <li>
                        <a href="mailto:wellfood@gmail.com">
                          <u>wellfood@gmail.com</u>
                        </a>
                      </li>
                      <li>
                        <a href="callto:+(1)0987654321">+(1) 098 765 4321</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 col-sm-6">
                  <div
                    className="footer-widget opening-hour"
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="footer-title">
                      <h5>opening hour</h5>
                    </div>
                    <ul>
                      <li>
                        Monday – Friday: <span>8am – 4pm</span>
                      </li>
                      <li>
                        Saturday: <span>8am – 12am</span>
                      </li>
                    </ul>
                    <div className="any-question mt-20">
                      <h5>Have any questions?</h5>
                      <a href="#" className="theme-btn style-two">
                        let’s talk us <i className="far fa-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <Link href="/">Wellfood</Link>. All Rights
                  Reserved{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-arrow-alt-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};
const Footer3 = () => {
  return (
    <footer
      className="main-footer footer-two bgc-black pt-120 rpt-90 rel z-1"
      style={{ backgroundImage: "url(assets/images/background/footer-bg.png)" }}
    >
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-title">
                  <h5>Location</h5>
                </div>
                <p>
                  1403 Washington Ave, New Orlea ns, LA 70130, United States
                </p>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>contact us</h5>
                </div>
                <ul>
                  <li>
                    <a href="mailto:wellfood@gmail.com">
                      <u>wellfood@gmail.com</u>
                    </a>
                  </li>
                  <li>
                    <a href="callto:+(1)0987654321">+(1) 098 765 4321</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget opening-hour">
                <div className="footer-title">
                  <h5>opening hour</h5>
                </div>
                <ul>
                  <li>
                    Monday – Friday: <span>8am – 4pm</span>
                  </li>
                  <li>
                    Saturday: <span>8am – 12am</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-title">
                  <h5>Follow Us</h5>
                </div>
                <div className="social-style-one mt-5">
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
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container rel text-center">
          <ul className="footer-bottom-nav">
            <li>
              <Link href="product-details">Hamburger</Link>
            </li>
            <li>
              <a href="#">Pizza</a>
            </li>
            <li>
              <Link href="product-details">Vegetable roll</Link>
            </li>
            <li>
              <Link href="product-details">Sea fish</Link>
            </li>
            <li>
              <Link href="product-details">Fried chicken</Link>
            </li>
            <li>
              <a href="#">Burger</a>
            </li>
            <li>
              <a href="#">Saladr</a>
            </li>
          </ul>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-arrow-alt-up" />
          </button>
        </div>
        <hr className="mt-25 mb-30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <Link href="/">Wellfood</Link>. All Rights
                  Reserved{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer5 = () => {
  return (
    <footer className="main-footer footer-two bgc-dark-green pt-120 rpt-90 rel z-1">
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="footer-widget footer-text"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-title">
                  <h5>Location</h5>
                </div>
                <p>
                  1403 Washington Ave, New Orlea ns, LA 70130, United States
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div
                className="footer-widget footer-contact"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-title">
                  <h5>contact us</h5>
                </div>
                <ul>
                  <li>
                    <a href="mailto:wellfood@gmail.com">
                      <u>wellfood@gmail.com</u>
                    </a>
                  </li>
                  <li>
                    <a href="callto:+(1)0987654321">+(1) 098 765 4321</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="footer-widget opening-hour"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-title">
                  <h5>opening hour</h5>
                </div>
                <ul>
                  <li>
                    Monday – Friday: <span>8am – 4pm</span>
                  </li>
                  <li>
                    Saturday: <span>8am – 12am</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="footer-widget footer-text"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-title">
                  <h5>Follow Us</h5>
                </div>
                <div className="social-style-one mt-5">
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
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container rel text-center">
          <ul className="footer-bottom-nav">
            <li>
              <Link href="product-details">Hamburger</Link>
            </li>
            <li>
              <a href="#">Pizza</a>
            </li>
            <li>
              <Link href="product-details">Vegetable roll</Link>
            </li>
            <li>
              <Link href="product-details">Sea fish</Link>
            </li>
            <li>
              <Link href="product-details">Fried chicken</Link>
            </li>
            <li>
              <a href="#">Burger</a>
            </li>
            <li>
              <a href="#">Saladr</a>
            </li>
          </ul>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-arrow-alt-up" />
          </button>
        </div>
        <hr className="mt-25 mb-30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <Link href="/">Wellfood</Link>. All Rights
                  Reserved{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer6 = () => {
  return (
    <footer
      className="main-footer footer-two bgc-black pt-120 rpt-90 rel z-1"
      style={{ backgroundImage: "url(assets/images/background/footer-bg.png)" }}
    >
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget footer-text">
                <div className="footer-title">
                  <h5>Location</h5>
                </div>
                <p>
                  1403 Washington Ave, New Orlea ns, LA 70130, United States
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>contact us</h5>
                </div>
                <ul>
                  <li>
                    <a href="mailto:wellfood@gmail.com">
                      <u>wellfood@gmail.com</u>
                    </a>
                  </li>
                  <li>
                    <a href="callto:+(1)0987654321">+(1) 098 765 4321</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget opening-hour">
                <div className="footer-title">
                  <h5>opening hour</h5>
                </div>
                <ul>
                  <li>
                    Monday – Friday: <span>8am – 4pm</span>
                  </li>
                  <li>
                    Saturday: <span>8am – 12am</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget footer-text">
                <div className="footer-title">
                  <h5>Follow Us</h5>
                </div>
                <div className="social-style-one mt-5">
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
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container rel text-center">
          <ul className="footer-bottom-nav">
            <li>
              <Link href="product-details">Hamburger</Link>
            </li>
            <li>
              <a href="#">Pizza</a>
            </li>
            <li>
              <Link href="product-details">Vegetable roll</Link>
            </li>
            <li>
              <Link href="product-details">Sea fish</Link>
            </li>
            <li>
              <Link href="product-details">Fried chicken</Link>
            </li>
            <li>
              <a href="#">Burger</a>
            </li>
            <li>
              <a href="#">Saladr</a>
            </li>
          </ul>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-arrow-alt-up" />
          </button>
        </div>
        <hr className="mt-25 mb-30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <Link href="/">Wellfood</Link>. All Rights
                  Reserved{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
