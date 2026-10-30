import Layout from "@/components/layout/Layout"
import NftSlider from "@/components/slider/NftSlider"
import PopularSlider from "@/components/slider/PopularSlider"
import TrendingSlider from "@/components/slider/TrendingSlider"
import data from "@/util/blogData"
import Link from "next/link"
import { useState } from 'react'
import Marquee from "react-fast-marquee"
import ModalVideo from 'react-modal-video'

export default function Home5() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={5} footerStyle={3} footerClass="footer-style-three footer-bg">
                <section className="slider__area slider__style-two fix" style={{ backgroundImage: 'url("/assets/img/bg/banner_bg.jpg")' }} >
                    <div className="container">
                        <div className="slider-active">
                            <NftSlider />
                        </div>
                        <div className="slider__marquee clearfix">
                            <div className="marquee_mode">
                                <Marquee className="js-marquee" pauseOnHover={true}>
                                    <h6 className="item">BTC $20211.23 <span>+1.07%</span></h6>
                                    <h6 className="item">eth $1533.56 <span>+3.12%</span></h6>
                                    <h6 className="item">bnb $281.43 <span>+0.02%</span></h6>
                                    <h6 className="item">busd $1.00 <span>+0.01%</span></h6>
                                    <h6 className="item minus">xrp $0.33 <span>-2.62%</span></h6>
                                    <h6 className="item">ada $0.45 <span>+0.16%</span></h6>
                                    <h6 className="item minus">sol $31.54 <span>-1.14%</span></h6>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="popular__post-area section__hover-line pt-75 pb-75">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">Popular</span>
                                        <h3 className="section__main-title">Popular Post</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">More Popular Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trending__slider">
                            <div className="swiper-container popular-active">
                                <PopularSlider />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trending-post-area white-bg section__hover-line pt-75 pb-80">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">Popular Posts</span>
                                        <h3 className="section__main-title">Trending News</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">More Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trending__slider">
                            <div className="swiper-container trending-active">
                                <TrendingSlider showItem={4} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video-post-area nft-video-post section__hover-line pt-75 pb-80">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">Video</span>
                                        <h3 className="section__main-title">Recent Video Post</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">More Video Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="video__post-item big-post">
                                    <div className="video__post-thumb">
                                        <Link href="/blog/86"><img src="/assets/img/nft/nft_blog08.jpg" alt="img" /></Link>
                                        <a onClick={() => setOpen(true)} className="popup-video"><i className="fas fa-play" /></a>
                                    </div>
                                    <div className="video__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">technology</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h3 className="title tgcommon__hover"><Link href="/blog/86">The multiverse is a hypothetical group of multiple universes.</Link></h3>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                {data.slice(86, 90).map((item, i) => (
                                    <div className="video__post-item side-post" key={i}>
                                        <div className="video__post-thumb tgImage__hover">
                                            <a onClick={() => setOpen(true)} className="popup-video"><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /><i className="fas fa-play" /></a>
                                        </div>
                                        <div className="video__post-content">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            </ul>
                                            <h3 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="stories-post-area white-bg section__hover-line pt-75 pb-40">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">Stories</span>
                                        <h3 className="section__main-title">Popular Stories</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">Stories Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-gutters-40">
                            {data.slice(91, 93).map((item, i) => (
                                <div className="col-md-6" key={i}>
                                    <div className="stories-post__item" key={i}>
                                        <div className="stories-post__thumb tgImage__hover">
                                            <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                        </div>
                                        <div className="stories-post__content video__post-content">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                                <li>nov 21, 2022</li>
                                            </ul>
                                            <h3 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            {data.slice(85, 89).map((item, i) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
                                    <div className="trending__post stories-small-post__item">
                                        <div className="trending__post-thumb tgImage__hover">
                                            <Link href="#" className="addWish"><i className="fal fa-heart" /></Link>
                                            <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                        </div>
                                        <div className="trending__post-content">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                            </ul>
                                            <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                                            <ul className="post__activity list-wrap">
                                                <li><i className="fal fa-signal" /> 1.5k</li>
                                                <li><Link href={`/blog/${item.id}`}><i className="fal fa-comment-dots" /> 150</Link></li>
                                                <li><i className="fal fa-share-alt" /> 32</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}