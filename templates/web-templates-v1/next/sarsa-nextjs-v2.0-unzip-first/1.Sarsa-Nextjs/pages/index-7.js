import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'

const AdventureIsotope = dynamic(() => import('@/components/elements/AdventureIsotope'), {
    ssr: false,
})

export default function Home7() {
    return (
        <>
            <Layout>
                <AdventureIsotope />
            </Layout>
        </>
    )
}