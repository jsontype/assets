import Layout from "@/components/layout/Layout"
import TrendingSlider from "@/components/slider/TrendingSlider"
import data from "@/util/blogData"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Home1() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1}>
                <section className="tgbanner__area">
                    <div className="container">
                        <div className="tgbanner__grid">
                            <div className="tgbanner__post big-post">
                                <div className="tgbanner__thumb tgImage__hover">
                                    <Link href="/blog/1"><img src="/assets/img/blog/blog01.jpg" alt="img" /></Link>
                                </div>
                                <div className="tgbanner__content">
                                    <ul className="tgbanner__content-meta list-wrap">
                                        <li className="category"><Link href="/blog">technology</Link></li>
                                        <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                        <li>nov 21, 2022</li>
                                    </ul>
                                    <h2 className="title tgcommon__hover"><Link href="/blog/1">The multiverse is a hypothetical group of multiple universes.</Link></h2>
                                </div>
                            </div>
                            <div className="tgbanner__side-post">
                                <div className="tgbanner__post small-post">
                                    <div className="tgbanner__thumb tgImage__hover">
                                        <Link href="/blog/1"><img src="/assets/img/blog/blog02.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="tgbanner__content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">multiverse</Link></li>
                                        </ul>
                                        <h2 className="title tgcommon__hover"><Link href="/blog/1">Together these universes comprise everything that exists</Link></h2>
                                    </div>
                                </div>
                                <div className="tgbanner__post small-post">
                                    <div className="tgbanner__thumb tgImage__hover">
                                        <Link href="/blog/1"><img src="/assets/img/blog/blog03.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="tgbanner__content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">technology</Link></li>
                                        </ul>
                                        <h2 className="title tgcommon__hover"><Link href="/blog/1">Bubble universes or baby black hole universes may exist...</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trending-post-area section__hover-line pt-25">
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
                <section className="featured-post-area section__hover-line pt-75">
                    <div className="container">
                        <div className="section__title-wrap mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">Featured</span>
                                        <h3 className="section__main-title">Editor Choice</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">More Featured Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {data.slice(8, 14).map((item, i) => (
                                <div className="col-lg-4 col-sm-6" key={i}>
                                    <div className="featured__post">
                                        <div className="featured__thumb" style={{ backgroundImage: `url(/assets/img/blog/${item.img})` }}>0{item.id}</div>
                                        <div className="featured__content">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                <li><span className="by">By</span> <Link href="/blog">Yokolili L.</Link></li>
                                            </ul>
                                            <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="advertisement pt-45 pb-80">
                    <div className="container">
                        <div className="col-12">
                            <div className="advertisement__image text-center">
                                <Link href="/#"><img src="/assets/img/others/advertisement.png" alt="advertisement" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
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
                                        <Link href="/blog/14"><img src="/assets/img/blog/blog14.jpg" alt="img" /></Link>
                                        <a onClick={() => setOpen(true)} className="popup-video"><i className="fas fa-play" /></a>
                                    </div>
                                    <div className="video__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">technology</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h3 className="title tgcommon__hover"><Link href="/blog/1">The multiverse is a hypothetical group of multiple universes.</Link></h3>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                {data.slice(15, 19).map((item, i) => (
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
                <section className="hand-picked-area black-bg fix section__hover-line pt-75 pb-80">
                    <div className="container">
                        <div className="section__title-wrap section__title-white mb-40">
                            <div className="row align-items-end">
                                <div className="col-sm-6">
                                    <div className="section__title">
                                        <span className="section__sub-title">hand-picked</span>
                                        <h3 className="section__main-title">More to Watch</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="section__read-more text-start text-sm-end">
                                        <Link href="/blog">Hand-Picked Post <i className="far fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trending__slider dark-post-slider">
                        <div className="swiper-container handpicked-active">
                            <TrendingSlider showItem={6} />
                        </div>
                    </div>
                </section>
                <section className="stories-post-area section__hover-line pt-75 pb-40">
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
                            {data.slice(24, 26).map((item, i) => (
                                <div className="col-md-6" key={i}>
                                    <div className="stories-post__item">
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
                            {data.slice(26, 30).map((item, i) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
                                    <div className="trending__post stories-small-post__item">
                                        <div className="trending__post-thumb tgImage__hover">
                                            <Link href="/#" className="addWish"><i className="fal fa-heart" /></Link>
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
                <section className="newsletter-area pb-80">
                    <div className="container">
                        <div className="newsletter__wrap">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="newsletter__title">
                                        <span className="sub-title">newsletter</span>
                                        <h4 className="title">Get notified of the best deals on our WordPress Themes</h4>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="newsletter__form-wrap">
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
                                            <button className="btn" type="submit"><span className="text">Subscribe</span> <i className="fas fa-paper-plane" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}