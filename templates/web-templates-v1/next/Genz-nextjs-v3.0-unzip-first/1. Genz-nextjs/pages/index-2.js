import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Hero2 from "@/components/sections/Hero2"
import EditorPicked2 from "@/components/sections/EditorPicked2"
import TrendingTopic2 from "@/components/slider/TrendingTopic2"
import RecentPosts2 from "@/components/sections/RecentPosts2"
import Sidebar from "@/components/layout/Sidebar"

export default function Home2() {
    return (
        <>
            <Head>
                <title>Genz - Home 2</title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <Hero2 />
                                <EditorPicked2 />
                                <TrendingTopic2 />
                                <div className="row mt-70">
                                    <div className="col-lg-12 mb-50">
                                        <h2 className="color-linear d-inline-block mb-10">Recent posts</h2>
                                        <p className="text-lg color-gray-500">Don't miss the latest trends</p>
                                    </div>
                                    <div className="col-lg-8">
                                        <RecentPosts2 />
                                    </div>
                                    <div className="col-lg-4">
                                        {/* Display sidebar  */}
                                        <Sidebar />
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