import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"


export default function SidePostSlider() {
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
                className="sidePost-active"
            >
                <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post01.jpg")', width: 300 }} >
                    <div className="sidePost__content">
                        <Link href="/blog" className="tag">Technology</Link>
                        <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post02.jpg")', width: 300 }}>
                    <div className="sidePost__content">
                        <Link href="/blog" className="tag">Travel</Link>
                        <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post03.jpg")', width: 300 }}>
                    <div className="sidePost__content">
                        <Link href="/blog" className="tag">Gaming</Link>
                        <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
