import { Swiper, SwiperSlide } from "swiper/react"
import data from "@/util/blogData"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"


export default function TrendingSlider({ showItem }) {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={showItem}
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
                        slidesPerView: showItem,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: showItem,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.slice(0, 8).map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="trending__post">
                            <div className="trending__post-thumb tgImage__hover">
                                <Link href="/#" className="addWish"><i className="fal fa-heart" /></Link>
                                <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                {item.trending && <span className="is_trend"><i className="fas fa-bolt" /></span>}
                            </div>
                            <div className="trending__post-content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link href="/blog">Gaming</Link></li>
                                    <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                </ul>
                                <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>Scientists speculate that ours might not be held</Link></h4>
                                <ul className="post__activity list-wrap">
                                    <li><i className="fal fa-signal" /> 1.0k</li>
                                    <li><Link href={`/blog/${item.id}`}><i className="fal fa-comment-dots" /> 128</Link></li>
                                    <li><i className="fal fa-share-alt" /> 29</li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
