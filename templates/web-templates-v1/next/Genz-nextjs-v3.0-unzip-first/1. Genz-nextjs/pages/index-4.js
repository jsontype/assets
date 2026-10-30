import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Hero4 from "@/components/sections/Hero4"
import RecentPosts4 from "@/components/sections/RecentPosts4"
import PopularCategories from "@/components/sections/PopularCategories"
import EditorPicked from "@/components/sections/EditorPicked"
import SidebarBottom from "@/components/sections/SidebarBottom"
import PartnersLogs from "@/components/sections/PartnersLogs"

export default function Home4() {
    return (
        <>
            <Head>
                <title>Genz - Home 4</title>
            </Head>
            <Layout>
                <Hero4 />
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <RecentPosts4 />
                                <PopularCategories />
                                <EditorPicked />
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