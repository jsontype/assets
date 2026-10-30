import Link from 'next/link'
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import categories from "@/utils/categoriesData"

SwiperCore.use([Autoplay, Navigation])

const TrendingTopic2 = () => {

    return (
        <>
            <div className="text-center mt-70">
                <h2 className="color-linear mb-10">Trending Topics</h2>
                <p className="text-lg color-gray-500">Discover the most outstanding articles in all topics</p>
            </div>
            <div className="mb-70 mt-70">
                <div className="box-swiper">
                    <div className="swiper-container">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            navigation={{
                                prevEl: ".swiper-button-prev-style-2",
                                nextEl: ".swiper-button-next-style-2",
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
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            className="swiper-wrapper"
                        >
                            {categories.map((item, i) => (
                                <SwiperSlide className="swiper-slide"  key={i}>
                                    <div className="card-style-1">
                                        <Link href="/blog-archive">
                                            <div className="card-image"><img src={`assets/imgs/page/categories/${item.imgBig}`} alt="Genz" />
                                                <div className="card-info">
                                                    <div className="info-bottom">
                                                        <h6 className="color-white mb-5">{item.title}</h6>
                                                        <p className="text-xs color-gray-500"> {item.article} Articles</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-button-prev swiper-button-prev-style-2" />
                        <div className="swiper-button-next swiper-button-next-style-2" />
                    </div>
                    </div>
            </div>
        </>
    );
};

export default TrendingTopic2;

