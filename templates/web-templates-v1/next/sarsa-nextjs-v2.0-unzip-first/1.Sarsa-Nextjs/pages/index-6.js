import BlogSidebar from "@/components/elements/BlogSidebar"
import Layout from "@/components/layout/Layout"
import PopularSlider2 from "@/components/slider/PopularSlider2"
import data from "@/util/blogData"
import Link from "next/link"

export default function Home6() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3} footerClass="black-bg" logoWhite>
                <section className="tgbanner__area-five pt-80 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="tgbanner__five-item big-post">
                                    <div className="tgbanner__five-thumb tgImage__hover">
                                        <Link href="/blog" className="tags">adventure</Link>
                                        <Link href="/blog/98">
                                            <img src="/assets/img/lifestyle/life_style01.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="tgbanner__five-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h2 className="title tgcommon__hover"><Link href="/blog/98">The multiverse is a hypothetical group of multiple universes.</Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-lg-block gx-30">
                                <div className="tgbanner__five-item small-post">
                                    <div className="tgbanner__five-thumb tgImage__hover">
                                        <Link href="/blog" className="tags">Travel</Link>
                                        <Link href="/blog/99">
                                            <img src="/assets/img/lifestyle/life_style02.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="tgbanner__five-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h2 className="title tgcommon__hover"><Link href="/blog/99">That share an universals hierarchy a large camp or burger.</Link></h2>
                                    </div>
                                </div>
                                <div className="tgbanner__five-item small-post">
                                    <div className="tgbanner__five-thumb tgImage__hover">
                                        <Link href="/blog" className="tags">adventure</Link>
                                        <Link href="/blog/100">
                                            <img src="/assets/img/lifestyle/life_style03.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="tgbanner__five-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h2 className="title tgcommon__hover"><Link href="/blog/100">That share an universals hierarchy a large camp or burger.</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="popular__post-area lifestyle__popular-area white-bg section__hover-line pt-75 pb-75">
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
                                <PopularSlider2 />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="latest-post-area pt-80 pb-80">
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
                                    {data.slice(106, 111).map((item, i) => (
                                        <div className="latest__post-item" key={i}>
                                            <div className="latest__post-thumb tgImage__hover">
                                                <Link href={`/blog/${item.id}`}><img src={`/assets/img/${item.group}/${item.img}`} alt="img" /></Link>
                                            </div>
                                            <div className="latest__post-content">
                                                <ul className="tgbanner__content-meta list-wrap">
                                                    <li className="category"><Link href="/blog">technology</Link></li>
                                                    <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                                    <li>nov 22, 2022</li>
                                                </ul>
                                                <h3 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>The multiverse is a hypothetical no group of the multiple universes.</Link></h3>
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
                <section className="handpicked-post-area white-bg section__hover-line pt-75 pb-50">
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
                                        <Link href="/blog/110"><img src="/assets/img/lifestyle/life_style13.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="handpicked__content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">technology</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                            <li>nov 21, 2022</li>
                                        </ul>
                                        <h2 className="title tgcommon__hover"><Link href="/blog/110">The multiverse is a hypothetical group of multiple universes.</Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="handpicked__sidebar-post">
                                    <div className="row">
                                        {data.slice(110, 114).map((item, i) => (
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
                                                        <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
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
            </Layout>
        </>
    )
}