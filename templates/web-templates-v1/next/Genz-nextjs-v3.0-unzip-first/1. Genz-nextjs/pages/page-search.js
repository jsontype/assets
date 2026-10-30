import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Pagination from "@/components/elements/Pagination"

export default function PageSearch() {
    return (
        <>
            <Head>
                <title>
                    Genz - Search
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row align-items-end mt-50">
                                    <div className="col-lg-12 text-center">
                                        <div className="d-inline-block position-relative">
                                            <h1 className="color-linear mb-10">Search results</h1>
                                        </div>
                                        <p className="color-gray-500 text-base mb-20">We found 22 articles for "Hello" key word</p>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <div className="box-breadcrumbs">
                                            <ul className="breadcrumb">
                                                <li><Link className="home" href="/">Home</Link></li>
                                                <li><span>Search results</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800 mt-30 mb-30" />
                                    </div>
                                </div>
                                <div className="box-list-posts mt-40">
                                    <div className="row">
                                        <div className="col-lg-8 m-auto">
                                            <div className="box-list-posts mt-30">
                                                <div className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                            </div>
                                                        </div><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link>
                                                    </div>
                                                    <div className="card-info"><Link href="/single-sidebar">
                                                        <h3 className="mb-20 color-white">What Are NFTs? Non-Fungible Tokens &amp; Crypto Art Explained</h3></Link>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                            </div>
                                                        </div><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link>
                                                    </div>
                                                    <div className="card-info"><Link href="/single-sidebar">
                                                        <h3 className="mb-20 color-white">5 Resources To Find Diverse Stock Images For Your Website</h3></Link>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                            </div>
                                                        </div><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link>
                                                    </div>
                                                    <div className="card-info"><Link href="/single-sidebar">
                                                        <h3 className="mb-20 color-white">What if you could spend the lockdown at Hogwarts</h3></Link>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                            </div>
                                                        </div><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link>
                                                    </div>
                                                    <div className="card-info"><Link href="/single-sidebar">
                                                        <h3 className="mb-20 color-white">Inside 3D Illustration with Elements Author Amrit Pal Singh</h3></Link>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                            </div>
                                                        </div><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link>
                                                    </div>
                                                    <div className="card-info"><Link href="/single-sidebar">
                                                        <h3 className="mb-20 color-white">Indian digital artists are exploring the latest craze: Cryptoart</h3></Link>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                            </div>
                                                        </div><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link>
                                                    </div>
                                                    <div className="card-info"><Link href="/single-sidebar">
                                                        <h3 className="mb-20 color-white">How Young Indian Digital Artists See A New Future In NFTs</h3></Link>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up">
                                                        <div className="box-author mb-20"><img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                            </div>
                                                        </div><Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">Working Tips</Link>
                                                    </div>
                                                    <div className="card-info"><Link href="/single-sidebar">
                                                        <h3 className="mb-20 color-white">NFT: The new brush stroke in the Indian art world</h3></Link>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Pagination />
                                        </div>
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