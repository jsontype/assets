import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Pricing = () => {
  return (
    <div className="section pricing" id="section-pricing">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Pricing</div>
          <div className="subtitle">My Plans</div>
        </div>
        {/* pricing items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.price}>
            <SwiperSlide className="item">
              <div className="pricing-item">
                <div className="icons">
                  <i className="fas fa-star" />
                </div>
                <div className="name">Basic</div>
                <div className="amount">
                  <span className="number">
                    <span className="dollar">$</span>
                    <span>39</span>
                    <span className="period">hour</span>
                  </span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>Advetising</li>
                    <li>Game Development</li>
                    <li className="disable">Music Writing</li>
                    <li className="disable">Photography</li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  <span className="animated-button">
                    <span>Buy Now</span>
                  </span>
                  <i className="icon fas fa-chevron-right" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="pricing-item">
                <div className="icons">
                  <i className="fas fa-rocket" />
                </div>
                <div className="name">Premium</div>
                <div className="amount">
                  <span className="number">
                    <span className="dollar">$</span>
                    <span>59</span>
                    <span className="period">hour</span>
                  </span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>Advetising</li>
                    <li>Game Development</li>
                    <li>Music Writing</li>
                    <li>
                      Photography <strong>new</strong>
                    </li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  <span className="animated-button">
                    <span>Buy Now</span>
                  </span>
                  <i className="icon fas fa-chevron-right" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="pricing-item">
                <div className="icons">
                  <i className="fas fa-rocket" />
                </div>
                <div className="name">Ultimate</div>
                <div className="amount">
                  <span className="number">
                    <span className="dollar">$</span>
                    <span>59</span>
                    <span className="period">hour</span>
                  </span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>Advetising</li>
                    <li>Game Development</li>
                    <li>Music Writing</li>
                    <li>
                      Photography <strong>new</strong>
                    </li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  <span className="animated-button">
                    <span>Buy Now</span>
                  </span>
                  <i className="icon fas fa-chevron-right" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="price_prev prev fas fa-chevron-left" />
            <span className="price_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
