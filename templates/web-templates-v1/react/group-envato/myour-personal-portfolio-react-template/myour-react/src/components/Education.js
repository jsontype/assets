import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Education = () => {
  return (
    <div className="section resume" id="section-education">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Education</div>
          <div className="subtitle">Studied at</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.education}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2011-2012</div>
                <div className="name">
                  Art University <br />
                  New York
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
                <div className="date">2010-2011</div>
                <div className="name">
                  Programming Course <br />
                  Paris
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
                <div className="date">2009-2010</div>
                <div className="name">
                  Web Design Course <br />
                  London
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
                  Art Course <br />
                  London
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
                  Art Course <br />
                  London
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
            <span className="education_prev prev fas fa-chevron-left" />
            <span className="education_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
