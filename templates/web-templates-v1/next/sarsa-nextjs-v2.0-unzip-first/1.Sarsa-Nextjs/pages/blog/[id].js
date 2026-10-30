import BlogSidebar from "@/components/elements/BlogSidebar"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../util/blogData"

export default function BlogDetails() {
    let Router = useRouter()
    const [item, setItem] = useState(null)
    const { id } = Router.query

    useEffect(() => {
        setItem(data.find((data) => data.id == id))
    }, [id])

    return (
        <>
            {item && (
                <Layout breadcrumbCategory={item.category} breadcrumbPostTitle={item.title}>
                    <>
                        <section className="blog-details-area pt-80 pb-100">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-1">
                                        <div className="blog-details-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                                <li><Link href="#"><i className="fas fa-share" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="blog-details-wrap">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href="/blog">{item.category}</Link></li>
                                                <li><span className="by">By</span> <Link href="/blog">alonso d.</Link></li>
                                                <li>nov 22, 2022</li>
                                                <li>23 comments</li>
                                            </ul>
                                            <h2 className="title">{item.title}</h2>
                                            <div className="blog-details-thumb">
                                                <img src={`/assets/img/${item.group}/${item.img}`} alt="" style={{ width: "100%" }} />
                                            </div>
                                            <div className="blog-details-content">
                                                <p>In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon neutral, as part of a comprehensive new sustainability.</p>
                                                <p>When we signed on to the To Whom It May Concern campaign we made a pledge to be 100% renewable by 2030 and carbon zero by 2040,” said Envato CEO Hichame Assi. “It’s a commitment made on the back of our B Corp certification, and one we believe reflects not just our values but a broader sense of how businesses can contribute to fighting climate change.</p>
                                                <p>We are proud that our people can make a positive impact on the world around us through their work at Envato. And while there is still lots of work to do to realise carbon, we’re nonetheless pleased we’ve reached this sustainability milestone and thrilled to partner with Trace to further track and refine the management of our carbon footprint. An through Trace, Envato is now able to more comprehensively measure the amount of carbon emissions the business generates. This includes not just its physical offices in Melbourne, Guadalajara and Los Angeles, but also includes an estimate of the footprint of its 600 plus staff who work flexibly around the world, as well as the usage tied to its tech infrastructure including our cloud computing services.</p>
                                                <div className="blog-details-inner">
                                                    <h3 className="inner-title">Building the Future of Artificial Intelligence</h3>
                                                    <p>When we signed on to the To Whom It May Concern campaign we made a pledge to be 100% renewable by 2030 and carbon zero by 2040,” said Envato CEO Hichame Assi. “It’s a commitment made on the back of our B Corp certification, and one we believe reflects not just our values but a broader sense of how businesses can contribute to fighting climate change.</p>
                                                    <div className="blog-details-images">
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-6">
                                                                <div className="details-inner-image">
                                                                    <img src="/assets/img/lifestyle/life_style02.jpg" alt="img" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6">
                                                                <div className="details-inner-image">
                                                                    <img src="/assets/img/lifestyle/life_style03.jpg" alt="img" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6">
                                                                <div className="details-inner-image">
                                                                    <img src="/assets/img/lifestyle/life_style04.jpg" alt="img" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>The Mount Sandy project in South Australia is one of those supported by Envato through Trace. Its permanent protection of the regionally and culturally important pocket. Trace CEO and Co-Founder Catherine Long said Envato was a perfect example of a fast-moving tech business that already has a demonstrable commitment to sustain.
                                                        “But they needed a solution for measuring and managing their carbon footprint that matched the speed and efficiency of the way they work footprint that matched the speed.</p>
                                                </div>
                                                <blockquote>
                                                    <p>“ 20 years ago today, Steve introduced the world to iMac. It set Apple on a new course and forever changed the way people look at computers. ”</p>
                                                    <div className="blockquote-cite">
                                                        <div className="image">
                                                            <img src="/assets/img/others/about_me.png" alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>Miranda H. Halim</h5>
                                                            <span>Head Of Idea</span>
                                                        </div>
                                                    </div>
                                                </blockquote>
                                                <p>We are proud that our people can make a positive impact on the world around us through their work at Envato. And while there is still lots of work to do to realise carbon, we’re nonetheless pleased we’ve reached this sustainability milestone and thrilled to partner with Trace to further track and refine the management of our carbon footprint. An
                                                    through Trace, Envato is now able to more comprehensively measure the amount of carbon emissions the business generates. This includes not just its physical offices in Melbourne, Guadalajara and Los Angeles, but also includes an estimate of the footprint of its 600 plus staff who work flexibly around the world, as well as the usage tied to its ech infrastructure including our cloud computing services.</p>
                                                <div className="blog-details-inner">
                                                    <h3 className="inner-title">The Creative Cloud</h3>
                                                    <p>When we signed on to the To Whom It May Concern campaign we made a pledge to be 100% renewable by 2030 and carbon zero by 2040,” said Envato CEO Hichame Assi..</p>
                                                    <ul className="list-wrap">
                                                        <li><span>The games generate:</span>Revenue through sales of digital items, such as special costumes, which appear in a rotating storefront that is updated daily.</li>
                                                        <li><span>Players use in-game:</span>Currency to customize their appearance, and the daily refresh of the store incentives players to buy fresh gear or risk missing out on it entirely.</li>
                                                        <li><span>Players have:</span> Already spent more than $1 billion on Fortnite’s in-game purchases, according to IGN report.</li>
                                                    </ul>
                                                </div>
                                                <div className="details-advertisement">
                                                    <Link href="#"><img src="/assets/img/others/advertisement02.png" alt="img" /></Link>
                                                </div>
                                                <p>Envato is now able to more comprehensively measure the amount of carbon emissions the business generates. includes not just its physical offices in Melbourne, Guadalajara and Los Angeles, but also includes an estimate of footprint of its 600 plus staff who work flexibly around the world, as well as the usage tied to its tech infrastructure including our cloud computing services lexibly around the world.</p>
                                            </div>
                                            <div className="blog-details-bottom">
                                                <div className="row align-items-baseline">
                                                    <div className="col-xl-6 col-md-7">
                                                        <div className="blog-details-tags">
                                                            <ul className="list-wrap mb-0">
                                                                <li><Link href="#">technology</Link></li>
                                                                <li><Link href="#">finance</Link></li>
                                                                <li><Link href="#">business</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-5">
                                                        <div className="blog-details-share">
                                                            <h6 className="share-title">Share Now:</h6>
                                                            <ul className="list-wrap mb-0">
                                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="blog-avatar-wrap">
                                                <div className="blog-avatar-img">
                                                    <Link href="#"><i className="far fa-check" /><img src="/assets/img/others/avatar.png" alt="img" /></Link>
                                                </div>
                                                <div className="blog-avatar-content">
                                                    <p>Monty Hython is a Writer at Sarsa and has been covering emerging technologies and
                                                        venture capital there since 2013. He covers a wide variety of news from early and late stage startups to massive tech behemoths.</p>
                                                    <h5 className="name">Alison Fiano</h5>
                                                    <span className="designation">OG Author</span>
                                                </div>
                                            </div>
                                            <div className="blog-prev-next-posts">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-8 col-md-6">
                                                        <div className="pn-post-item">
                                                            <div className="thumb">
                                                                <Link href="/blog/1"><img src="/assets/img/lifestyle/life_style06.jpg" alt="img" /></Link>
                                                            </div>
                                                            <div className="content">
                                                                <span>Prev Post</span>
                                                                <h5 className="title tgcommon__hover"><Link href="/blog/1">3 Stocks to Buy and Hold Through the Panic...</Link></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-8 col-md-6">
                                                        <div className="pn-post-item next-post">
                                                            <div className="thumb">
                                                                <Link href="/blog/1"><img src="/assets/img/lifestyle/life_style07.jpg" alt="img" /></Link>
                                                            </div>
                                                            <div className="content">
                                                                <span>Next Post</span>
                                                                <h5 className="title tgcommon__hover"><Link href="/blog/1">Mood Boards for Product Designers dome...</Link></h5>
                                                            </div>
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
                    </>
                </Layout>
            )}
        </>
    )
}