
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Hero1() {
    return (
        <>
            
            <section className="hero-section-version1 position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v1-content position-relative">
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between">
                                <h1 className="white-clr text-uppercase">
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        Next Generation
                                    </span>
                                    <span>
                                        <span className="text-italic me-3" data-aos="zoom-in-right" data-aos-duration={2100}>
                                            Creative 
                                        </span>
                                        <span className="designers" data-text="Agency" data-aos="zoom-in" data-aos-duration={2000}>Agency</span>
                                    </span>
                                </h1>
                                <VideoPopup style={1}/>
                            </div>
                            <div className="hero-sponsor">
                                <div className="sponsor-inner d-flex align-items-center gap-xxl-13 gap-xl-10 gap-lg-8 gap-md-6 gap-5 mb-xxl-10 mb-xl-7 mb-lg-6 mb-6">
                                    <Link href="/">
                                        <img src="/assets/img/client/c1.png" alt="img" />
                                    </Link>
                                    <Link href="/">
                                        <img src="/assets/img/client/c2.png" alt="img" />
                                    </Link>
                                    <Link href="/">
                                        <img src="/assets/img/client/c3.png" alt="img" />
                                    </Link>
                                </div>
                                <div className="brandin-wrap d-block">
                                    <h4 className="white-clr brading-text">
                                        1k + Brands Trust Us
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Exprience box */}
                <div className="hero-expriencebox d-flex align-items-center">
                    <div className="expri-thumb">
                        <img src="/assets/img/banner/bn-expri.png" alt="img" />
                    </div>
                    <div className="expri-content d-flex align-items-center gap-xxl-11 gap-xl-9 gap-lg-7 gap-6">
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                12+
                            </h6>
                            <span className="yer spantext-clr">
                                years of experience
                            </span>
                        </div>
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                25K+
                            </h6>
                            <span className="yer spantext-clr">
                                completed projects
                            </span>
                        </div>
                    </div>
                </div>
                {/* Element */}
                <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="hero-arrow" />
            </section>
        </>
    )
}
