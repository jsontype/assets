import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PopularCategories from "@/components/sections/PopularCategories"
import Sidebar2 from "@/components/layout/Sidebar2"
import Pagination from "@/components/elements/Pagination"
import PageHeader1 from "@/components/elements/PageHeader1"
import data from "@/utils/blogData2"

export default function Archive2() {
    return (
        <>
            <Head>
                <title>Genz - Blog archive 2</title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <PageHeader1
                                    title={'Travel Tips'}
                                    des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.'}
                                />
                                <div className="box-list-posts mt-40">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="box-list-posts">
                                                {data.slice(0, 6).map((item, i) => (
                                                    i === 0 ? (
                                                        <div className="card-blog-1 card-blog-2 hover-up wow animate__animated animate__fadeIn" key={i}>
                                                        <div className="card-image mb-20">
                                                            <Link href={`/blog/${item.id}`}>
                                                            <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <Link href={`/blog/${item.id}`}>
                                                            <h4 className="color-white mt-30">{item.title}</h4>
                                                            </Link>
                                                            <p className="mt-25 text-lg color-gray-700">{item.excerpt}</p>
                                                            <div className="row align-items-center mt-45">
                                                            <div className="col-7">
                                                                <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    ) : (
                                                        <div className="card-list-posts wow animate__animated animate__fadeIn" key={i}>
                                                        <div className="card-image hover-up">
                                                            <Link href={`/blog/${item.id}`} ><img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" /></Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">{item.category}</Link>
                                                            <Link href={`/blog/${item.id}`} >
                                                            <h4 className="mt-15 mb-20 color-white">{item.title}</h4>
                                                            </Link>
                                                            <p className="color-gray-500">{item.excerpt}</p>
                                                            <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive">#
                                                                Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                            <Pagination />
                                        </div>
                                        <div className="col-lg-4">
                                            <Sidebar2 />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-10" />
                               <PopularCategories />

                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}