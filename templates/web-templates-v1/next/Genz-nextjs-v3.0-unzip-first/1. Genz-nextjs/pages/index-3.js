import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Hero3 from "@/components/sections/Hero3"
import EditorPicked3 from "@/components/sections/EditorPicked3"
import PopularCategories from "@/components/sections/PopularCategories"
import RecentPosts3 from "@/components/sections/RecentPosts3"
import SidebarBottom from "@/components/sections/SidebarBottom"
import PartnersLogs from "@/components/sections/PartnersLogs"

export default function Home3() {
    return (
        <>
            <Head>
                <title>Genz - Home 3</title>
            </Head>

            <Layout>
                <Hero3 />
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <EditorPicked3 />
                                <PopularCategories />
                                <RecentPosts3 />
                                <SidebarBottom />
                                <PartnersLogs />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}