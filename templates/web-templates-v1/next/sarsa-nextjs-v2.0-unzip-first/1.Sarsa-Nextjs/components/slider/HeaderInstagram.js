import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"

export default function HeaderInstagram() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={5}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <div className="header__instagram-item">
                        <a href="#" className="popup-image"><img src="/assets/img/instagram/insta01.jpg" alt="img" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="header__instagram-item">
                        <a href="#" className="popup-image"><img src="/assets/img/instagram/insta02.jpg" alt="img" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="header__instagram-item">
                        <a href="#" className="popup-image"><img src="/assets/img/instagram/insta03.jpg" alt="img" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="header__instagram-item">
                        <a href="#" className="popup-image"><img src="/assets/img/instagram/insta04.jpg" alt="img" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="header__instagram-item">
                        <a href="#" className="popup-image"><img src="/assets/img/instagram/insta05.jpg" alt="img" /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="header__instagram-item">
                        <a href="#" className="popup-image"><img src="/assets/img/instagram/insta06.jpg" alt="img" /></a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
