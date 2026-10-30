import Link from "next/link"

const Hero6 = () => {
    return (
        <>
            <div className="banner banner-home4 bg-gray-850">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-1" />
                        <div className="col-xl-10 col-lg-12">
                            <div className="pt-20">
                                <div className="box-banner-4">
                                    <div className="banner-image">
                                        <img src="assets/imgs/page/homepage4/banner.png" alt="Genz" />
                                    </div>
                                    <div className="banner-info">
                                        <span className="text-sm-bold color-gray-600">Hello Everyone!</span>
                                        <h3 className="color-linear d-inline-block mt-10 mb-15">I'm Steven, a lover of technology, business and experiencing new things</h3>
                                        <div className="box-socials">
                                            <Link className="bg-gray-800 hover-up" href="#">
                                                <span className="fb" />
                                            </Link>
                                            <Link className="bg-gray-800 hover-up" href="#">
                                                <span className="inst" />
                                            </Link>
                                            <Link className="bg-gray-800 hover-up" href="#">
                                                <span className="snap" />
                                            </Link>
                                            <Link className="bg-gray-800 hover-up" href="#">
                                                <span className="tw" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero6;
