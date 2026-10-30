import Link from "next/link"
import { useState } from "react"

const MobileMenu = ({ handleMobileMenuClose, openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <div className="tgmobile__menu">
                <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={handleMobileMenuClose}><i className="fas fa-times" /></div>
                    <div className="nav-logo">
                        <Link href="/" className="logo-dark"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                        <Link href="/" className="logo-light"><img src="/assets/img/logo/w_logo.png" alt="Logo" /></Link>
                    </div>
                    <div className="tgmobile__search">
                        <form action="#">
                            <input type="text" placeholder="Search here..." />
                            <button><i className="far fa-search" /></button>
                        </form>
                    </div>
                    <div className="tgmobile__menu-outer">
                        <ul className="navigation">
                            <li className="active menu-item-has-children" onClick={() => handleToggle(1)}><Link href="#">Home</Link>
                                <ul className="sub-menu" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}>
                                    <li><Link href="/">Home Default</Link></li>
                                    <li><Link href="/index-2">Home Interior</Link></li>
                                    <li><Link href="/index-3">Home Travel</Link></li>
                                    <li><Link href="/index-4">Home Technology</Link></li>
                                    <li className="active"><Link href="/index-5">Home NFT</Link></li>
                                    <li><Link href="/index-6">Home Fashion</Link></li>
                                    <li><Link href="/index-7">Home Adventure</Link></li>
                                    <li><Link href="/index-8">Home Minimal</Link></li>
                                </ul>
                                <div className={`dropdown-btn ${isActive.key == 1 ? "open" : ""}`}><span className="plus-line" /></div></li>
                            <li><Link href="/lifestyle">Lifestyle</Link></li>
                            <li><Link href="/travel">Travel</Link></li>
                            <li className="menu-item-has-children" onClick={() => handleToggle(2)}><Link href="#">Post Type</Link>
                                <ul className="sub-menu" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}>
                                    <li><Link href="/blog">Our Blog</Link></li>
                                    <li><Link href="/blog/1">Blog Details</Link></li>
                                </ul>
                                <div className={`dropdown-btn ${isActive.key == 2 ? "open" : ""}`}><span className="plus-line" /></div></li>
                            <li><Link href="/nft">NFT</Link></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="tgmobile__menu-backdrop" onClick={handleMobileMenuClose} />
        </>
    )
}

export default MobileMenu