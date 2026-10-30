import Link from "next/link"
import Sidebar from "./Sidebar"

export default function Header7({ scroll,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    langToggle,
    handleLangToggle,
    handleSidebarClose,
    handleSidebarOpen }) {
    return (
        <>
            <header className="header__style-seven">
                <div className="header__top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-7">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="offcanvas-toggle">
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
                            <div className="col-xl-6 col-lg-5 col-md-5 order-3 order-lg-0">
                                <div className="header__top-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." />
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-5 order-2 order-lg-2">
                                <div className="header__top-right">
                                    <ul className="list-wrap">
                                        <li className="news-btn"><Link href="#newsletter" className="btn"><span className="btn-text">subscribe</span></Link></li>
                                        <li className="lang d-none d-sm-block">
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    ENG
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                <Sidebar handleSidebarClose={handleSidebarClose} />
            </header>

        </>
    )
}
