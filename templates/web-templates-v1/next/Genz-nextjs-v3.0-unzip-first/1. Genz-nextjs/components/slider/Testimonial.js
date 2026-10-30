import React from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {
    const data = [
        {
            img: "1.webp",
        },
        {
            img: "2.webp",
        },
        {
            img: "3.webp",
        },
        {
            img: "4.webp",
        },
        {
            img: "5.webp",
        },
    ];
    return (
        <>
            <div className="text-center mt-70 mb-50">
                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Testimonials</h2>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Nettracking is a B2B marketing software for telecommunications industry.</p>
            </div>
            <div className="box-testimonials mb-150animate__fadeIn mb-100">
                <div className="box-swiper"></div>
                    <div className="swiper-container swiper-group-3">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            navigation={{
                                prevEl: ".swiper-button-prev-style-3",
                                nextEl: ".swiper-button-next-style-3",
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                575: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                767: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                991: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1199: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1350: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="swiper-wrapper pt-5"
                        >
                            {data.map((item, i) => (
                                <SwiperSlide className="swiper-slide"  key={i}>
                                    <div className="card-testimonials bg-gray-850 border-gray-800 hover-up">
                                        <div className="box-author mb-20"><img src="/assets/imgs/page/about/author.png" alt="Genz" />
                                            <div className="author-info">
                                                <h6 className="color-gray-700">Karen Adderiy</h6><span className="color-gray-700 text-sm">Alithemes Co</span>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="color-gray-500">Dignissim quis turpis quis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibus id.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-buttons">
                            <div className="swiper-button-prev swiper-button-prev-style-3" />
                            <div className="swiper-button-next swiper-button-next-style-3" />
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Testimonial;

