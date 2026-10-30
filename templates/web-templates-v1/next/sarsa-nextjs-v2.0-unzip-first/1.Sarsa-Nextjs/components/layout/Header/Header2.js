import Link from 'next/link'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Sidebar from './Sidebar'

const Header1 = ({ scroll,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    langToggle,
    handleLangToggle,
    handleSidebarClose,
    handleSidebarOpen }) => {
    return (
        <>
            <header className="header__style-two">
                <div className="header__top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 d-none d-lg-block">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="offcanvas-toggle" onClick={handleSidebarOpen}>
                                        <Link href="#"><i className="flaticon-menu-bar" /></Link>
                                    </div>
                                    <div className="header__top-logo logo">
                                        <Link href="/" className="logo-dark">
                                            <img src="/assets/img/logo/logo.png" alt="Logo" />
                                        </Link>
                                        <Link href="/" className="logo-light">
                                            <img src="/assets/img/logo/w_logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="footer__social">
                                    <ul className="list-wrap">
                                        <li><Link href="#"><i className="fab fa-facebook-f" /> Facebook <span>25K</span></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter" /> Twitter <span>44K</span></Link></li>
                                        <li><Link href="#"><i className="fab fa-youtube" /> Youtube <span>91K</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-fixed-height" className={`${scroll ? "active-height" : ""}`} />
                <div id="sticky-header" className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Menu handleMobileMenuOpen={handleMobileMenuOpen} handleSidebarOpen={handleSidebarOpen} />
                                <MobileMenu handleMobileMenuClose={handleMobileMenuClose} />
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar handleSidebarClose={handleSidebarClose} />
            </header>
        </>
    )
}

export default Header1