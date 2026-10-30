import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import '../public/assets/css/animate.min.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/flaticon.css'
import '../public/assets/css/fontawesome-all.min.css'
import '../public/assets/css/imageRevealHover.css'
import '../public/assets/css/magnific-popup.css'
import '../public/assets/css/main.css'
import '../public/assets/css/slick.css'
import '../public/assets/css/spacing.css'
import '../public/assets/css/swiper-bundle.css'

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <Preloader />
        )}
    </>)
}

export default MyApp
