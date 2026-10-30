import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import Sidebar from "./Sidebar"

export default function Header4({ scroll,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    langToggle,
    handleLangToggle,
    handleSidebarClose,
    handleSidebarOpen }) {
    return (
        <>
            <header className="header__style-two header__style-four">
                <div className="header__top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 d-none d-md-block">
                                <div className="header__top-right header__top-menu">
                                    <ul className="list-wrap">
                                        <li className="lang">
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    ENGLISH
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><Link className="dropdown-item" href="#">SPAnish</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Hindi</Link></li>
                                                    <li><Link className="dropdown-item" href="#">chinese</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Arabic</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link href="#">About</Link></li>
                                        <li><Link href="#">Contacts</Link></li>
                                        <li><Link href="#">Advertise</Link></li>
                                        <li className="buy-theme"><Link href="#">Buy theme <span>$19</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5">
                                <div className="header__top-bar-right">
                                    <ul className="list-wrap top-bar-social">
                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                    </ul>
                                    <Link href="#" className="sign-in"><i className="fas fa-user" /> Sign in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-5 d-none d-md-block">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="offcanvas-toggle"  onClick={handleSidebarOpen}>
                                        <Link href="#"><i className="flaticon-menu-bar" /></Link>
                                    </div>
                                    <div className="header__top-logo logo d-none d-lg-block">
                                        <Link href="/" className="logo-dark">
                                            <img src="/assets/img/logo/logo.png" alt="Logo" />
                                        </Link>
                                        <Link href="/" className="logo-light">
                                            <img src="/assets/img/logo/w_logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                <div className="header__banner-add text-center text-lg-end">
                                    <Link href="#"><img src="/assets/img/others/advertisement.png" alt="img" /></Link>
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
