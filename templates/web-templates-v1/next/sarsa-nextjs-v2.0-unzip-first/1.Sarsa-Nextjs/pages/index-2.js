import Layout from "@/components/layout/Layout"
import InteriroSlider from "@/components/slider/InteriroSlider"
import PopularSlider from "@/components/slider/PopularSlider"
import TrendingSlider from "@/components/slider/TrendingSlider"
import data from "@/util/blogData"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Home2() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
             <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
                <section className="slider__area fix">
                    <div className="container">
                        <InteriroSlider />
                    </div>
                </section>
                <section className="popular__post-area white-bg section__hover-line pt-75 pb-75">
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
                <section className="category__area section__hover-line pt-75">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">category</span>
                                        <h3 className="section__main-title">Top Categories</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">More Category <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="category__wrapper">
                            <div className="category__item">
                                <Link href="/blog">
                                    <img src="/assets/img/category/category01.jpg" alt="img" />
                                    <span className="cat-name">technology</span>
                                </Link>
                            </div>
                            <div className="category__item">
                                <Link href="/blog">
                                    <img src="/assets/img/category/category02.jpg" alt="img" />
                                    <span className="cat-name">multiverse</span>
                                </Link>
                            </div>
                            <div className="category__item">
                                <Link href="/blog">
                                    <img src="/assets/img/category/category03.jpg" alt="img" />
                                    <span className="cat-name">sports</span>
                                </Link>
                            </div>
                            <div className="category__item">
                                <Link href="/blog">
                                    <img src="/assets/img/category/category04.jpg" alt="img" />
                                    <span className="cat-name">nature</span>
                                </Link>
                            </div>
                            <div className="category__item">
                                <Link href="/blog">
                                    <img src="/assets/img/category/category05.jpg" alt="img" />
                                    <span className="cat-name">crypto / nft</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="advertisement pt-80">
                    <div className="container">
                        <div className="col-12">
                            <div className="advertisement__image text-center">
                                <Link href="#"><img src="/assets/img/others/advertisement.png" alt="advertisement" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="trending-post-area section__hover-line pt-75 pb-80">
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
                <section className="video-post-area section__hover-line white-bg pt-75 pb-80">
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
                                        <Link href="/blog/42"><img src="/assets/img/interior/interior_12.jpg" alt="img" /></Link>
                                        <a onClick={() => setOpen(true)} className="popup-video"><i className="fas fa-play" /></a>
                                    </div>
                                    <div className="video__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">technology</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h3 className="title tgcommon__hover"><Link href="/blog/42">The multiverse is a hypothetical group of multiple universes.</Link></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                {data.slice(42, 46).map((item, i) => (
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
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="handpicked-post-area section__hover-line pt-75 pb-50">
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
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="handpicked__item big-post">
                                    <div className="handpicked__thumb tgImage__hover">
                                        <Link href="/blog/46"><img src="/assets/img/interior/interior_16.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="handpicked__content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">technology</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h2 className="title tgcommon__hover"><Link href="/blog/46">The multiverse is a hypothetical group of multiple universes.</Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="handpicked__sidebar-post">
                                    <div className="row">
                                        {data.slice(46, 50).map((item, i) => (
                                            <div className="col-xl-6 col-lg-4 col-md-6" key={i}>
                                                <div className="handpicked__item small-post">
                                                    <div className="handpicked__thumb tgImage__hover">
                                                        <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                                    </div>
                                                    <div className="handpicked__content">
                                                        <ul className="tgbanner__content-meta list-wrap">
                                                            <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                                        </ul>
                                                        <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>Scientists speculate that ours might not be held.</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="newsletter-style-two black-bg pt-80 pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-6 col-xl-7 col-lg-8">
                                <div className="newsletter__title text-center mb-35">
                                    <div className="newsletter__title-icon">
                                        <i className="fas fa-envelope-open-text" />
                                    </div>
                                    <span className="sub-title">newsletter</span>
                                    <h4 className="title">Get notified of the best deals on <br /> our WordPress Themes</h4>
                                </div>
                                <div className="newsletter__form-wrap text-center">
                                    <form action="#" className="newsletter__form">
                                        <div className="newsletter__form-grp">
                                            <input type="email" placeholder="Email address" required />
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    I agree that my submitted data is being collected and stored.
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn" type="submit">
                                            <span className="text">Subscribe</span>
                                            <i className="fas fa-paper-plane" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}