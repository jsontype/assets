import Link from "next/link"
import Typewriter from 'typewriter-effect'

const Hero3 = () => {
    return (
        <>
            <div className="banner banner-home3 bg-gray-850">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-1" />
                        <div className="col-xl-10 col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 pt-100"><span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">Hello Everyone!</span>
                                    <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">I’m
                                        <Typewriter
                                            options={{
                                                wrapperClassName: "typewrite color-linear",
                                                strings: ['Brian Clark', 'Designer', 'Creator'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                                        </div>
                                    </div>
                                    <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                                        <div className="inner-subscriber bg-gray-800">
                                            <form className="d-flex" action="#">
                                                <input className="input-sybscriber" type="text" placeholder="Type your email address" />
                                                <button className="btn btn-linear btn-arrow-right">Subscribe<i className="fi-rr-arrow-small-right" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="box-socials"><Link className="bg-gray-800 hover-up" href="#"><span className="fb" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="inst" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="snap" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="tw" /></Link></div>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <div className="banner-img no-bg">
                                        <div className="banner-1 shape-1"><img src="assets/imgs/page/homepage3/banner-1.jpg" alt="Genz" /></div>
                                        <div className="banner-2 shape-2"><img src="assets/imgs/page/homepage3/banner-2.jpg" alt="Genz" /></div>
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

export default Hero3;