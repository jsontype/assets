import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/elements/Breadcrumb"
import SingleContent from "@/components/sections/SingleContent"

export default function Single1() {
    return (
        <>
            <Head>
                <title>
                    Genz - Single post
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
                                        <Breadcrumb title="Digital Design That Will Help You Start Your Business" />
                                    </div>
                                </div>
                                <div className="row mt-50 align-items-end">
                                    <div className="col-lg-8 m-auto text-center">
                                        <h2 className="color-linear">Digital Design That Will Help You Start Your Business</h2>
                                    </div>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-lg-12">
                                        <div className="image-detail mb-30"><img className="bdrd16" src="assets/imgs/page/single/img6.jpg" alt="Genz" /></div>
                                    </div>
                                    <div className="col-lg-8 m-auto">
                                        <div className="row mb-40">
                                            <div className="col-md-6 mb-10">
                                                <div className="box-author"><img src="assets/imgs/page/about/author2.png" alt="Genz" />
                                                    <div className="author-info">
                                                        <h6 className="color-gray-700">William Randolph</h6><span className="color-gray-700 text-sm mr-30">25 April 2023</span><span className="color-gray-700 text-sm">3 mins to read</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-start text-md-end">
                                                <div className="d-inline-block pt-10">
                                                    <div className="d-flex align-item-center">
                                                        <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
                                                        <Link className="icon-media icon-fb" href="#" />
                                                        <Link className="icon-media icon-tw" href="#" />
                                                        <Link className="icon-media icon-printest" href="#"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <SingleContent />
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