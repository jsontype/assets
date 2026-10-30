import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import Pagination from "@/components/elements/Pagination"
import PopularCategories from "@/components/sections/PopularCategories"
import data from "@/utils/blogData3"

export default function Archive5() {
    return (
        <>
            <Head>
                <title>Genz - Blog archive 5</title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <PageHeader1
                                    title={'Technology'}
                                    des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.'}
                                />
                                <div className="mt-40 mb-50">
                                    <div className="row mt-50 mb-10" data-masonry="{&quot;percentPosition&quot;: true }">
                                        {data.slice(0, 6).map((item, i) => (
                                            <div className="col-lg-4"  key={i}>
                                                <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                    <div className="card-image mb-20">
                                                        <Link className="post-type" href="#" />
                                                        <Link href={`/blog/${item.id}`}>
                                                            <img src={`assets/imgs/page/interviews/${item.img}`} alt="Genz" />
                                                        </Link>
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="row">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div><Link href={`/blog/${item.id}`}>
                                                            <h5 className="color-white mt-10">{item.title}</h5></Link>
                                                        <div className="row align-items-center mt-20">
                                                            <div className="col-7">
                                                                <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                                    <div className="author-info">
                                                                        <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>
                                <div className="mb-70" />
                                <PopularCategories />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}