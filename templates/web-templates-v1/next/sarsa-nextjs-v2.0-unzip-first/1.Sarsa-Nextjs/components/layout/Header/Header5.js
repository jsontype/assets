import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import Sidebar from "./Sidebar"

export default function Header5({scroll,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    langToggle,
    handleLangToggle,
    handleSidebarClose,
    handleSidebarOpen}) {
    return (
        <>
            <header className="header__style-two header__style-three header__style-five">
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
                                                    <li><a className="dropdown-item" href="#">SPAnish</a></li>
                                                    <li><a className="dropdown-item" href="#">Hindi</a></li>
                                                    <li><a className="dropdown-item" href="#">chinese</a></li>
                                                    <li><a className="dropdown-item" href="#">Arabic</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contacts</a></li>
                                        <li><a href="#">Advertise</a></li>
                                        <li className="buy-theme"><a href="#">Buy theme <span>$19</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5">
                                <div className="header__top-bar-right">
                                    <ul className="list-wrap top-bar-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-behance" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                        <li><a href="#"><i className="fab fa-youtube" /></a></li>
                                    </ul>
                                    <a href="#" className="sign-in"><i className="fas fa-user" /> Sign in</a>
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
                                <Menu handleMobileMenuOpen={handleMobileMenuOpen} handleSidebarOpen={handleSidebarOpen} logoAlt/>
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
