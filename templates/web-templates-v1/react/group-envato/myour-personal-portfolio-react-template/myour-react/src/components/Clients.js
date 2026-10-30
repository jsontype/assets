import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Clients = () => {
  return (
    <div className="section clients" id="section-clients">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Clients</div>
          <div className="subtitle">My partners</div>
        </div>
        {/* clients items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.client}>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client2.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client3.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client1.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client4.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client2.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client3.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client1.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="clients-item">
                <a target="_blank" href="#">
                  <img src="images/client4.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="client_prev prev fas fa-chevron-left" />
            <span className="client_next next fas fa-chevron-right" />
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Clients;
