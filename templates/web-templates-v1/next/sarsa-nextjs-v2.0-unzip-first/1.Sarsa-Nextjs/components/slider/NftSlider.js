import { Swiper, SwiperSlide } from "swiper/react"
import data from "@/util/blogData"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"

export default function NftSlider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                className="slider-active"
            >
                {data.slice(94, 97).map((item, i) => (
                    <SwiperSlide className="slider__item" key={i}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="slider__content">
                                    <ul className="tgbanner__content-meta list-wrap" data-animation-in="tg-fadeInUp" data-delay-in=".2">
                                        <li className="category"><Link href="/blog">bitcoin</Link></li>
                                        <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                        <li>nov 21, 2022</li>
                                    </ul>
                                    <h2 className="title" data-animation-in="tg-fadeInUp" data-delay-in=".6">The Top Privacy Coin Saw Fewer Percentage Losses Than...</h2>
                                    <Link href={`/blog/${item.id}`} className="btn border-btn" data-animation-in="tg-fadeInUp" data-delay-in={1}><span className="btn-text">Read More</span> <i className="far fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="slider__img-wrap">
                                    <img src={`/assets/img/${item.group}/${item.img}`} className="main-img" alt="img" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
