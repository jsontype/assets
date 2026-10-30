import { Swiper, SwiperSlide } from "swiper/react"
import data from "@/util/blogData"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"

export default function PopularSlider2() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
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
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
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
                className="swiper-wrapper"
            >
                {data.slice(101, 105).map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="trending__post">
                            <div className="trending__post-thumb tgImage__hover">
                                <Link href="/blog" className="tags">{item.category}</Link>
                                <Link href={`/blog/${item.id}`} className="image"><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                            </div>
                            <div className="trending__post-content">
                                <h3 className="post--count">01</h3>
                                <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
