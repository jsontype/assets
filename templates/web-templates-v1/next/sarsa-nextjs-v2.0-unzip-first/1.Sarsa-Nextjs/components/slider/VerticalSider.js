import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Pagination } from "swiper"

export default function VerticalSider() {
    return (
        <>
            <Swiper
                direction={"vertical"}
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                className="tgslider__trending-active"
            >
                <SwiperSlide className="tgslider__trending-item">
                    <div className="tgslider__trending-thumb">
                        <Link href="/blog/1"><img src="/assets/img/category/trending_thumb01.png" alt="img" /></Link>
                    </div>
                    <div className="tgslider__trending-content">
                        <h6 className="title"><Link href="/blog/1">How to climb the career latter and don’t waste your youth...</Link></h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="tgslider__trending-item">
                    <div className="tgslider__trending-thumb">
                        <Link href="/blog/1"><img src="/assets/img/category/trending_thumb02.png" alt="img" /></Link>
                    </div>
                    <div className="tgslider__trending-content">
                        <h6 className="title"><Link href="/blog/1">Observable universes each of which would comprise...</Link></h6>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
