import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '@/components/layout/Layout'
import Breadcrumb from "@/components/elements/Breadcrumb"

const PortfolioDetails = () => {
    return (
        <>
            <Head>
                <title>
                    Genz - Portfolio Details
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-30 border-bottom border-gray-800 pb-20">
                                    <div className="box-breadcrumbs">
                                        <Breadcrumb title="Business Card Design" />
                                    </div>
                                </div>
                                <div className="row mt-50 align-items-end">
                                    <div className="col-lg-8 m-auto text-center">
                                        <h2 className="color-linear">Business Card Design</h2>
                                    </div>
                                </div>
                                <div className="row mt-30 mb-50">
                                    <div className="swiper-container swiper-group-2">
                                        <div className="swiper-wrapper wow animate__animated animate__fadeIn">
                                            <div className="swiper-slide">
                                                <div className="image-detail mb-30"><img className="bdrd16" src="assets/imgs/page/portfolio/portfolio-1.png" alt="Genz" /></div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="image-detail mb-30"><img className="bdrd16" src="assets/imgs/page/portfolio/portfolio-1-2.png" alt="Genz" /></div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="image-detail mb-30"><img className="bdrd16" src="assets/imgs/page/portfolio/portfolio-1-3.png" alt="Genz" /></div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="image-detail mb-30"><img className="bdrd16" src="assets/imgs/page/portfolio/portfolio-1-1.png" alt="Genz" /></div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="content-detail border-gray-800">
                                            <h3 className="color-white mb-30 wow animate__animated animate__fadeIn">Project Details</h3>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p>
                                            <div className="row mt-50 wow animate__animated animate__fadeIn">
                                                <div className="col-lg-6 gallery-left"><img className="img-bdrd-16 mb-30" src="assets/imgs/page/portfolio/portfolio-2.png" alt="Genz" /></div>
                                                <div className="col-lg-6 gallery-right"><img className="img-bdrd-16 mb-20" src="assets/imgs/page/portfolio/portfolio-3.png" alt="Genz" /><img className="img-bdrd-16" src="assets/imgs/page/portfolio/portfolio-4.png" alt="Genz" /></div>
                                            </div>
                                            <p className="text-center text-lg color-gray-500 wow animate__animated animate__fadeIn">The brand identity</p>
                                            <h3 className="color-white mt-50 mb-30 wow animate__animated animate__fadeIn">Hire me</h3>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                        </div>
                                        <div className="box-tags wow animate__animated animate__fadeIn"><Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="blog-archive">#Nature</Link><Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="blog-archive">#Beauty</Link><Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="blog-archive">#Travel Tips</Link><Link className="btn btn-tags bg-gray-850 border-gray-800 hover-up" href="blog-archive">#House</Link></div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="sidebar">
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Project information</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-comments">
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Category</p>
                                                            <p className="color-gray-500">Graphic Design, Marketing Kitsz</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Client</p>
                                                            <p className="color-gray-500">Orion Coporation</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Project date</p>
                                                            <p className="color-gray-500">01 November, 2023</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Project URL</p>
                                                            <p className="color-gray-500"><Link className="text-white" href="#">www.orioncoporation.com</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-inline-block pt-10 wow animate__animated animate__fadeIn">
                                                <div className="d-flex align-item-center">
                                                    <h6 className="d-inline-block color-gray-500 mr-10">Share</h6><Link className="icon-media icon-fb" href="#" /><Link className="icon-media icon-tw" href="#" /><Link className="icon-media icon-printest" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    );
};

export default PortfolioDetails;