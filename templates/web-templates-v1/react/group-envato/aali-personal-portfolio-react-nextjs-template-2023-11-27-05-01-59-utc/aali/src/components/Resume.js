import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <span>Know More</span>
                <h3>My Resume</h3>
                <p>
                  I enjoy every step of the design process, from discussion and
                  collaboration to concept and execution
                </p>
              </div>
              <div className="content_inner">
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Cognitive Sciences</h3>
                              <span>University of Maine</span>
                            </div>
                            <div className="right">
                              <span>2018 - 2020</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Civil Engineering</h3>
                              <span>University of Texas</span>
                            </div>
                            <div className="right">
                              <span>2014 - 2018</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Bachelor of Science</h3>
                              <span>Univercity of Oxford</span>
                            </div>
                            <div className="right">
                              <span>2012 - 2014</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInRight" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Product Designer</h3>
                              <span>Easy Computers</span>
                            </div>
                            <div className="right">
                              <span>2018 - running</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>UI/UX Expert</h3>
                              <span>eTheme Group</span>
                            </div>
                            <div className="right">
                              <span>2015 - 2018</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Senior Developer</h3>
                              <span>Envato Studio</span>
                            </div>
                            <div className="right">
                              <span>2012 - 2018</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Aali is a leading web design agency with an
                              award-winning design
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="media" data-background-style="video">
          {" "}
          {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
          <div
            className="video jarallax"
            data-speed={0}
            data-jarallax-video="https://vimeo.com/337293658"
          />
          <div
            className="image jarallax"
            data-speed={0}
            data-img-url="img/about/2.jpg"
          />
          <span
            className="square moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
