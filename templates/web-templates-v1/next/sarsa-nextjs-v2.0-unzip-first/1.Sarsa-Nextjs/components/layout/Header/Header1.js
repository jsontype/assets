import Link from 'next/link'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Sidebar from './Sidebar'

const Header1 = ({
    scroll,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    langToggle,
    handleLangToggle,
    handleSidebarClose,
    handleSidebarOpen }) => {
    return (
        <>
            <header>
                <div className="header__top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-6 col-sm-6 order-2 order-lg-0">
                                <div className="header__top-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." />
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3 order-0 order-lg-2 d-none d-md-block">
                                <div className="header__top-logo logo text-lg-center">
                                    <Link href="/" className="logo-dark"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                    <Link href="/" className="logo-light"><img src="/assets/img/logo/w_logo.png" alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6 order-3 d-none d-sm-block">
                                <div className="header__top-right">
                                    <ul className="list-wrap">
                                        <li className="news-btn"><Link href="#newsletter" className="btn"><span className="btn-text">subscribe</span></Link></li>
                                        <li className="lang">
                                            <div className="dropdown">
                                                <button className={`dropdown-toggle ${langToggle ? "show" : ""}`} type="button" onClick={handleLangToggle}>
                                                    ENG
                                                </button>
                                                <ul className={`dropdown-menu ${langToggle ? "show" : ""}`}>
                                                    <li><Link className="dropdown-item" href="#">SPA</Link></li>
                                                    <li><Link className="dropdown-item" href="#">GRE</Link></li>
                                                    <li><Link className="dropdown-item" href="#">CIN</Link></li>
                                                    <li><Link className="dropdown-item" href="#">CIN</Link></li>
                                                </ul>
                                            </div>
                                        </li>
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
                                <Menu handleMobileMenuOpen={handleMobileMenuOpen} handleSidebarOpen={handleSidebarOpen} offCanvasNav/>
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