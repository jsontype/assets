const Footer = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                <img src="img/logo/logo.png" alt="aali image" />
              </div>
              <div className="social">
                <span>Connect</span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-instagram-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  Designed with love by{" "}
                  <a
                    className="line_anim"
                    href="https://themeforest.net/user/codeefly"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Codeefly
                  </a>{" "}
                  © {new Date().getFullYear()}
                </p>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a className="line_anim" href="#">
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a className="line_anim" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="line_anim" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Footer;
