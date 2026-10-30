import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'

const MinimalIsotope = dynamic(() => import('@/components/elements/MinimalIsotope'), {
    ssr: false,
})

export default function Home8() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} footerClass="black-bg border-top-none">
                <MinimalIsotope />
            </Layout>
        </>
    )
}