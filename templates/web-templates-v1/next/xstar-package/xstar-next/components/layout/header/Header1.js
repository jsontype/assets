import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>

            <header className={`header-section cmn-fixed py-lg-0 py-6 ${scroll ? "animated fadeInDown header-fixed" : ""}`}>
                <div className="container">
                    <div className="main-navbar">
                        <nav className="navbar-custom">
                            <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link href="/" className="brand-logo">
                                        <img className="w-100" src="/assets/img/logo/logo.png" alt="logo" />
                                    </Link>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-5">
                                        <Link href="/javascript:void(0)" className="search-trigger search-icon d-lg-none d-block">
                                            <i className="fal fa-search" />
                                        </Link>
                                        <button className={`navbar-toggle-btn d-block d-lg-none ${isMobileMenu ? "open" : ""}`} type="button" onClick={handleMobileMenu}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                                <div className="navbar-toggle-item" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                                    <Menu />
                                </div>
                                <div className="d-lg-flex d-none d-grid justify-content-center ph-clickwrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-3">
                                    <div className="search-shopcart d-flex gap-xxl-9 gap-xl-5 gap-3">
                                        <a onClick={handleSearch} className="search-trigger search-icon">
                                            <i className="fal fa-search" />
                                        </a>
                                        <Link href="/contact" className="shop-cart">
                                            <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_6205_2234)">
                                                    <path d="M13.6814 12.6667H7.60217C6.72549 12.6667 5.94818 12.0993 5.71093 11.2867L3.65611 4.41932C3.58311 4.17066 3.34045 3.99999 3.06333 3.99999H1.45327C1.07948 3.99999 0.777344 3.70132 0.777344 3.33332C0.777344 2.96532 1.07948 2.66666 1.45327 2.66666H3.06333C3.94 2.66666 4.71664 3.23399 4.95389 4.04666L5.33849 5.33332H15.6768C16.0986 5.33332 16.4987 5.53132 16.7468 5.86332C16.9928 6.19266 17.0638 6.60466 16.9414 6.99399L15.547 11.3593C15.2739 12.1473 14.5257 12.6667 13.6814 12.6667Z" fill="white" />
                                                    <path d="M8.2122 16C7.46666 16 6.86035 15.402 6.86035 14.6667C6.86035 13.9313 7.46666 13.3333 8.2122 13.3333C8.95775 13.3333 9.56406 13.9313 9.56406 14.6667C9.56406 15.402 8.95775 16 8.2122 16Z" fill="white" />
                                                    <path d="M12.9436 16C12.1981 16 11.5918 15.402 11.5918 14.6667C11.5918 13.9313 12.1981 13.3333 12.9436 13.3333C13.6892 13.3333 14.2955 13.9313 14.2955 14.6667C14.2955 15.402 13.6892 16 12.9436 16Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_6205_2234">
                                                        <rect width="16.2222" height={16} fill="white" transform="translate(0.777344)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <Link href="/contact" className="d-flex align-items-center gap-sm-3 gap-2 touch-btn cmn-btn">
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up" />
                                        </span>
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
