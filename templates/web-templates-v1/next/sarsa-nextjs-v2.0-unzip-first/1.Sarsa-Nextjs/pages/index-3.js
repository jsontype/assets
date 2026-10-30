import BlogSidebar from "@/components/elements/BlogSidebar"
import Layout from "@/components/layout/Layout"
import HeaderInstagram from "@/components/slider/HeaderInstagram"
import TrendingSlider from "@/components/slider/TrendingSlider"
import data from "@/util/blogData"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Home3() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <HeaderInstagram />
            <Layout headerStyle={3} footerStyle={2} footerClass="footer-style-three white-bg">

                <section className="tgbanner__area-three pt-80">
                    <div className="container">
                        <div className="row align-items-lg-center justify-content-around">
                            <div className="col-xl-3 col-lg-5 col-md-6 order-2 order-xl-0">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart" /></Link>
                                        <Link href="/blog/51"><img src="/assets/img/travel/travel_01.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="/blog/51">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal" /> 1.0k</li>
                                            <li><Link href="/blog/51"><i className="fal fa-comment-dots" /> 128</Link></li>
                                            <li><i className="fal fa-share-alt" /> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 order-0 order-xl-2">
                                <div className="tgbanner__big-post text-center">
                                    <div className="tgbanner__big-post-thumb tgImage__hover">
                                        <Link href="/blog/52"><img src="/assets/img/travel/travel_02.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="tgbanner__big-post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">technology</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h3 className="title tgcommon__hover"><Link href="/blog/52">The multiverse is a hypothetical group of multiple universes.</Link></h3>
                                        <Link href="/blog/52" className="read-more">read more <i className="far fa-plus" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6 order-3 order-xl-3">
                                <div className="tgbanner__trending-news">
                                    <h4 className="tgbanner__trending-title">Trending News</h4>
                                    <ul className="tgbanner__trending-post-list list-wrap">
                                        <li>
                                            <span className="post-count">01</span>
                                            <div className="tgbanner__trending-post-content">
                                                <ul className="tgbanner__content-meta list-wrap">
                                                    <li className="category"><Link href="/blog">movie</Link></li>
                                                    <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                                </ul>
                                                <h4 className="title tgcommon__hover"><Link href="/blog/1">That share an universals hierarchy a large...</Link></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="post-count">02</span>
                                            <div className="tgbanner__trending-post-content">
                                                <ul className="tgbanner__content-meta list-wrap">
                                                    <li className="category"><Link href="/blog">movie</Link></li>
                                                    <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                                </ul>
                                                <h4 className="title tgcommon__hover"><Link href="/blog/1">Why we need guidelines for brain originated...</Link></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="post-count">03</span>
                                            <div className="tgbanner__trending-post-content">
                                                <ul className="tgbanner__content-meta list-wrap">
                                                    <li className="category"><Link href="/blog">movie</Link></li>
                                                    <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                                </ul>
                                                <h4 className="title tgcommon__hover"><Link href="/blog/1">Universes were originated from another...</Link></h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="advertisement pt-40">
                    <div className="container">
                        <div className="col-12">
                            <div className="advertisement__image text-center">
                                <Link href="#"><img src="/assets/img/others/advertisement.png" alt="advertisement" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="recent-post-area section__hover-line pt-75 pb-45">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">Latest Post</span>
                                        <h3 className="section__main-title">Recently Added</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">More Recent Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {data.slice(52, 58).map((item, i) => (
                                <div className="col-lg-4 col-sm-6" key={i}>
                                    <div className="featured__post">
                                        <Link href={`/blog/${item.id}`}>
                                            <div className="featured__thumb" style={{ backgroundImage: `url(/assets/img/travel/${item.img})` }} />
                                        </Link>


                                        <div className="featured__content">
                                            <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>A hypothetical collection of potentially diverse</Link></h4>
                                            <ul className="post__activity list-wrap">
                                                <li><i className="fal fa-signal" /> 1.0k</li>
                                                <li><Link href={`/blog/${item.id}`}><i className="fal fa-comment-dots" /> 128</Link></li>
                                                <li><i className="fal fa-share-alt" /> 29</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="trending-post-area section__hover-line white-bg pt-75 pb-80">
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
                <section className="stories-post-area stories-video-post section__hover-line pt-75 pb-40">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">Video</span>
                                        <h3 className="section__main-title">Video Post</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">More Video Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-gutters-40">
                            {data.slice(59, 61).map((item, i) => (
                                <div className="col-md-6" key={i}>
                                    <div className="stories-post__item">
                                        <div className="stories-post__thumb tgImage__hover">
                                            <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                            <a onClick={() => setOpen(true)} className="popup-video"><i className="fas fa-play" /></a>
                                        </div>
                                        <div className="stories-post__content video__post-content">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                                <li>nov 21, 2022</li>
                                            </ul>
                                            <h3 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                                        </div>
                                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="latest-post-area pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-8">
                                <div className="section__title-wrap mb-40">
                                    <div className="row align-items-end">
                                        <div className="col-sm-6">
                                            <div className="section__title">
                                                <span className="section__sub-title">Latest</span>
                                                <h3 className="section__main-title">Latest News</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="section__read-more text-start text-sm-end">
                                                <Link href="/blog">More Latest Post <i className="far fa-long-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="latest__post-wrap">
                                    {data.slice(62, 71).map((item, i) => (
                                        <div className="latest__post-item" key={i}>
                                            <div className="latest__post-thumb tgImage__hover">
                                                <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                            </div>
                                            <div className="latest__post-content">
                                                <ul className="tgbanner__content-meta list-wrap">
                                                    <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                    <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                                    <li>nov 22, 2022</li>
                                                </ul>
                                                <h3 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}.</Link></h3>
                                                <p>Structured gripped tape invisible moulded cups for sauppor firm hold
                                                    strong powermesh front liner sport detail.</p>
                                                <ul className="post__activity list-wrap">
                                                    <li><i className="fal fa-signal" /> 1.5k</li>
                                                    <li><Link href={`/blog/${item.id}`}><i className="fal fa-comment-dots" /> 150</Link></li>
                                                    <li><i className="fal fa-share-alt" /> 32</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="latest__post-more text-center">
                                    <Link href="#" id="loadMore" className="btn"><span className="text">Load More</span> <i className="far fa-plus" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}