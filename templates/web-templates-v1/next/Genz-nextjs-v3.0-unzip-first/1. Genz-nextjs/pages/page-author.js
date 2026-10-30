import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Pagination from "@/components/elements/Pagination"
import Hero6 from "@/components/sections/Hero6"

import data from "@/utils/blogData"

export default function PageAuthor() {
    return (
        <>
            <Head>
                <title>
                    Genz - Author Bio
                </title>
            </Head>
            <Layout>
                <Hero6 />
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="mt-50">
                                    <h2 className="color-linear d-inline-block mb-10">Posted by Steven</h2>
                                    <p className="text-lg color-gray-500">Exclusive author</p>
                                    <div className="mt-50 mb-50">
                                        <div className="row mt-50 mb-10">
                                            {data.slice(0, 2).map((item, i) => (
                                                <div className="col-lg-6" key={i}>
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20">
                                                            <Link className="post-type" href="#" />
                                                            <Link href={`/blog/${item.id}`} >
                                                                <img src={`assets/imgs/page/travel-tip/${item.img}`} alt="Genz" />
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    <Link className="color-gray-700 text-sm" href="/blog-archive"># Travel
                                                                    </Link>
                                                                    <Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link>
                                                                </div>
                                                                <div className="col-5 text-end">
                                                                    <span className="color-gray-700 text-sm timeread">3 mins read</span>
                                                                </div>
                                                            </div>
                                                            <Link href={`/blog/${item.id}`} >
                                                                <h4 className="color-white mt-20">{item.title} </h4>
                                                            </Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author">
                                                                        <img src={`assets/imgs/page/homepage1/${item.author}`} alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">{item.authorTitle}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {data.slice(2,8).map((item, i) => (
                                                <div className="col-lg-4" key={i}>
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" />
                                                            <Link href={`/blog/${item.id}`} ><img src={`assets/imgs/page/travel-tip/${item.img}`} alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href={`/blog/${item.id}`} >
                                                                <h5 className="color-white mt-20">{item.title}</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author">
                                                                        <img src={`assets/imgs/page/homepage1/${item.author}`} alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">{item.authorTitle}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <Pagination />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}