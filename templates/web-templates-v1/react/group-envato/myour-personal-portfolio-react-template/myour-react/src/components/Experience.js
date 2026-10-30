import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Experience = () => {
  return (
    <div className="section resume" id="section-experience">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Experience</div>
          <div className="subtitle">Working with</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.experience}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">Present</div>
                <div className="name">
                  The Turin <br />
                  Olympics
                </div>
                <div className="single-post-text">
                  <p>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2016-2018</div>
                <div className="name">
                  Red <br />
                  Drifting
                </div>
                <div className="single-post-text">
                  <p>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2014-2016</div>
                <div className="name">
                  World <br />
                  Economy
                </div>
                <div className="single-post-text">
                  <p>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2012-2014</div>
                <div className="name">
                  Art Director <br />
                  Facebook
                </div>
                <div className="single-post-text">
                  <p>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2010-2012</div>
                <div className="name">
                  Art Director <br />
                  Facebook
                </div>
                <div className="single-post-text">
                  <p>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="experience_prev prev fas fa-chevron-left" />
            <span className="experience_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
