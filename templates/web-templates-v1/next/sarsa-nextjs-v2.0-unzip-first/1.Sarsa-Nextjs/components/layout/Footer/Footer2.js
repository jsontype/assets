import Link from 'next/link'

export default function Footer2({footerClass}) {
    return (
        <>
            <footer className={`footer-area ${footerClass}`}>
                <div className="container">
                    <div className="footer__logo-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer__logo logo">
                                    <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="footer__social">
                                    <ul className="list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f" /> Facebook <span>25K</span></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /> Twitter <span>44K</span></a></li>
                                        <li><a href="#"><i className="fab fa-youtube" /> Youtube <span>91K</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright__text">
                                    <p>NextJS version By <a href="http://alithemes.com">AliThemes.com</a> - {new Date().getFullYear()}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright__menu">
                                    <ul className="list-wrap">
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Advertise</a></li>
                                        <li><a href="#">Store</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
