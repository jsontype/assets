import BlogSidebar from "@/components/elements/BlogSidebar"
import Layout from "@/components/layout/Layout"
import TechnologySlider from "@/components/slider/TechnologySlider"
import data from "@/util/blogData"
import Link from "next/link"

export default function Home4() {
    return (
        <>
            <Layout headerStyle={4}>
                <section className="tgslider__area-four pt-20">
                    <div className="container">
                        <div className="tgslider__top">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="tgslider__trending-post">
                                        <h4 className="title">Trending:</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-none d-lg-block">
                                    <div className="tgslider__nav" />
                                </div>
                            </div>
                        </div>
                        <div className="tgslider__wrapper">
                            <TechnologySlider />
                        </div>
                    </div>
                </section>
                <section className="latest-post-area pt-80 pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-8">
                                <div className="latest__post-wrap">
                                    {data.slice(72, 78).map((item, i) => (
                                        <div className="latest__post-item-two" key={i}>
                                            <div className="latest__post-thumb-two tgImage__hover">
                                                <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                            </div>
                                            <div className="latest__post-content-two">
                                                <ul className="tgbanner__content-meta list-wrap">
                                                    <li className="category"><Link href="/blog">technology</Link></li>
                                                    <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                                    <li>nov 22, 2022</li>
                                                </ul>
                                                <h3 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>The multiverse is a hypothetical group of the multiple universes.</Link></h3>
                                                <div className="latest__post-bottom">
                                                    <ul className="post__activity list-wrap">
                                                        <li><i className="fal fa-signal" /> 1.5k</li>
                                                        <li><Link href={`/blog/${item.id}`}><i className="fal fa-comment-dots" /> 150</Link></li>
                                                        <li><i className="fal fa-share-alt" /> 32</li>
                                                    </ul>
                                                    <div className="latest__post-read-more">
                                                        <Link href={`/blog/${item.id}`}>read more <i className="far fa-long-arrow-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="latest__post-more text-center">
                                    <Link href="#" id="loadMore" className="btn"><span className="text">Load More</span> <i className="far fa-plus" /></Link>
                                </div>
                                <div className="newsletter-style-two style-four mt-80">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-12">
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