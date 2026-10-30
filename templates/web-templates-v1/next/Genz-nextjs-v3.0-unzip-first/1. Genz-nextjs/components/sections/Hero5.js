import Typewriter from 'typewriter-effect'

const Hero5 = () => {
    return (
        <>
            <div className="banner">
                <div className="row align-items-end">
                    <div className="col-lg-6 pt-100">
                        <span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">Hello Everyone!</span>
                        <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">
                            I’m
                            <Typewriter
                                options={{
                                    wrapperClassName: "typewrite color-linear",
                                    strings: ["Brian Clark", "Designer", "Creator"],
                                    autoStart: true,
                                    loop: true
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
                                    <button className="btn btn-linear btn-arrow-right">
                                        Subscribe
                                        <i className="fi-rr-arrow-small-right" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                            <img src="assets/imgs/page/homepage1/banner.png" alt="Genz" />
                            <div className="pattern-1">
                                <img src="assets/imgs/template/pattern-1.svg" alt="Genz" />
                            </div>
                            <div className="pattern-2">
                                <img src="assets/imgs/template/pattern-2.svg" alt="Genz" />
                            </div>
                            <div className="pattern-3">
                                <img src="assets/imgs/template/pattern-3.svg" alt="Genz" />
                            </div>
                            <div className="pattern-4">
                                <img src="assets/imgs/template/pattern-4.svg" alt="Genz" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero5;
