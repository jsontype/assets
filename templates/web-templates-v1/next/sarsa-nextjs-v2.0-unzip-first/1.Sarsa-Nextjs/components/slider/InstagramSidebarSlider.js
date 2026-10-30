import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"


export default function InstagramSidebarSlider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    1350: {
                        slidesPerView: 3,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <Link href="https://www.instagram.com/" target="_blank"><img src="/assets/img/instagram/side_insta01.jpg" alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://www.instagram.com/" target="_blank"><img src="/assets/img/instagram/side_insta02.jpg" alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://www.instagram.com/" target="_blank"><img src="/assets/img/instagram/side_insta03.jpg" alt="img" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="https://www.instagram.com/" target="_blank"><img src="/assets/img/instagram/side_insta04.jpg" alt="img" /></Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
